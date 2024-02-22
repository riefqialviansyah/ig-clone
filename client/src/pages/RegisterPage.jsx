import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { failEvent, successEvent } from "../helpers/alerts";
import axios from "axios";
import "../style/RegisterPage.css";

const baseUrl = import.meta.env.VITE_BASE_URL;

export default function RegisterPage() {
  const [inputUser, setInputUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputUserHandler = (e) => {
    const { name, value } = e.target;
    setInputUser({ ...inputUser, [name]: value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: baseUrl + "/register",
        data: inputUser,
      });

      successEvent("Success register your account");
      navigate("/login");
    } catch (error) {
      console.log(error);
      const message = error.response.data.message;
      failEvent(message);
    }
  };

  return (
    <div className="signup">
      <img src="/instagram.png" alt="Instagram Logo" />
      <form onSubmit={registerHandler}>
        <input
          name="username"
          onChange={inputUserHandler}
          type="text"
          placeholder="Username"
        />
        <input
          name="email"
          onChange={inputUserHandler}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={inputUserHandler}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
