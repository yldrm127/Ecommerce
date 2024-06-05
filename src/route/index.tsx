import { createBrowserRouter } from "react-router-dom";
import Main from "../App"
import ProductSale from "../pages/productSale"
import Home from "../pages/home"
export const Route= createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[{
    index:true,
    element: <Home/>
    },
    {
      path:":productName",
      element:<ProductSale/>
    }
  ]
  },
]);

