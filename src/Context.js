import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const dataPlace = createContext();

export function DataProvider({ children }) {
  const API = "http://localhost:4000";
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  //   const [search, setSearch] = useState("");

  //get all the product data _______________________________________________________
  const getData = async () => {
    const res = await fetch(`${API}/products`, { method: "GET" });
    const data = await res.json();
    setProductData(data);
  };

  //__________________________________________________________________________________

  // Delete a product ____________________________________________________________________
  const deleteProduct = async (id) => {
    await fetch(`${API}/deleteProduct/${id}`, { method: "DELETE" });
    await getData();
  };
  //____________________________________________________________________________________

  // EDIT A SINGLE PRODUCT _________________________________________________________________
  const [singleProductData, setSingleProductData] = useState(null);

  const getSingleData = async (id) => {
    const res = await fetch(`${API}/product/${id}`, { method: "GET" });
    const data = await res.json();
    setSingleProductData(data);
  };

  const putData = async (values, id) => {
    await fetch(`${API}/editProduct/${id}`, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: { "content-type": "application/json" },
    });
    navigate("/admin");
  };

  //______________________________________________________________________________________

  // ADD A PRODUCT _____________________________________________________________________________

  const postData = async (value) => {
    await fetch(`${API}/addProduct`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: { "content-type": "application/json" },
    });
    navigate("/admin");
  };

  // _______________________________________________________________________________________

  // GET ITEM FROM CART_____________________
  const [cartItem, setCartItem] = useState([]);

  const cartData = async () => {
    const res = await fetch(`${API}/cartItems`, { method: "GET" });
    const data = await res.json();
    setCartItem(data);
  };
  //___________________________

  // ADD TO CART _________________________________________________________________________

  const addToCart = async (values, id) => {
    const mutatedValu = { ...values, quantity: 1 };
    await fetch(`${API}/addToCart/${id}`, {
      method: "POST",
      body: JSON.stringify(mutatedValu),
      headers: { "content-type": "application/json" },
    });
    await cartData();
  };

  // _______________________________________________________________________________________

  // DELETE FROM CART _________________________________________________________________________

  const removeItemFromCart = async (id) => {
    await fetch(`${API}/deleteCartItem/${id}`, { method: "DELETE" });
    await cartData();
  };

  // _______________________________________________________________________________________

  //CHANGE QUANTITY---------------------
  const changeQuantity = async (value, id) => {
    await fetch(`${API}/updateCartItem/${id}`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: { "content-type": "application/json" },
    });
    cartData();
  };
  //---------------------------

  //PLACE ORDER---------------
  const placeOrder = async (data) => {
    for (let i = 0; i < data.length; i++) {
      await removeItemFromCart(data[i].id);
    }
    await fetch(`${API}/placeOrder/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
  };
  //----------------------------

  //GER ORDER DATA-------------------
  const [orderData, setOrderData] = useState([]);
  const orderApi = async () => {
    const res = await fetch(`${API}/getOrder`, { method: "GET" });
    const data = await res.json();
    setOrderData(data);
  };
  //----------------------
  return (
    <dataPlace.Provider
      value={{
        productData: productData,
        getData: getData,
        singleProductData: singleProductData,
        setSingleProductData: setSingleProductData,
        getSingleData: getSingleData,
        putData: putData,
        deleteProduct: deleteProduct,
        postData: postData,
        addToCart: addToCart,
        cartItem: cartItem,
        cartData: cartData,
        removeItemFromCart: removeItemFromCart,
        changeQuantity: changeQuantity,
        placeOrder: placeOrder,
        orderData: orderData,
        orderApi: orderApi,
      }}
    >
      {children}
    </dataPlace.Provider>
  );
}
