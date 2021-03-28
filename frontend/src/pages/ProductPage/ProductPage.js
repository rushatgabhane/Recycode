import React from "react";

const ProductPage = () => {
  return (
    <main>
      <div className="bg-green-800">
        <h1 className="font-sans text-5xl text-white text-center font-bold">
          {"HDPE"}
        </h1>
        <h2 className="font-serif text-2xl text-white text-center">
          {"#2 Plastic"}
        </h2>
      </div>
      <div>
        <p className="font-serif text-lg">
          HDPE (high density polyethylene) is a versatile plastic with many
          uses, especially when it comes to packaging. It carries low risk of
          leaching and is readily recyclable into many types of goods.
        </p>
        <h3 className="font-sans uppercase font-bold tracking-wide">
          Found in
        </h3>
        <h3 className="font-sans uppercase font-bold tracking-wide">
          How to recycle
        </h3>
        <p className="font-serif text-lg">
          HDPE can often be picked up through most curbside recycling programs,
          although some allow only containers with necks. Flimsy plastics (like
          grocery bags and plastic wrap) usually can't be recycled, but some
          stores will collect and recycle them.
        </p>
        <h3 className="font-sans uppercase font-bold tracking-wide">
          Find a recycling center
        </h3>
      </div>
    </main>
  );
};

export default ProductPage;
