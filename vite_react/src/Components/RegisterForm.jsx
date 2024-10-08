import axios from 'axios';
import { useState } from "react";
const RegisterForm=()=>{
    const url ="http://127.0.0.1:5000/register";
    const [register,setRegister] = useState({
        username:"",
        email:"",
        password:""
    })
    const handleChange =(e)=>{
        const {name,value} = e.target;
        setRegister({
            ...register,[name]:value
        })
    }

    const postRegister= async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(url,register)
            console.log("Response:",response.data)
        }
        catch(error){
            console.log("Error registering user:",error)
        } 
    }
    return(
        <div className="mt-6">
            <form className="space-y-4" onSubmit={postRegister}>
                <div>
                    <input type="text" 
                    username='name'
                    placeholder="Enter username"
                    className="border border-black"
                    onChange={handleChange}
                    />

                </div>
                <div>
                    <input type="email"
                    name='email'
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="border border-black"
                    
                    />

                </div>
                <div>
                    <input type="password"
                    placeholder="Enter password"
                    name='password'
                    onChange={handleChange}
                    className="border border-black"
                    />

                </div>
                <div className="border border-black w-16">
                    <button>Register</button>

                </div>
            </form>

        </div>
    )
}
export default RegisterForm;