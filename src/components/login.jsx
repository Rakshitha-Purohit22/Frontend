import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")

    let handleSubmit = (e)=>{
        
    }
    return ( 
        <div className="login">
            <h1>Login</h1>
            <div className="form-group px-5 w-25">
                <form action="" onSubmit={handleSubmit}>
                    <div className="email my-4">
                        <input type="email" className="form-comtrol" placeholder="email address" name="email" required value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div className="password">
                        <input type="password" className="form-control" placeholder="enter password" name="password" required 
                        value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="login_button">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="signUp_button">
                        <p>Are you a new user ?</p>
                        <Link to="/signup" className="btn btn-outline-primary">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;