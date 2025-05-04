import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import AboutPage from "../Pages/AboutPage";
import CareerPage from "../Pages/CareerPage";
import Home from "../Components/Home";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/category/:id',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
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