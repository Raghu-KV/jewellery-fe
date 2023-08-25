import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import AddProduct from "./pages/AddProduct";
import AdminNavBar from "./components/AdminNavBar";
import EditProduct from "./pages/EditProduct";
import { DataProvider } from "./Context";

import UserNavBar from "./components/UserNavBar";
import UserPage from "./components/UserPage";

import Cart from "./pages/Cart";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminNavBar />}>
            <Route index element={<AdminPage />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit-product/:id" element={<EditProduct />} />
            <Route path="sold-products" element={<Order />} />
          </Route>
          {/* user Routes */}
          <Route path="/user" element={<UserNavBar />}>
            <Route index element={<UserPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
          </Route>
          {/* Borroewd books */}
          {/* <Route path="/library-books/borrowed" element={<BorrowdeBooks />} /> */}
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
