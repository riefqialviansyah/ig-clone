import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/LoginPage.css";
import axios from "axios";
import { failEvent, successEvent } from "../helpers/alerts";
const baseUrl = import.meta.env.VITE_BASE_URL;

export default function LoginPage() {
  const [inputUser, setInputUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputUserHandler = (e) => {
    const { name, value } = e.target;
    setInputUser({ ...inputUser, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: baseUrl + "/login",
        data: inputUser,
      });
      console.log(data);
      successEvent("Success login");
      navigate("/login");
    } catch (error) {
      console.log(error);
      const message = error.response.data.message;
      failEvent(message);
    }
  };

  return (
    <div className="login">
      <div className="login-img-container">
        <img src="/instagram.png" alt="Instagram Logo" className="login-img" />
      </div>
      <input
        name="email"
        type="email"
        onChange={inputUserHandler}
        placeholder="Email"
        className="login-input"
      />
      <input
        name="password"
        type="password"
        onChange={inputUserHandler}
        placeholder="Password"
        className="login-input"
      />
      <button onClick={loginHandler} className="login-button">
        Log in
      </button>

      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
