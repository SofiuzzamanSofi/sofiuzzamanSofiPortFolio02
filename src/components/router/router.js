import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout";
import Blogs from "../pages/Blogs";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/blogs", element: <Blogs /> },
            { path: "/project/:id", element: <ProjectDetails /> },
        ]
    }
]);

export default router;