import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AdminDashboard from "@/layouts/AdminDashboard";
import AdminHeroSection from "@/pages/admin/AdminHeroSection";
import AdminServices from "@/pages/admin/AdminServices";
import AdminContact from "@/pages/admin/AdminContact";
import MainLayout from "@/layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard/>,
    children: [
        {
            path:"/admin/hero-section",
            element: <AdminHeroSection/>
        },
        {
            path:"/admin/service",
            element: <AdminServices/>
        },
        {
            path:"/admin/contact",
            element: <AdminContact/>
        },
    ]
  },
]);
