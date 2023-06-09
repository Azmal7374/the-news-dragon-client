import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayouts from "../layouts/LoginLayouts";
import Lofin from "../pages/Login/Lofin";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayouts></LoginLayouts>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0'></Navigate>
            },
            {
                path:'/login',
                element:<Lofin></Lofin>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<Terms></Terms>
            }

        ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[
          
            
            {
                path:':id',
                element:<Category></Category>,
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<NewsLayout></NewsLayout>,
        children: [
            {
                path:':id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;