import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Home from "../Pages/Shared/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Course from "../Pages/Course";
import ErrorShow from "../Pages/Shared/ErrorShow/ErrorShow";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import Profile from "../Pages/dashboardPages/Profile";
import AllUsers from "../Pages/dashboardPages/AllUsers";
import HomeLayout from "../Layout/HomeLayout";
import AddCategory from "../Pages/dashboardPages/AddCategory";
import AllCategories from "../Pages/dashboardPages/AllCategories";
import TotalProducts from "../Pages/dashboardPages/TotalProducts.jsx";
import Edit from "../Pages/dashboardPages/Edit.jsx";
import CategoryWiseDetails from "../Pages/CategoryWiseDetails.jsx";
import ProductDetails from "../Pages/ProductDetails.jsx";
import BuySummary from "../Pages/dashboardPages/BuySummary.jsx";
import AddProduct from "../Pages/dashboardPages/AddProduct.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorShow></ErrorShow>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }, {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      },
      {
        path: "/totalProducts",
        element: <Course></Course>
      },
      {
        path: "/productDetails/:id",
        element: (<PrivateRoute>
          <ProductDetails></ProductDetails>
        </PrivateRoute>),
        loader: ({ params }) => fetch(`https://mern-backend-v2.onrender.com/product/${params.id}`)
      },
      {
        path: "/bookCategoryWiseDetails/:category",
        element: <CategoryWiseDetails></CategoryWiseDetails>,
        loader: ({ params }) => fetch(`https://mern-backend-v2.onrender.com/bookCategoryWiseDetails/${params.category}`)
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "allUsers",
        element: (<PrivateRoute>
          <AllUsers />
        </PrivateRoute>),
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "category",
        element: <AddCategory />,
      },
      {
        path: "allCategory",
        element: <AllCategories />,
        loader: () => fetch("https://mern-backend-v2.onrender.com/category"),
      },

      {
        path: "products",//to get categories in products page drop down
        element: <AddProduct />,
        loader: () => fetch("https://mern-backend-v2.onrender.com/categories"),
      },
      {
        path: "totalProducts",
        element: <TotalProducts />,
        loader: () => fetch("https://mern-backend-v2.onrender.com/totalProducts"),
      },
      {
        path: "buySummary/:userId",
        element: <BuySummary />,
        loader: ({ params }) => fetch(`https://mern-backend-v2.onrender.com/buySummary/${params.userId}`),
      },

      {
        path: "edit/:id",
        element: <Edit></Edit>,
        loader: ({ params }) => fetch(`https://mern-backend-v2.onrender.com/product/${params.id}`),
      },


    ],
  },
]);

export default routes;
