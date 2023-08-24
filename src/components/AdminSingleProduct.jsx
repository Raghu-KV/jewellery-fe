import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataPlace } from "../Context";

function AdminSingleProduct({ singleProduct }) {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(dataPlace);

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
        <p className="text-slate-300 ">{singleProduct.desc}</p>
        <p className="text-slate-300 ">Quantity : {singleProduct.quantity}</p>
        <p className="text-slate-300 font-bold text-lg">
          Rs.{singleProduct.price}
        </p>

        <div className="mt-2 md:mt-5 flex gap-3">
          <button
            className="text-sm bg-sky-800 px-5 py-3 font-bold text-sky-200 rounded-lg hover:bg-sky-700 transition-all"
            onClick={() => navigate(`/admin/edit-product/${singleProduct.id}`)}
          >
            EDIT
          </button>
          <button
            className="text-sm bg-red-800  px-5 py-3 font-bold text-red-200 rounded-lg hover:bg-red-700 transition-all"
            onClick={() => deleteProduct(singleProduct.id)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminSingleProduct;
