import ItemsInCart from "../components/ItemsInCart";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { dataPlace } from "../Context";
import OrderItems from "../components/OrderItems";

function Order() {
  const navigate = useNavigate();

  const { orderApi, orderData } = useContext(dataPlace);
  const [search, setSearch] = useState("");

  console.log(orderData);
  useEffect(() => {
    orderApi();
  }, []);

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
            Your Orders
          </h2>
          {orderData.length > 0 ? (
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 px-5 xl:grid-cols-3">
              {orderData
                .filter((singleProduct) =>
                  search.toLowerCase() === ""
                    ? singleProduct
                    : singleProduct.jewellery
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
                .map((singleProduct) => (
                  <OrderItems
                    key={singleProduct.id}
                    singleProduct={singleProduct}
                  />
                ))}
            </div>
          ) : (
            <div className="text-white"> No Item In Order</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Order;
