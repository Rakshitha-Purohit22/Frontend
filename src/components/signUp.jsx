import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    let [name,setName] = useState("")
    let [mobile,setMobile] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e)=>{
        e.preventDefault()
        let data = {name,mobile,email,password,confirmPassword}
        if(name && email && (password == confirmPassword)) {
            axios.post('http://localhost:4000/signup',data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
            })
        } else {
            alert("invalid credentials")
        }
    }
    return ( 
        <div className="signUp">
            <h1>Sign Up page</h1>
            <div className="sigUp_form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" placeholder="enter the name" className="form-control" name="name" value={name}
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mobile_number">
                        <input type="tel" placeholder="enter the mobile number" className="form-control" name="mobile_number" value={mobile} 
                        onChange={(e)=>setMobile(e.target.value)}/>
                    </div>
                    <div className="email">
                        <input type="email" placeholder="enter email address" className="form-control" name="email" value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="password">
                        <input type="password" name="password" placeholder="enter password" className="form-control" value={password}
                        onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className="confirm_password">
                        <input type="password" name="confirm_password" className="form-control" placeholder="confirm password" 
                        value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className="signUp_button">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="login_button">
                        <p>Already a user ?</p>
                        <Link to="/" className="btn btn-outline-primary">Login</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;