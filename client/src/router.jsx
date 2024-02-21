// router.jsx

import { createBrowserRouter } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePostPage from './pages/CreatePost';

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/create-post',
        element: <CreatePostPage />,
      },
    ],
  },
]);

export default router;

