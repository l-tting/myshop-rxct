import { useNavigate } from "react-router-dom";

const NavBar =()=>{
     const navigate = useNavigate()
    return(
        <>
        <div>
            <nav>
                <ul className="flex space-x-4">
                    <li onClick={()=>navigate("/")}>Home</li>
                    <li  onClick={()=>navigate("/login")}>Login</li>
                    <li  onClick={()=>navigate("/register")}>Register</li>
                    <li  onClick={()=>navigate("/products")}>Products</li>
                    <li  onClick={()=>navigate("/sales")}>Sales</li>
                    <li  onClick={()=>navigate("/dashboard")}>DashBoard</li>
                    <li><button >My page</button></li>

                </ul>
            </nav>
        </div>
        
        </>
    )
}
export default NavBar;