import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import successful from "../assest/Successful.gif";

const Success = () => {
  return (
    toast.success("Order placed successfully"),
    (
      //add completed GIF image
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={successful} className="w-full max-w-sm" />
        <h1 className="text-2xl font-bold">Order placed successfully</h1>
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

export default Success;
