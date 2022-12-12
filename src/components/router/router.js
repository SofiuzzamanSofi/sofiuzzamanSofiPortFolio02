import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
        ]
    }
]);

export default router;