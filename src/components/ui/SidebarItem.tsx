import { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
  onClick,
  
}: {
  text: string;
  icon: ReactElement;
  onClick?: () => void; // Making it optional

}) {
  return (
    <div>
      <button className="w-48" onClick={onClick}>
      <div className="flex text-black py-2 cursor-pointer hover:bg-blue-200 transition duration-500; rounded max-w-48 pl-4">
        <div className="pr-2">{icon}</div>

        <div className="font-bold text-lg mt-1 text-black">{text}</div>
      </div>
      </button>
      
    </div>
  );
}
