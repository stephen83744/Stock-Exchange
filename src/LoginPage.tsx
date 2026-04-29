import {  useState } from "react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY ="logindata";


type User ={
    fullName : string ;
    password : string;
    email : string;
};
const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] =useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

     const retrieve = (): User[] =>{
      const info = localStorage.getItem(STORAGE_KEY);
      if (!info) {console.log("No data"); return[]; }
      const parsed =JSON.parse (info);
      return parsed;
    }

const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

setError("")
setMessage("")
 if(!email || !password) {
     setError("Please enter both email and password");
     return;
    }

   

  const users = retrieve();
   const existing = users.find((user)=> user.email === email && user.password === password);
  if (!existing){
    setError("invalid Email or Password");
    return;
  }
  setMessage("Login succesful")
  setTimeout(() =>{navigate("/")} ,2000);

}
   
  return (
    <div className="login-form">
      <h2>Welcome to AlphaRise</h2>
      <p> Please enter your Email and password </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Email"> Email</label>
          <br></br>
          <input type="email" 
          id="emailx" 
          value={email}
          className="email-form"
          onChange={(e)=>{setEmail(e.target.value);
            setError("")
          }} />
        </div>
        <div>
          <label htmlFor="Password">Password</label><br></br>
          <input type=  "password"
          id="Passwordx"
          value={password}
           className="password-form"
           onChange={(e)=>{setPassword(e.target.value);
            setError("")
           }} />
            <button
                  type="button"
                  className="password-toggle"
                >
                  <span className="eye-icon"></span>
                </button>
        </div>

        <input type="checkbox" id ="remember"/>
        <label htmlFor="remember">Remember me</label>
        <p>
          <a href="#">Forgot password?</a>
        </p>

        <button id="loginB" type="submit" className=" loginButton">
          Sign In
        </button>
           {error && <h2 className="error-message">{error}</h2>}
                {message && <h2 className="message">{message}</h2>}
      </form>
    </div>
  );
};
export default LoginPage;
