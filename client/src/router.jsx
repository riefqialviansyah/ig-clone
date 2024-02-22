// router.jsx

import { createBrowserRouter, redirect } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePostPage from "./pages/CreatePost";

const auth = () => {
  if (!localStorage.access_token) {
    return redirect("/login");
  }
  return null;
};

const hasLogin = () => {
  if (localStorage.access_token) {
    return redirect("/");
  }
  return null;
};

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    loader: auth,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/create-post",
        element: <CreatePostPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
    loader: hasLogin,
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: hasLogin,
  },
]);

export default router;
