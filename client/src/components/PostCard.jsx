import { useState } from "react";
import "../style/PostCard.css";

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
      <div>
        <h6>
          <span className="badge text-bg-info mt-3">{post.User.username}</span>
        </h6>
        <img src={post.imageUrl} alt="Post" className="post-image" />

        <div className="post-actions">
          <button className="like-button" onClick={handleLike}>
            <img src="/heart.svg" alt="Like" className="icon" />
            <span className="likes-count">{likes}</span>
          </button>
          <div className="comment-section">
            <button className="comment-button" onClick={toggleCommentForm}>
              <img src="/comment.svg" alt="Comment" className="icon" />
            </button>
            {showCommentForm && (
              <div className="comment-form">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handleComment}>Post</button>
              </div>
            )}
          </div>
        </div>
        <span className="badge text-bg-secondary">
          {new Date(post.createdAt).toLocaleDateString("id-ID", {
            dateStyle: "full",
          })}
        </span>
        <div className="post-description">{post.description}</div>
        <div className="comments-section">
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                {comment}
                <button onClick={() => handleDeleteComment(index)}>
                  Delete
                </button>
              </li>
            ))}
            {showCommentForm && <li className="comment-input"></li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
