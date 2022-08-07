import React from "react";

const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
  return (  
    <div className="post-container">
      <h1 className="blogHeading">{title}</h1>
      <img className="blogImage" src={imgUrl} alt="post" />
      <p className="bodyCopy">{body}</p>
      <div className="info">      
        <h4>Written by: {author}</h4>
      </div>
    </div>
  );
};
  
export default Post;