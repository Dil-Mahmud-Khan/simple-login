import { createBrowserRouter } from "react-router-dom";
import Log from "../Components/Logging/Log";
import Login from '../Components/Login/Login';
import Login2 from '../Components/Login/Login2';
import Login3 from '../Components/Login/Login3';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },

    {
        path: '/login2',
        element: <Login2></Login2>
    },
    {
        path: '/login3',
        element: <Login3></Login3>
    },
    {
        path: '/log4',
        element: <Log></Log>
    }


])




export default router;