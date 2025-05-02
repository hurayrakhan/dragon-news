import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import AboutPage from "../Pages/AboutPage";
import CareerPage from "../Pages/CareerPage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/about',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/career',
                element: <CareerPage></CareerPage>
            }
        ]
    }
])