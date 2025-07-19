import Card from "./Components/Card";
import NavBar from "./Components/Nav";
import axios from "axios";

function Home() {

  function fetchBlogs()
  {
    
  }

  return (
    <>
      <NavBar />

      <div className="flex flex-row flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Home;
