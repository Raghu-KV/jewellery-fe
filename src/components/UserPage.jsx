import UserSingleProduct from "./UserSingleProduct";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { dataPlace } from "../Context";

function UserPage() {
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

  const { productData, getData } = useContext(dataPlace);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="bg-slate-900 min-h-screen pb-10">
        <div className="container mx-auto pt-32 ">
          <form
            className="pb-10 px-5 flex gap-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              className="block w-[70%] rounded-lg h-10 p-3 bg-slate-700 text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Search for product..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              type="text"
              className=" block w-[30%] rounded-lg h-10 px-3  bg-slate-700 text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Search for category..."
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value={"all"}>all</option>
              <option value={"bangle"}>bangle</option>
              <option value={"ring"}>ring</option>
              <option value={"necklace"}>necklace</option>
            </select>
          </form>

          <h2 className="font-bold text-sky-500 text-center text-4xl mb-8">
            Jewellery Available
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 px-5 xl:grid-cols-3">
            {productData
              .filter((singleProduct) =>
                category === "all"
                  ? singleProduct
                  : singleProduct.category === category
              )
              .filter((singleProduct) =>
                search.toLowerCase() === ""
                  ? singleProduct
                  : singleProduct.jewellery
                      .toLowerCase()
                      .includes(search.toLowerCase())
              )
              .map((singleProduct) => (
                <UserSingleProduct
                  key={singleProduct.id}
                  singleProduct={singleProduct}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
