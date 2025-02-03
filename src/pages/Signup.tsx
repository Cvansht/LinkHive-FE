import { useRef } from "react";
import axios from "axios";
import { InputPassword ,InputUsername } from "../components/ui/Input";

import { SignUp } from "../components/ui/button";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";




export function Signup() {
  
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();
  

  async function signup() {
    
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(BACKEND_URL + "/api/v1/signup", {
       
        
       
        username,
        password,
       
      
    });
    navigate("/signin")
    alert("You have signed up");
  }

  return (
    <div className="bg-custom-bg bg-cover bg-no-repeat bg-fixed bg-[url('/bgimg.jpg')] bg-black">
    <div className="wrapper flex justify-center items-center min-h-screen ">
      <div className="Form-box relative flex items-center justify-center overflow-hidden w-auto h-auto">
        <div className="register-container flex-col w-[500px] h-[250px]">
          <div className=" text-white mr-12">
            <header className="text-3xl text-center pr-8">Sign Up</header>
          </div>

          <div className="input-box3 flex  relative justify-center text-lg">
            <InputUsername reference={usernameRef}  placeholder="Username or Email" />
          </div>
          <div className="input-box4 flex py-1 relative justify-center text-lg">
            <InputPassword reference={passwordRef} 
             placeholder="Password"/>
          </div>
          <div className="justify-center flex text-white text-xl  border-inherit mr-20 mt-2">
            <SignUp onClick={signup}  />
          </div>
          <div className="text-white text-sm ml-28 py-2">
            Already have an Account ? <button  onClick={() => navigate("/signin")}> SignIn</button>

          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
