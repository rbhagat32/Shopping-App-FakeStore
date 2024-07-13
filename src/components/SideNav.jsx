import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [products] = useContext(ProductContext);

  const categories = products.reduce(
    (products, singleProduct) => [...products, singleProduct.category],
    []
  );

  const uniqueCategories = [...new Set(categories)];

  const randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)})`;
  };

  return (
    <div className="w-[15%] h-screen border-r border-zinc-200 flex flex-col gap-4 text-center">
      <h1 className="pt-4 font-bold text-3xl">SideNav</h1>
      <hr className="mx-auto w-[80%] bg-zinc-200 h-[1px] border-none" />
      <div className="flex flex-col items-start gap-2 px-8">
        <Link
          to="/"
          className="text-lg font-medium capitalize whitespace-nowrap hover:text-blue-500 duration-200"
        >
          <span
            style={{ backgroundColor: randomColor() }}
            className="inline-block w-3 h-3 mr-2 rounded-full"
          ></span>
          All Products
        </Link>
        {uniqueCategories.map((category, index) => (
          <Link
            to={`/?category=${category}`}
            key={index}
            className="text-lg font-medium capitalize whitespace-nowrap hover:text-blue-500 duration-200"
          >
            <span
              style={{ backgroundColor: randomColor() }}
              className="inline-block w-3 h-3 mr-2 rounded-full"
            ></span>
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
