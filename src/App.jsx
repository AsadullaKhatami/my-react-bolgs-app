import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="container flex">
        <div className="left-side w-[65%]">
          <Blogs></Blogs>
        </div>
        <div className="right-side w-[37%]">
          <h1>right side </h1>
        </div>
      </div>
    </>
  );
}

export default App;
