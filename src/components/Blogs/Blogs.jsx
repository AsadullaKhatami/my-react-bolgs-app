import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data.posts));
  }, []);

  console.log(blogs);

  return (
    <div>
      <h1 className="text-center">total: {blogs.length}</h1>
      <div className="grid grid-cols-1 gap-4">
        {blogs.map((blog) => (
          <Blog blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
