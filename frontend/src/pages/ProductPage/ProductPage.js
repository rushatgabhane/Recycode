import React from "react";
import { ReactComponent as Bottles } from "../../Bottles.svg";

const ProductPage = () => {
  const items = [
    "Milk jugs",
    "Shampoo bottles",
    "Juice bottles",
    "Shopping bags",
    "Butter tubs",
    "Bleach",
    "Detergent",
    "Cereal box liners",
  ];

  return (
    <main className="h-screen">
      <section
        className="bg-green-800 h-1/2  flex flex-col items-center"
        style={{
          clipPath: "ellipse(103% 100% at 50% 0%)",
        }}
      >
        <Bottles className="h-40 m-8" />
        <h1 className="font-sans text-5xl text-white font-bold">{"HDPE"}</h1>
        <h2 className="font-serif text-2xl text-white">{"#2 Plastic"}</h2>
      </section>
      <section className="mx-9" id="textSection">
        <p className="font-serif text-lg mt-5">
          HDPE (high density polyethylene) is a versatile plastic with many
          uses, especially when it comes to packaging. It carries low risk of
          leaching and is readily recyclable into many types of goods.
        </p>
        <h3 className="font-sans text-xl uppercase font-bold tracking-wide mt-5 mb-2">
          Found in
        </h3>
        <ul className="font-serif text-lg grid grid-cols-2">
          {items.map((item) => (
            <li key={item} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
        <h3 className="font-sans text-xl uppercase font-bold tracking-wide mt-5 mb-2">
          How to recycle
        </h3>
        <p className="font-serif text-lg">
          HDPE can often be picked up through most curbside recycling programs,
          although some allow only containers with necks. Flimsy plastics (like
          grocery bags and plastic wrap) usually can't be recycled, but some
          stores will collect and recycle them.
        </p>
        <h3 className="font-sans text-xl uppercase font-bold tracking-wide mt-5 mb-2">
          Find a recycling center
        </h3>
      </section>
    </main>
  );
};

export default ProductPage;
