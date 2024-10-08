import NavBar from "./Components/NavBar";
import Register from "./Pages/Register";
import Product from "./Pages/Products";
import Login from "./Pages/Login";
import DashBoard from "./Pages/Dashboard";
import Sales from "./Pages/Sales";
import Home from "./Pages/Home";
import { Routes,Route } from "react-router-dom";
const App =()=>{
  return(
    <>
    <div>
    <NavBar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/products" element={<Product/>}/>
      <Route exact path="/sales" element={<Sales/>}/>
      <Route exact path="/dashboard" element={<DashBoard/>}/>

    </Routes>
    

    </>
  )
};
export default App;