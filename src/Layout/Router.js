import CheakOut from "../Pages/CheakOut/CheakOut";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Login/SingUp";
import Orders from "../Pages/Orders/Orders";

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
            {
                path :'/checkout/:id',
                element :<CheakOut></CheakOut>,
                loader : ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path :'/orders',
                element :<Orders></Orders>,
            },
        ]
    }
])

export default router;