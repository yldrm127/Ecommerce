import Navbar from "./components/navbar"
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="container mx-auto">
     <Navbar/>
    <Outlet/>
    </div>
  );
}

export default App;
