import React, { useState, useRef } from 'react';
import '../style/CreatePost.css';
import { Link } from 'react-router-dom';

export default function CreatePost() {
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');

  const fileInputRef = useRef();

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSelectFromComputer = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Photo:', photo);
    console.log('Description:', description);
  };

  return (
    <div className="create-post-page">
      <header className="header">
      <img src="/instagram.jpg" alt="Instagram Logo" className="logo" />
      <button className="nav-icon cancel-button">
  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    Cancel
  </Link>
</button>
      </header>

      <main className="main-content">
        <h2></h2>

        <div className="add-image-section">
          <img src="/add-image.png" alt="Add Image" className="add-image" onClick={handleSelectFromComputer} />
        </div>

        <div className="select-from-computer-section">
          <label htmlFor="photo" className="select-from-computer" onClick={handleSelectFromComputer}>
            Select from Computer
          </label>
          <input
            type="file"
            accept="image/*"
            id="photo"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            style={{ display: 'none' }}
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


