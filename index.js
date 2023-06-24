import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import Body from "./Body";
import Footer from "./Footer";
import Heading from "./Heading";
import RestaurantDetails from "./RestaurantDetails";
import { createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom";
import { Provider } from "react-redux";
import About from "./About";
import Cart from "./Cart";
import store from "./store";
import { useState } from "react";
import FooterContext from "./footerContext";
const Container = ()=>{
    const [isFooter,setIsFooter] = useState(true);
    return(
    <Provider store={store}>
    <FooterContext.Provider value={{isFooter,setIsFooter}}>
    <Heading />
    <Outlet />
    <Footer isFooter={isFooter} />
    </FooterContext.Provider>
    </Provider>)
}

const router = createBrowserRouter([
    {
        path:"/",
        element:<Container />,
        children:[
            {
                path:"about",
                element:<About/>
            },
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/restaurants/:id',
                element:<RestaurantDetails />
            },{
                path:'/cart',
                element:<Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)