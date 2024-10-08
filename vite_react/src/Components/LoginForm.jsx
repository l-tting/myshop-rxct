import axios from "axios"

const LoginForm =()=>{
    const url = "http://127.0.0.1:5000/login"
    const postLogin= async (e)=>{
        e.preventDefault()
        try{
            const response = await axios.post(url)
            const token = response.data.access_token
            localStorage.setItem("access_token",token)
        }
        catch(e){
            console.log("Error logging in:",e)
        }
        
    }
    return(
        <div className="mt-4">
             <form className="space-y-4" onSubmit={postLogin}>
                    <div>
                        <input type="text"
                        className="border border-black w-48"
                        placeholder="Enter username or email"
                        name=""
                        />
                    </div>
                    <div>
                        <input type="password"
                        className="border border-black w-48"
                        placeholder="Enter password"
                        name=""
                        />
                    </div>
                    <div>
                        <button className="border border-black w-20">Login</button>
                    </div>
                </form>

        </div>
    )
}
export default LoginForm;