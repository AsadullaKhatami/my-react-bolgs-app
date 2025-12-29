import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handelbookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handlereadingTime = (time, id) => {
    const text = time;
    const number = Number(text.match(/\d+/)[0]);
    setReadingTime(readingTime+number);

    removeFromBookmarks(id);
  };

  const removeFromBookmarks = (id) => {
    const newBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(newBookmark);
  }
  // console.log(bookmarks);

  return (
    <>
      <Navbar></Navbar>

      <div className="container flex">
        <div className="left-side w-[65%]">
          <Blogs
            handelbookmark={handelbookmark}
            handlereadingTime={handlereadingTime}
          ></Blogs>
        </div>
        <div className="right-side w-[40%]">
          <div className="text-center">
            <h1 className="my-4">reading time: {readingTime}</h1>
            <h1>total Bookmark: {bookmarks.length}</h1>
          </div>
          <div className="w-[100%] flex flex-col justify-center items-start ">
            {bookmarks.map((bookmark) => (
              <Bookmarks key={bookmark.id} bookmark={bookmark}></Bookmarks>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
