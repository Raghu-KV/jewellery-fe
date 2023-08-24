import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataPlace } from "../Context";

function UserSingleProduct({ singleProduct }) {
  const navigate = useNavigate();
  const { addToCart, cartItem } = useContext(dataPlace);

  const itemsInCart = cartItem.map((item) => item.jewellery);

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

        <p className="text-slate-300 font-bold text-lg">
          Rs.{singleProduct.price}
        </p>

        <div className="mt-2 md:mt-5 flex gap-3">
          <button
            className="text-sm bg-green-800 px-3 py-3 font-bold text-green-200 rounded-lg hover:bg-green-700 transition-all disabled:opacity-50 disabled:bg-gray-800"
            onClick={() => addToCart(singleProduct, singleProduct.id)}
            disabled={itemsInCart.includes(singleProduct.jewellery)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSingleProduct;
