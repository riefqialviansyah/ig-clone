import { useEffect, useState } from "react";
import axios from "axios";
import "../style/PostCard.css";

import socket from "../socket";
const baseUrl = import.meta.env.VITE_BASE_URL;

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
      socket.emit("coment:send", {
        access_token: localStorage.access_token,
        message: newComment,
        postId: post.id,
      });
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

  const getComents = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + `/post/coment/${post.id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComents();

    socket.on("coment:update", (updatedComents) => {
      setComments(updatedComents);
      // console.log(updatedComents);
    });

    return () => {
      socket.off("coment:update");
    };
  }, []);

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
                <button onClick={handleComment}>Send</button>
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
            {comments.map((comment, index) => {
              if (comment.postId == post.id) {
                return (
                  <li key={index}>
                    <strong> {comment.User.username}</strong> {": "}
                    {comment.message}
                    {/* <button onClick={() => handleDeleteComment(index)}>
                      Delete
                    </button> */}
                  </li>
                );
              }
            })}
            {showCommentForm && <li className="comment-input"></li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
