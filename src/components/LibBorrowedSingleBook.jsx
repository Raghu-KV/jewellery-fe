import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataPlace } from "../Context";

function LibBorrowedSingleBook({ bookData }) {
  const navigate = useNavigate();
  const { deleteBook } = useContext(dataPlace);

  return (
    <div className="flex items-center border-2 border-sky-500 rounded-lg">
      <div className="shrink-0">
        <img
          src={bookData.bookCover}
          alt="Book Cover"
          className=" w-32 lg:w-40 lg:h-60 rounded-l-md"
        />
      </div>
      <div className="p-2 ml-5">
        <h2 className="text-white font-bold text-2xl md:text-3xl mb-4">
          {bookData.bookName}
        </h2>
        <p className="text-slate-300 ">Author : {bookData.author}</p>
        <p className="text-slate-300 "> No.Pages : {bookData.totalPages}</p>
      </div>
    </div>
  );
}

export default LibBorrowedSingleBook;
