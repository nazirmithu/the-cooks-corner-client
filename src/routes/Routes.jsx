import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Home/Details/Details";
import AllDetailsData from "../pages/AllDetailsData/AllDetailsData";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details',
                element: <Details></Details>
            },
            {
                path: '/recipe/:id',
                element: <PrivateRoute>
                    <AllDetailsData></AllDetailsData>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-cooks-corner-server.vercel.app/allData/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;