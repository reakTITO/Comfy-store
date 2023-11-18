import { feature } from "../constants/constant";
import { CardItem } from "../components";
import { useGlobalContext } from "../useGlobleContext";
import { useState } from "react";

const Featured = () => {
  const { productsList } = useGlobalContext();
  const newProductsList = productsList.slice(0, 3);

  return (
    <section className="padding dark:bg-gray-800 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-dark_gray font-semibold dark:text-slate-200">
          Featured Products
        </h1>
        <div className=" mt-4 grid md:grid-cols-2 lg:grid-cols-3 py-12 border-t gap-4 dark:border-black">
          {newProductsList.map((item) => (
            <CardItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Featured;
