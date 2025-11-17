import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import HowItWorks from "../pages/HowItWorks";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/services",
        element: <Services />,
    },
    {
        path: "/services/:id",
        element: <ServiceDetail />,
    },
    {
        path: "/como-funciona",
        element: <HowItWorks />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);
