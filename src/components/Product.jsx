import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link
      to={`/details/${product.id}`}
      className="group h-[40vh] shadow border border-zinc-200 p-2 duration-200 text-center flex flex-col gap-4 overflow-hidden"
    >
      <div className="w-full h-[75%] group-hover:scale-[1.03] duration-300">
        <img className="w-full h-full object-contain" src={product.image} />
      </div>

      <h1 className="group-hover:text-red-500 duration-100 text-lg font-medium">
        {product.title.length > 40
          ? product.title.slice(0, 40) + "..."
          : product.title}
      </h1>
    </Link>
  );
};

export default Product;
