import { useRef } from "react";
import axios from "axios";
import { Input } from "../components/ui/Input";
import "./Signup.css";
import { Button } from "../components/ui/button";
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
      <div className="font-poppins text-lg m-0 p-0 box-border">
        <div className="wrapper flex justify-center items-center min-h-screen background">
          <div className="Form-box relative flex items-center justify-center overflow-hidden z-2 w-auto h-auto">
            <div className="register-container flex-col w-[500px]">
              <div className="top text-white">
               
                <header className="text-3xl text-center py-1">Sign Up</header>
              </div>
             

              <div className="input-box3 flex py-2 relative justify-center">
                <i className="bx bx-envelope absolute mt-2 pl-1"></i>
                <Input reference={usernameRef} placeholder="Username" />
              </div>
              <div className="input-box4 flex py-1 relative justify-center">
                <Input reference={passwordRef} placeholder="Password" />
              </div>
              {/* <div className="input-box4 flex py-1 relative">
                <Input reference={cfmpasswordRef} placeholder=" Confirm Password" />
              </div> */}
              <div className="input-box5 text-white text-xl text-center h-8 border-inherit mt-2 flex justify-center">
                <Button variant="primary" onClick={signup} text="Register" />
              </div>
              <div className="two-col mt-5">
                <div className="one text-white text-xs flex justify-between">
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
