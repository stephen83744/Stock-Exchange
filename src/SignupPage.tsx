import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export type User = {
    fullName : string ;
    password : string;
    email : string;
   
};

const STORAGE_KEY = "logindata";

 
const SignUp:React.FC =() =>{
    const navigate = useNavigate();

    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [agree, setAgree] = useState(false)
    const [message, setMessage] = useState("")

    const retrieve = (): User[] =>{
      const info = localStorage.getItem(STORAGE_KEY);
       if (!info) {
        console.log ("No data is saved"); 
        return[];
       }
       const parse =JSON.parse(info);
       return parse;
         }


        const saving = ( users : User[]) => {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
   };
    
   
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();


     if (!fullName || !email || !password || !confirmPassword ) {
        setError("Please fill all fields");
     return;
     }
      if (password !== confirmPassword) {
        setError(" Passwords do not match");
        return;
        }
   
    if (!agree) {
        setError("please agree to the terms and conditions");
        return;
    }
 
const users = retrieve();
 const existing = users.find(user=> user.email === email);

      if (existing) {
        setMessage("Email already registered. Please login"); 
        return;
      };
  
      const newUser: User = { 
        fullName, email, password
      };
    saving([...users, newUser]);
    setMessage("Login successful,processing ...");
    setError ("");

    setTimeout(() => {navigate("/loginPage") },2000);
    };
   

    return(
        <div>
  
              <h2 >Create Account</h2>

              <form id="form" onSubmit={handleSubmit}>

                <div  className="form">
                    <label className="label" htmlFor="fullname"> Fullname</label><br></br>
                  <input type="text"
                  className="Fullname"
                   id="Fullname"
                   value={fullName} 
                   placeholder="Full-Name"
                   onChange={(e)=> {setFullName(e.target.value);
                    setError("")
                   }} />
                  
                </div>

                <div>
                     <label className="label" 
                  htmlFor="Email">Email</label><br></br>
                  <input type="email"
                   id="Email"
                    className="email-form"
                    value={email}
                     onChange={(e)=>{setEmail(e.target.value);
                        setError("")
                     }} />
                 
                </div>

                <div>
                     <label className="label" htmlFor="Password">Password</label><br></br>
                  <input type="password" 
                  id="Password" 
                  className="Password-form" 
                  value={password}
                  placeholder="Password" 
                  onChange={(e)=> {setPassword(e.target.value);
                    setError("")
                  }}
                  />
                 
                </div>

                <div>
                       <label className="label" htmlFor="confirm-password">Confirm Password</label><br></br>
                  <input type="password" 
                  id="confirm-Password"
                   className="confirm-Password-form"
                   value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e)=> {setConfirmPassword(e.target.value);
                        setError("")
                    }}/>
               
                </div>

                <div >
                  <input className="checkbox-form" 
                  type="checkbox"
                   checked = {agree}
                    id="checkbox"
                    onChange={(e) =>setAgree(e.target.checked)} />
                  <label className="label" htmlFor="checkbox">
                    I agree to the <a href="#!"><u>Terms of service</u></a>
                  </label>   
                </div>

       <div id="response"></div>
                <div className="">
                  <button type="submit"
                    className="btn  ">Sign Up</button>
                </div>
                {error && <h2 className="error-message">{error}</h2>}
                {message && <h2 className="message">{message}</h2>}

              </form>


</div>

    );
};
export default SignUp;  