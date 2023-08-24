import ItemsInCart from "../components/ItemsInCart";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { dataPlace } from "../Context";

function Cart() {
  const navigate = useNavigate();

  const { cartItem, cartData, removeItemFromCart, placeOrder } =
    useContext(dataPlace);
  const [search, setSearch] = useState("");
  console.log(cartItem);
  useEffect(() => {
    cartData();
  }, []);

  let totalPrice = 0;
  cartItem.map((item) => (totalPrice += item.price * item.quantity));

  return (
    <>
      <div className="bg-slate-900 min-h-screen pb-10">
        <div className="container mx-auto pt-32 ">
          <form
            className="pb-10 px-5  g"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              className="block w-full rounded-lg h-10 p-3 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Search for product..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </form>

          <h2 className="font-bold text-sky-500 text-center text-4xl mb-8">
            Items In Cart
          </h2>
          {cartItem.length > 0 ? (
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 px-5 xl:grid-cols-3">
              {cartItem
                .filter((singleProduct) =>
                  search.toLowerCase() === ""
                    ? singleProduct
                    : singleProduct.jewellery
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
                .map((singleProduct) => (
                  <ItemsInCart
                    key={singleProduct.id}
                    singleProduct={singleProduct}
                  />
                ))}
              <div
                className="border-2 border-sky-500 rounded-lg h-60 flex flex-col justify-center items-center cursor-pointer hover:bg-slate-800 transition-all"
                onClick={() => placeOrder(cartItem)}
              >
                <span className="ml-2 text-white text-xl font-semibold block">
                  Total Price : {totalPrice}
                </span>

                <span className="ml-2 text-white text-xl font-semibold">
                  Place Order
                </span>
              </div>
            </div>
          ) : (
            <div className="text-white"> No Item In Cart</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
