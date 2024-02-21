// PostCard.jsx
import React, { useState } from "react";
import "../style/PostCard.css"; // Create a separate CSS file for PostCard styles

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="post-card">
      <div>
        <img src={post.photo} alt="Post" className="post-image" />
        <div className="post-actions">
          <button className="like-button" onClick={handleLike}>
            Like ({likes})
          </button>
        </div>
        <div className="post-description">
          <p>{post.description}</p>
        </div>
        <div className="comments-section">
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
