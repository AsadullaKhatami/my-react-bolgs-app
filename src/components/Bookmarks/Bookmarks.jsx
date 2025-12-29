import React from 'react';

const Bookmarks = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="flex justify-between items-center shadow-lg p-2 m-2 w-[100%] rounded-md">
      <div>
        <h1>{title}</h1>
        <p>
          {bookmark.tags.map((tag) => (
            <span key={tag}>#{tag} </span>
          ))}
        </p>
      </div>
      <div>
        <p>{bookmark.readTime}</p>
      </div>
    </div>
  );
};

export default Bookmarks;