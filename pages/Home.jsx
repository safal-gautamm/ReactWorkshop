import { useEffect, useState } from "react";
import Card from "./Components/Card";
import NavBar from "./Components/Nav";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    const response = await axios.get(
      "https://687af350abb83744b7ee4634.mockapi.io/blogs"
    );
    if (response.status == 200) {
      setBlogs(response.data);
    } else {
      alert("Error aayo !!!");
    }
  }

  useEffect(() => {
    // ()=>{}  or function(){}   anonymous funcion, callback function can be used
    fetchBlogs();
  }, []); // []     Dependency Array

  return (
    <>
      <NavBar />

      <div className="flex flex-row flex-wrap justify-around">
        {blogs.map((blog) => {
          return (
          <Card key = {blog.id} blog={blog}/>
        )
        })}
      </div>
    </>
  );
}

export default Home;
