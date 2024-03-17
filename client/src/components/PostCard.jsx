import { useEffect, useState } from "react";
import axios from "axios";
import "../style/PostCard.css";

import socket from "../socket";
import { failEvent, successEvent } from "../helpers/alerts";
const baseUrl = import.meta.env.VITE_BASE_URL;

const PostCard = ({ post, setPosts }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleLike = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + `/post/likes/${post.id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      successEvent("You like this post");
      socket.emit("post-likes", "Success like post");
    } catch (error) {
      console.log(error);
      const message = error.response.data.message;
      failEvent(message);
    }
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

    socket.on("post:update-likes", (newPosts) => {
      setPosts(newPosts);
    });

    return () => {
      socket.off("coment:update");
      socket.off("post:update");
    };
  }, []);

  return (
    <div className="post-card">
      <div>
        <h6>
          <span
            className="badge text-bg-info mt-3"
            style={{ marginLeft: "20px" }}
          >
            {post.User.username}
          </span>
        </h6>
        <div className="gambar">
          <img src={post.imageUrl} alt="Post" className="post-image" />
        </div>

        <div className="post-actions">
          <button className="like-button" onClick={handleLike}>
            <img src="/heart.svg" alt="Like" className="icon" />
            <span className="likes-count">{post.likes}</span>
          </button>
          <div className="comment-section">
            <button className="comment-button" onClick={toggleCommentForm}>
              <img src="/comment.svg" alt="Comment" className="icon" />
            </button>
            {true && (
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
        <span
          className="badge text-bg-secondary"
          style={{ marginLeft: "20px" }}
        >
          {new Date(post.createdAt).toLocaleDateString("id-ID", {
            dateStyle: "full",
          })}
        </span>
        <div
          className="post-description"
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            fontSize: "13px",
          }}
        >
          {post.description}
        </div>
        <div className="comments-section" style={{ paddingLeft: "20px" }}>
          <ul>
            {comments.map((comment, index) => {
              if (comment.postId == post.id) {
                return (
                  <li key={index}>
                    <strong> {comment.User.username}</strong> {" : "}
                    {comment.message}
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
