import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Login/SingUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("./Main");
const { default: MainHome } = require("../Pages/Home/MainHome");

const router = createBrowserRouter([
    {
        path : '/',
        element: <Main></Main>,
        children:[
            {
                path :'/',
                element :<MainHome></MainHome>,
            },
            {
                path :'/home',
                element :<MainHome></MainHome>,
            },
            {
                path :'/login',
                element :<Login></Login>,
            },
            {
                path :'/registration',
                element :<SingUp></SingUp>,
            },
        ]
    }
])

export default router;