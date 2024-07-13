import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";

const Details = () => {
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const goBack = () => {
    // window.history.back(); --> can also be used (useNavigate not reqd in this case)
    navigate(-1);
  };

  return product ? (
    <div className="relative h-full w-[70%] mx-auto p-[8%] flex gap-10 items-center">
      <button
        onClick={goBack}
        className="h-12 w-12 absolute top-[10%] left-[5%] font-semibold rounded-full border-black whitespace-nowrap"
      >
        <img src="/back.svg" />
      </button>
      <div className="w-1/2 h-full">
        <img className="h-full w-full object-contain" src={product.image} />
      </div>

      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-red-500 text-4xl font-semibold">
          {product.title.length > 60
            ? product.title.slice(0, 60) + "..."
            : product.title}
        </h1>
        <p className="capitalize text-zinc-500">Category: {product.category}</p>
        <h2 className="text-xl font-medium">Price: ${product.price}</h2>
        <p className="text-zinc-500">{product.description}</p>
        <div className="mt-2 flex gap-5 text-lg text-white font-semibold">
          <button className="hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-400 px-6 py-[6px] rounded-lg bg-blue-500 duration-100">
            Edit
          </button>
          <button className="hover:bg-white hover:text-black border-2 border-transparent hover:border-red-400 px-6 py-[6px] rounded-lg bg-red-500 duration-100">
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
