import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataPlace } from "../Context";

function ItemsInCart({ singleProduct }) {
  const [quantity, setQuantity] = useState(singleProduct.quantity);
  const navigate = useNavigate();
  const { removeItemFromCart, changeQuantity } = useContext(dataPlace);

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
        <form className="flex items-center my-2">
          <label className="text-white">Quantity:</label>
          <select
            type="number"
            className=" ml-3 block w-full rounded-lg h-8 px-3  bg-slate-700 text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Search for category..."
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </form>
        <p className="text-slate-300 font-bold text-lg">
          Rs.{singleProduct.price}
        </p>

        <div className="mt-2 md:mt-5 flex gap-3">
          <button
            className="text-sm bg-green-800 px-3 md:py-3 md:font-bold text-green-200 rounded-lg hover:bg-green-700 transition-all"
            onClick={() => changeQuantity(quantity, singleProduct.id)}
          >
            Apply Changes
          </button>

          <button
            className="text-sm bg-red-800 px-3 md:py-3 md:font-bold text-red-200 rounded-lg hover:bg-red-700 transition-all"
            onClick={() => removeItemFromCart(singleProduct.id)}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemsInCart;
