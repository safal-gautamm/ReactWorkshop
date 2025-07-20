import axios from "axios";
import NavBar from "./Components/Nav";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Single() {
  const [blog, setBlog] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  async function deleteBlog() {
    const resp = await axios.delete(
      "https://687af350abb83744b7ee4634.mockapi.io/blogs/" + params.id
    );
    if (resp.status == 200) {
      alert("Deleted Successfully !!!");
      navigate("/");
    }
  }

  async function getSingle() {
    const resp = await axios.get(
      "https://687af350abb83744b7ee4634.mockapi.io/blogs/" + params.id
    );
    if (resp.status == 200) {
      console.log(resp.data);
      setBlog(resp.data);
    } else {
      alert("Error aayo !!!");
    }
  }

  useEffect(() => {
    getSingle();
  }, []);

  return (
    <>
      <NavBar />

      <div className="bg-white font-sans leading-normal tracking-normal">
        <div className="text-center pt-16 md:pt-32">
          <p className="text-sm md:text-base text-green-500 font-bold">
            {blog.createdAt} <span className="text-gray-900">/</span> GETTING
            STARTED
          </p>
          <h1 className="font-bold break-normal text-3xl md:text-5xl">
            {blog.title}
          </h1>
          <h3 className="font-semibold text-2xl">
            {blog.subtitle}
          </h3>
        </div>

        {/* Image */}
        <div
          className="container w-[50%] h-[50%] max-w-6xl mx-auto bg-white bg-cover mt-8 rounded
        mb-12"
        >
          <img src={blog.image} alt="" />
        </div>

        {/* Container */}
        <div className="container max-w-5xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
            <div
              className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {/* Lead Paragraph */}
              {blog.description}
            </div>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <button
            onClick={deleteBlog}
            className="bg-red-100 text-red-600 px-6 mx-3 py-2 rounded-full font-semibold border border-red-300 hover:bg-red-600 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            🗑 Delete Blog
          </button>
          <Link to={"/edit/blogs/"+blog.id} >
            <button className="bg-green-100 text-green-600 px-6 mx-3 py-2 rounded-full font-semibold border border-green-300 hover:bg-green-600 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out">
              ✏️ Edit Blog
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Single;
