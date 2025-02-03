import { useRef } from "react";
import { InputUsername , InputPassword } from "../components/ui/Input";
import { SignIn } from "../components/ui/button";
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
      <div className="wrapper flex justify-center items-center min-h-screen ">
        <div className="Form-box relative flex items-center justify-center overflow-hidden w-auto h-auto">
          <div className="register-container flex-col w-[500px] h-[250px]">
            <div className=" text-white mr-12">
              <header className="text-3xl text-center pr-8">Sign In</header>
            </div>

            <div className="input-box3 flex  relative justify-center text-lg">
              <InputUsername reference={usernameRef}  placeholder="Username or Email" />
            </div>
            <div className="input-box4 flex py-1 relative justify-center text-lg">
              <InputPassword reference={passwordRef} 
               placeholder="Password"/>
            </div>
            <div className="justify-center flex text-white text-xl  border-inherit mr-20 mt-2">
              <SignIn onClick={signin}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
