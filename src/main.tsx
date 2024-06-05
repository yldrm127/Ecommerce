import ReactDOM from 'react-dom/client'
import './index.css'
import {Route} from "./route/index"
import { RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
 <RouterProvider router={Route}/>
)
