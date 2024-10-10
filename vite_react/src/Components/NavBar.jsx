import { useNavigate } from "react-router-dom";

const NavBar =()=>{
     const navigate = useNavigate()
    return(
        <>
        <div className="flex justify-center mt-2">
            <nav>
                <ul className="flex space-x-4 font-bold">
                    <li><button onClick={()=>navigate("/")}>Home</button></li>
                    <li><button onClick={()=>navigate('/login')}>Login</button></li>
                    <li><button onClick={()=>navigate('/register')}>Register</button></li>
                    <li> <button onClick={()=>navigate("/products")}>Products</button> </li>
                    <li><button onClick={()=>navigate('/sales')}>Sales</button></li>
                    <li><button onClick={()=>navigate('/dashboard')}>DashBoard</button></li>


                </ul>
            </nav>
        </div>
        
        </>
    )
}
export default NavBar;