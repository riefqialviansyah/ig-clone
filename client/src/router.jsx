import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/register",
    element: <div>Register disini</div>,
  },
  {
    path: "/login",
    element: <div>Login disini</div>,
  },
]);

export default router;
