import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataPlace } from "../Context";

function UserBorrowedSingleBook({ bookData }) {
  const navigate = useNavigate();
  const { returnBook } = useContext(dataPlace);

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
        <button
          className="text-sm bg-sky-800 px-3 font-bold text-sky-200 rounded-full hover:bg-sky-700 transition-all block mt-3"
          onClick={() => returnBook(bookData, bookData.id)}
        >
          RETURN
        </button>
      </div>
    </div>
  );
}

export default UserBorrowedSingleBook;
