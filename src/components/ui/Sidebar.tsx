
import { Brain } from "../icons/Brain";
import { DocIcon } from "../icons/Document";
import { LinkedinIcon } from "../icons/linkedin";
import { UserIcon } from "../icons/user";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { BACKEND_URL } from "../../config";






export function Sidebar({userId}){
    const fetchUsername = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/v1/${userId}`);
            console.log("Fetching username...");
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("Fetched Username:", data.username);
    
            return data; // Return the fetched data properly
        } catch (error) {
            console.error('Error fetching username:', error);
            alert('An error occurred while fetching the username. Please check the console for details.');
        }
    };
    
    let user;
fetchUsername().then(data => {
    user = data;
    console.log("User Data:", user);
});
    
    
    
   
    return <div  className="h-screen border-r-2 w-64 fixed left-0 top-0 pl-6 bg-orange-100">
        <div className="flex text-3xl pt-8 items-center font-sans font-bold">
            <div className="pr-2">
            <Brain/>

            </div>
            
             
       LinkHive
        </div>
        
        
        
        <div className="pt-8 pl-4">
        <SidebarItem text= "Twitter"  icon ={<TwitterIcon/>}/>
        <SidebarItem text= "Youtube" icon ={<YoutubeIcon/>}/>
        <SidebarItem text= "Documents" icon ={<DocIcon/>}/>
        <SidebarItem text= "LinkedIn" icon ={<LinkedinIcon/>}/>

        </div>
        <div className="text-xl font-semibold mt-24 ml-8">
           {user}


        </div>
        <div className="mt-72">
        <SidebarItem text= "Account" icon ={<UserIcon/>}/>

        </div>
           

        </div>
        

   
}