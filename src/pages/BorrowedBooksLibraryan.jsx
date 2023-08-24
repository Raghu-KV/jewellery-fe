import LibraryanSingleBook from "../components/AdminSingleProduct";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { dataPlace } from "../Context";
import LibBorrowedSingleBook from "../components/LibBorrowedSingleBook";

function BorrowdeBooksLibraryan() {
  const navigate = useNavigate();
  // const booksData = [

  //   {
  //     id: "1",
  //     bookName: "The Good Surgeon",
  //     bookCover:
  //       "https://static-cse.canva.com/blob/921445/YellowSurgeonCreativeBookCover.jpg",
  //     totalPages: 651,
  //     author: "Richard Sanchez",
  //     borrowed: false,
  //   },
  //   {
  //     id: "2",
  //     bookName: "Get in Trouble",
  //     bookCover:
  //       "https://www.portersquarebooks.com/sites/portersquarebooks.com/files/getintrouble.jpg",
  //     totalPages: 754,
  //     author: "Kelly Link",
  //     borrowed: false,
  //   },
  //   {
  //     id: "3",
  //     bookName: "All Out",
  //     bookCover:
  //       "https://s2982.pcdn.co/wp-content/uploads/2018/11/all-out-book-cover-677x1024.jpg.optimal.jpg",
  //     totalPages: 174,
  //     author: "Sundra Mitchell",
  //     borrowed: false,
  //   },
  //   {
  //     id: "4",
  //     bookName: "All this Time",
  //     bookCover:
  //       "https://rivetedlit.com/wp-content/uploads/2020/01/all-this-time-9781534466340_xlg.jpg",
  //     totalPages: 174,
  //     author: "Mikki Daughtry",
  //     borrowed: false,
  //   },
  //   {
  //     id: "5",
  //     bookName: "Don't call the Wolf",
  //     bookCover:
  //       "https://i.pinimg.com/originals/56/26/e7/5626e79bfc771263065ea07d08aeb69f.png",
  //     totalPages: 174,
  //     author: "Alexsandra Ross",
  //     borrowed: false,
  //   },
  //   {
  //     id: "6",
  //     bookName: "The Book of Art",
  //     bookCover:
  //       "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198",
  //     totalPages: 574,
  //     author: "Regina Phalance",
  //     borrowed: false,
  //   },
  //   {
  //     id: "7",
  //     bookName: "Summer Holidays",
  //     bookCover:
  //       "https://pub-static.fotor.com/assets/projects/pages/dddda0b59fb9433eb53e7174981c8b67/blue-minimal-novel-cover-6e355184dc3545c6bec6a9f618f83e0d.jpg",
  //     totalPages: 134,
  //     author: "Lily Smith",
  //     borrowed: false,
  //   },
  //   {
  //     id: "8",
  //     bookName: "Deep Water",
  //     bookCover:
  //       "https://thebookcoverdesigner.com/wp-content/uploads/2021/11/deep-water4.jpg",
  //     totalPages: 264,
  //     author: "Laurent Kurta",
  //     borrowed: false,
  //   },
  //   {
  //     id: "9",
  //     bookName: "The Godfather",
  //     bookCover:
  //       "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png",
  //     totalPages: 324,
  //     author: "Mario Puzo",
  //     borrowed: false,
  //   },
  // ];

  const { booksData, getData } = useContext(dataPlace);
  //   const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="bg-slate-900 min-h-screen">
        <div className="container mx-auto pt-32 ">
          {/* <form
            className="pb-10 px-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              className="mx-auto block w-full rounded-lg h-10 p-3 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Search for books in our library..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </form> */}
          <h2 className="font-bold text-sky-500 text-center text-4xl mb-8">
            Books which are borrowed from Library
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 px-5 xl:grid-cols-3">
            {booksData
              .filter((booksData) => booksData.borrowed === true)
              //   .filter((bookData) =>
              //     search.toLowerCase() === ""
              //       ? bookData
              //       : bookData.bookName
              //           .toLowerCase()
              //           .includes(search.toLowerCase())
              //   )
              .map((bookData) => (
                <LibBorrowedSingleBook key={bookData.id} bookData={bookData} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BorrowdeBooksLibraryan;
