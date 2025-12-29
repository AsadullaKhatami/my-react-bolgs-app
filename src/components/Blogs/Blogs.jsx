import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ handelbookmark, handlereadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data.posts));
  }, []);

  return (
    <div>
      <h1 className="text-center">total: {blogs.length}</h1>
      <div className="grid grid-cols-1 gap-4">
        {blogs.map((blog) => (
          <Blog
            handelbookmark={handelbookmark}
            key={blog.id}
            blog={blog}
            handlereadingTime={handlereadingTime}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
