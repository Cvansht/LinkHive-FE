import { useRef } from "react";
import "./Signin.css";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
      username,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
    //redirect the user to the dashboard
  }

  return (
    <div className="bg-custom-bg bg-cover bg-no-repeat bg-fixed bg-[url('/bgimg.jpg')] bg-black">
      <div className="font-poppins text-lg m-0 p-0 box-border">
        <div className="wrapper flex justify-center items-center min-h-screen background">
          <div className="Form-box relative flex items-center justify-center overflow-hidden z-2 w-auto h-auto">
            <div className="register-container flex-col w-[500px]">
              <div className="top text-white mr-12">
              
                <header className="text-3xl text-center py-1">Sign In</header>
              </div>
              <div className="two-forms items-center flex border-none relative gap-2"></div>

              <div className="input-box3 flex py-2 relative justify-center">
                <i className="bx bx-envelope absolute mt-2 pl-1"></i>
                <Input
                  reference={usernameRef}
                  placeholder="Username or Email"
                />
              </div>
              <div className="input-box4 flex py-1 relative justify-center">
                <i className="bx bx-lock-alt absolute mt-2 pl-1"></i>
                <Input reference={passwordRef} placeholder="Password" />
              </div>
              <div className="flex py-1 relative justify-center w-80">
                <div className="input-box5 text-white text-xl w-auto text-center h-8 border-inherit mt-2 ml-20">
                  <Button variant="type2" onClick={signin} text="SignIn" />
                </div>
              </div>

              <div className="two-col mt-5">
                <div className="one text-white text-xs flex justify-between">
                  {/* <label htmlFor="register-check" className="pb-1">
                    <input type="checkbox" id="register-check" />
                    Remember me
                  </label> */}
                  {/* <label>
                    <label className="underline">Terms & Conditions</label>
                  </label> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
