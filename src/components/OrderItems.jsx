import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataPlace } from "../Context";

function OrderItems({ singleProduct }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center border-2 border-sky-500 rounded-lg">
      <div className="shrink-0">
        <img
          src={singleProduct.imageUrl}
          alt="jewellery image"
          className=" w-32 lg:w-40 lg:h-60 rounded-l-md md:object-cover"
        />
      </div>
      <div className="p-2 ml-5">
        <h2 className="text-white font-bold text-2xl md:text-3xl mb-4">
          {singleProduct.jewellery}
        </h2>
        {singleProduct.status && (
          <p className="text-slate-300 ">{singleProduct.status}</p>
        )}

        <p className="text-slate-300 font-bold text-lg">
          Rs.{singleProduct.price}
        </p>
      </div>
    </div>
  );
}

export default OrderItems;
