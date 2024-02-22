import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { failEvent, successEvent, waitEvent } from "../helpers/alerts";
import axios from "axios";

// import socket.io
import socket from "../socket";

// import style
import "../style/CreatePost.css";

const baseUrl = import.meta.env.VITE_BASE_URL;

export default function CreatePost() {
  const [photo, setPhoto] = useState("/add-image.png");
  const [description, setDescription] = useState("");

  const fileInputRef = useRef();

  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };

  const handlePhotoChange = async (event) => {
    const selectedPhoto = event.target.files[0];

    try {
      waitEvent(true, "Uploading your image");
      const formData = new FormData();
      formData.append("image", selectedPhoto);

      const { data } = await axios({
        method: "patch",
        url: baseUrl + "/post/cover-url",
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setPhoto(data.cover_url);
      waitEvent(false);
      successEvent("Success to upload your image");
    } catch (error) {
      waitEvent(false);
      console.log(error);
      failEvent("Error upload image file");
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSelectFromComputer = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios({
        method: "post",
        url: baseUrl + "/post",
        data: { imageUrl: photo, description: description },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      socket.emit("post-info", "Success create post");
      successEvent("Succes create post");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-post-page">
      <header className="header">
        <img src="/instagram.png" alt="Instagram Logo" className="logo" />

        <button
          onClick={backToHome}
          className="nav-icon log-out"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Back
        </button>
      </header>

      <main className="main-content">
        <h2></h2>

        <div className="add-image-section">
          <img src={photo} alt="Add Image" className="add-image" />
        </div>

        <div className="select-from-computer-section">
          <label
            htmlFor="photo"
            className="select-from-computer"
            onClick={handleSelectFromComputer}
          >
            Select from Computer
          </label>
          <input
            type="file"
            accept="image/*"
            id="photo"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter your post description..."
              required
            />
          </div>

          <button type="submit">Post</button>
        </form>
      </main>
    </div>
  );
}
