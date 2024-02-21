// PostCard.jsx
import React, { useState } from "react";
import "../style/PostCard.css"; // Create a separate CSS file for PostCard styles

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  return (
    <div className="post-card">
      <img src={post.photo} alt="Post" className="post-image" />
      <div className="post-actions">
        <button className="like-button" onClick={handleLike}>
          Like ({likes})
        </button>
        <button
          className="comment-button"
          onClick={() => handleComment("A new comment")}
        >
          Comment
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
  );
};

export default PostCard;
