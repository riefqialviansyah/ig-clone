import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Navbar from "../components/Navbar";
import axios from "axios";

// style
import "../style/HomePage.css";

// socket.io
import socket from "../socket";
import ListUserOnline from "../components/ListUserOnline";

const baseUrl = import.meta.env.VITE_BASE_URL;

export default function HomePage() {
  const [posts, setPosts] = useState(null);

  const fetchPost = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + "/post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
    socket.auth = {
      username: localStorage.username,
    };

    socket.connect();

    socket.on("post-update", (newData) => {
      setPosts(newData);
    });

    return () => {
      socket.off("post:update");
    };
  }, []);

  return (
    <>
      <div className="home-page">
        <header className="header">
          <Navbar />
        </header>
        <div className="online-user">
          <ListUserOnline />
        </div>
        <main className="main-content">
          {posts &&
            posts.map((el) => {
              return <PostCard key={el.id} post={el} setPosts={setPosts} />;
            })}
        </main>

        <footer className="footer">{/* Add the footer content here */}</footer>
      </div>
    </>
  );
}
