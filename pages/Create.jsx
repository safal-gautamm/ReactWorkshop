import { useState } from "react";
import NavBar from "./Components/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {

  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [image, setImage] = useState("")

  async function postData(e)
  {    
    e.preventDefault()
    const resp = await axios.post("https://687af350abb83744b7ee4634.mockapi.io/blogs",{
      title : title,
      subtitle : subTitle,
      description : desc,
      image : image
    })
    console.log(resp)
    if(resp.status == 201)
    {
      navigate('/')
    }
  }

  return (
    <>
    <title>Create New Post</title>

      <NavBar />

      <div>
        <section className="flex-grow container mx-auto p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create a New Blog Post
          </h1>
          <form
            // action="/addBlog"
            className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
            onSubmit={postData}
          >
            {/* Title */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-semibold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter blog title"
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            {/* SubTitle */}
            <div className="mb-4">
              <label
                htmlFor="subtitle"
                className="block text-gray-700 font-semibold mb-2"
              >
                Sub Title
              </label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter blog title"
                onChange={(e)=>setSubTitle(e.target.value)}
              />
            </div>
            {/* Image */}
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 font-semibold mb-2"
              >
                Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Image url"
                onChange={(e)=>setImage(e.target.value)}
              />
            </div>
            {/* description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-semibold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your blog content here"
                defaultValue={""}
                onChange={(e)=>setDesc(e.target.value)}
              />
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Publish Post
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Create;
