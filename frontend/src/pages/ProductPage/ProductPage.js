import React from "react";
import { ReactComponent as Bottles } from "../../Bottles.svg";
import Maps from "../Maps/Maps"
import { Details } from '../../shared/detail'

const ProductPage = (props) => {
  let data_id = props.match.params.id;
  if (Details.length < props.match.params.id) {
    data_id = Details.length;
  }
  const Data = Details[data_id - 1];
  // const items=Data.items;

  return (
    <main className="h-screen overflow-x-hidden">
      <section
        className="bg-green-800 h-1/2  flex flex-col items-center"
        style={{
          clipPath: "ellipse(103% 100% at 50% 0%)",
        }}
      >
        <Bottles className="h-40 m-8" />
        <h1 className="font-sans text-5xl text-white font-bold">{Data.product_name}</h1>
        <h2 className="font-serif text-2xl text-white">{Data.tag}</h2>
      </section>
      <section className="mx-9" id="textSection">
        <p className="font-serif text-lg mt-5">
          {Data.product_description}
        </p>
        <h3 className="font-sans text-xl uppercase font-bold tracking-wide mt-5 mb-2">
          Found in
        </h3>
        <ul className="font-serif text-lg grid grid-cols-2">
          {Data.items.map((item) => (
            <li key={item} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
        <h3 className="font-sans text-xl uppercase font-bold tracking-wide mt-5 mb-2">
          How to recycle
        </h3>
        <p className="font-serif text-lg">
          {Data.recycle_processes}
        </p>
        <h3 className="font-sans text-xl uppercase font-bold tracking-wide mt-5 mb-2">
          Find a recycling center
        </h3>
        <Maps />
      </section>
    </main>
  );
};

export default ProductPage;
