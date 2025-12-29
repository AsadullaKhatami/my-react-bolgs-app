import React from 'react';
import { FaBookmark } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";

const Blog = ({ blog, handelbookmark, handlereadingTime }) => {
  return (
    <div>
      <img src={blog.featuredImage} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center p-2">
          <img className="w-16" src={blog.author.avatar} alt="" />
          <div className="ml-3">
            <h5>{blog.author.name}</h5>
            <p>{blog.publishedAt}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <p>{blog.readTime}</p>
          <button
            className="cursor-pointer"
            onClick={() => handelbookmark(blog)}
          >
            <FaBookmark size={25} />
          </button>
        </div>
      </div>
      <h1 className="text-3xl">{blog.title}</h1>
      <h5 className="text-[oklch(55.3% 0.013 58.071)]">
        {blog.excerpt}
        <a href="#" className="text-sky-700">
          ...read more
        </a>
      </h5>
      <p>
        {blog.tags.map((tag) => (
          <span key={tag}>#{tag} </span>
        ))}
      </p>
      <button
        onClick={() => handlereadingTime(blog.readTime, blog.id)}
        className="flex items-center gap-2 text-green-500 cursor-pointer"
      >
        Mark as read <IoCheckmarkDone />
      </button>
    </div>
  );
};

export default Blog;