import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import SideNav from "./SideNav";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import { Link, useLocation } from "react-router-dom";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(null);

  const getProductsByCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (category === "undefined") setfilteredProducts(products); // category === "undefined" means we are on homepage and we have to show all products.
    if (category !== "undefined") getProductsByCategory();
  }, [category, products]);

  return products.length > 0 ? (
    <>
      <SideNav />
      <div className="pt-3 pb-20 px-10 w-[85%] h-full overflow-y-auto text-center">
        <h1 className="font-bold text-4xl mb-5">Home Page</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts ? (
            filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
