import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import LoginRegister from "../Authentication/LoginRegister/LoginRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>,
      },

      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login-register",
    element: <LoginRegister></LoginRegister>,
  },
]);

export default router;
