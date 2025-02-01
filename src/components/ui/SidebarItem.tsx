import { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div>

   
    <div className="flex text-black py-2 cursor-pointer hover:bg-purple-100 rounded max-w-48 pl-4">
        <div className="pr-2">
        {icon}

        </div>
      
       <div className="font-bold text-lg mt-1 text-black">
       {text}
       

        </div>
    </div>
    </div>
    
  );
}
