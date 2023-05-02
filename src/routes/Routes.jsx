import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Home/Details/Details";
import AllDetailsData from "../pages/AllDetailsData/AllDetailsData";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([    
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/details',
                element: <Details></Details>
            },
            {
                path: '/alldetailsdata',
                element: <AllDetailsData></AllDetailsData>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;