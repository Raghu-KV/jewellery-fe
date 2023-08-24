import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { dataPlace } from "../Context";
import { MdOutlineEditNote } from "react-icons/md";

function EditForm() {
  const { putData, singleProductData } = useContext(dataPlace);

  const params = useParams();

  const formCheckYup = yup.object({
    jewellery: yup.string().required(" is required"),
    desc: yup.string().required(" is required"),
    imageUrl: yup.string().required(" is required"),
    category: yup.string().required(" is required"),
    price: yup
      .number()
      .min(1, "enter a postive number")
      .required("is required"),
    quantity: yup
      .number()
      .min(1, "enter a postive number")
      .required("is required"),
  });

  const formik = useFormik({
    initialValues: {
      jewellery: singleProductData[0].jewellery,
      desc: singleProductData[0].desc,
      imageUrl: singleProductData[0].imageUrl,
      category: singleProductData[0].category,
      price: singleProductData[0].price,
      quantity: singleProductData[0].quantity,
    },
    validationSchema: formCheckYup,
    onSubmit: (values) => {
      putData(values, params.id);
    },
  });
  return (
    <div className="pt-32  bg-slate-900 min-h-screen text-white ">
      <div className="container mx-auto flex justify-center">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-center text-sky-500 font-bold text-2xl mb-8">
            Edit Product
            {/* <MdOutlineEditNote className="inline-block ml-2" size={"40px"} /> */}
          </h1>

          <label
            htmlFor="jewellery"
            className={`pl-1 text-lg font-bold text-white ${
              formik.errors.jewellery &&
              formik.touched.jewellery &&
              "text-red-400"
            }`}
          >
            Jewellery Name
            {formik.errors.jewellery && formik.touched.jewellery && (
              <span className="text-sm font-medium">
                {formik.errors.jewellery}
              </span>
            )}
          </label>
          <input
            type="text"
            id="bookName"
            className=" my-3 w-72 p-2 md:w-96 mx-auto block  rounded-lg h-12 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2
           focus:ring-sky-500"
            name="jewellery"
            value={formik.values.jewellery}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label
            htmlFor="desc"
            className={`pl-1 text-lg font-bold text-white ${
              formik.errors.desc && formik.touched.desc && "text-red-400"
            }`}
          >
            Product Description
            {formik.errors.desc && formik.touched.desc && (
              <span className="text-sm font-medium">{formik.errors.desc}</span>
            )}
          </label>

          <input
            type="text"
            id="desc"
            className=" my-3 w-72 p-2 md:w-96 mx-auto block  rounded-lg h-12 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2
           focus:ring-sky-500"
            name="desc"
            value={formik.values.desc}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label
            htmlFor="imageUrl"
            className={`pl-1 text-lg font-bold text-white ${
              formik.errors.imageUrl &&
              formik.touched.imageUrl &&
              "text-red-400"
            }`}
          >
            Image URL{" "}
            {formik.errors.imageUrl && formik.touched.imageUrl && (
              <span className="text-sm font-medium">
                {formik.errors.imageUrl}
              </span>
            )}
          </label>
          <input
            type="text"
            id="imageUrl"
            className=" my-3 w-72 p-2 md:w-96 mx-auto block  rounded-lg h-12 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2
           focus:ring-sky-500"
            name="imageUrl"
            value={formik.values.imageUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label
            htmlFor="category"
            className={`pl-1 text-lg font-bold text-white ${
              formik.errors.category &&
              formik.touched.category &&
              "text-red-400"
            }`}
          >
            category{" "}
            {formik.errors.category && formik.touched.category && (
              <span className="text-sm font-medium">
                {formik.errors.category}
              </span>
            )}
          </label>
          <input
            type="text"
            id="category"
            className=" my-3 w-72 p-2 md:w-96 mx-auto block  rounded-lg h-12 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2
           focus:ring-sky-500"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label
            htmlFor="price"
            className={`pl-1 text-lg font-bold text-white ${
              formik.errors.price && formik.touched.price && "text-red-400"
            }`}
          >
            price{" "}
            {formik.errors.price && formik.touched.price && (
              <span className="text-sm font-medium">{formik.errors.price}</span>
            )}
          </label>
          <input
            type="text"
            id="price"
            className=" my-3 w-72 p-2 md:w-96 mx-auto block  rounded-lg h-12 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2
           focus:ring-sky-500"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label
            htmlFor="quantity"
            className={`pl-1 text-lg font-bold text-white ${
              formik.errors.quantity &&
              formik.touched.quantity &&
              "text-red-400"
            }`}
          >
            quantity{" "}
            {formik.errors.quantity && formik.touched.quantity && (
              <span className="text-sm font-medium">
                {formik.errors.quantity}
              </span>
            )}
          </label>
          <input
            type="text"
            id="quantity"
            className=" my-3 w-72 p-2 md:w-96 mx-auto block  rounded-lg h-12 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2
           focus:ring-sky-500"
            name="quantity"
            value={formik.values.quantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <button
            className="mt-3 mb-12 w-72 p-2 md:w-96 bg-sky-500 h-12 rounded-lg hover:scale-105 transition-all text-slate-900 font-bold text-lg"
            type="submit"
          >
            Post Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
