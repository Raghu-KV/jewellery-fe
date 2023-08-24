import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom/dist";
import { useEffect, useRef } from "react";

function AdminNavBar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (event) => {
      if (!navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <div className="bg-slate-900 h-20 border-b-2 border-slate-600 flex items-center fixed w-screen">
        <div className="container mx-auto flex items-center justify-between px-5 md:px-4 relative">
          <h2 className="text-white text-3xl font-bold">Admin</h2>
          <ul className="hidden md:flex text-white gap-7 font-bold text-lg cursor-pointer">
            <li className="hover:scale-105 transition-all text-gray-300">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="hover:scale-105 transition-all text-gray-300">
              <Link to="/admin/add-product">Add Product</Link>
            </li>
            <li className="hover:scale-105 transition-all text-gray-300">
              <Link to="/admin/sold-products"> Sold Products</Link>
            </li>
            <li className="hover:scale-105 transition-all text-gray-300">
              <Link to="/"> Log Out </Link>
            </li>
          </ul>

          <div ref={navRef} className="md:hidden">
            <div onClick={() => setOpen(!open)} className="md:hidden">
              {open ? (
                <FaTimes color={"#ffffff"} size="25px" />
              ) : (
                <FaBars color={"#ffffff"} size="25px" />
              )}
            </div>
            <div>
              {open && (
                <div
                  className={`absolute bg-white  top-10 right-5 z-10  text-center rounded-lg shadow-lg`}
                >
                  <h3
                    className="text-slate-900 font-bold py-5 px-5"
                    onClick={() => {
                      navigate("/admin");
                      setOpen(!open);
                    }}
                  >
                    Dashboard
                  </h3>
                  <h3
                    className="text-slate-900 font-bold py-5 px-5  border-t-2"
                    onClick={() => {
                      navigate("/admin/add-product");
                      setOpen(!open);
                    }}
                  >
                    Add Product
                  </h3>
                  <h3
                    className=" text-slate-900 font-bold py-5 px-5 border-t-2"
                    onClick={() => {
                      navigate("/admin/sold-products");
                      setOpen(!open);
                    }}
                  >
                    Sold Products
                  </h3>
                  <h3
                    className=" text-slate-900 font-bold py-5 px-5 border-t-2"
                    onClick={() => {
                      navigate("/");
                      setOpen(!open);
                    }}
                  >
                    Log Out
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default AdminNavBar;
