import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/contact",
            element: <Contact/>
        }
    ]
}])















