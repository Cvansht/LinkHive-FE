import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { NewButton } from "./button";
import { Discription, Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";


interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
  fetchContents: () => void; // Add this prop
} 

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Linkedin = "linkedin",
  
  Instagram = "instagram",
  Type = "type",
}

//@ts-ignore
export function CreateContentModal({ open, onClose , fetchContents}: CreateContentModalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const discriptionRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

  async function addcontent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const discription = discriptionRef.current?.value;

    if (!title || !link || !discription) {
      alert("All fields are required!");
      return;
    }

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
        discription,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    alert("Content added successfully!");

    onClose(); // Close modal after success
    fetchContents();

    
    
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 flex justify-center opacity-100">
          <div className="flex flex-col justify-center w-72">
            <span className="bg-white opacity-100 px-4 py-3   rounded-lg">
              <span>
                <div className="font-bold text-xl flex ml-14 mb-1">
                  Add Content
                  <div className="flex justify-end ml-14 mb-1">
                    <div onClick={onClose} className="cursor-pointer">
                      <CrossIcon />
                    </div>
                  </div>
                </div>
              </span>

              <div>
                <Input reference={titleRef} placeholder={"Title"} />
                <Input reference={linkRef} placeholder={"Link"} />
                <Discription
                  reference={discriptionRef}
                  placeholder={"Discription"}
                />
              </div>
              <div className="w-56 ml-1.5">
                <select
                  id="dropdown"
                  name="dropdown"
                  className="block w-full px-2 py-2 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black sm:text-sm font-semibold"
                  onChange={(e) => setType(e.target.value as ContentType)}
                  value={type}
                >
                  <option value={ContentType.Youtube}>YouTube</option>
                  <option value={ContentType.Twitter}>Twitter</option>
                  <option value={ContentType.Linkedin}>LinkedIn</option>
                  {/* <option value={ContentType.Document}>Document</option> */}
                </select>
              </div>

              <div className="flex justify-center mr-5">
                <NewButton onClick={addcontent} />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
