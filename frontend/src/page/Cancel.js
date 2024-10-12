import React from "react";
import { toast } from "react-hot-toast";
import caution from "../assest/Caution.gif";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    toast.error("Order placed was not successful"),
    (
      //add completed GIF image
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={caution} className="w-full max-w-sm" />
        <h1 className="text-2xl font-bold">Order placed was not successful</h1>
        <Link
          to="/shop"
          className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Go to Shop
        </Link>
      </div>
    )
  );
};

export default Cancel;
