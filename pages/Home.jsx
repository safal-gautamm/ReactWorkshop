import Card from "./Components/Card";
import NavBar from "./Components/Nav";

function Home() {
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
