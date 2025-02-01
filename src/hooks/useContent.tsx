// import { useEffect, useState } from "react";
// import { BACKEND_URL } from "../config";
// import axios from "axios";

// export function useContent(){
//     const[contents ,setContents] = useState([]);

//     useEffect (()=>{
//     axios.get(`${BACKEND_URL}/api/v1/content`,{
//         headers : {
//             "Authorization" :localStorage.getItem("token")
//         }
//     })
//      .then((response)=>{
//         setContents(response.data.content)
//      })
//     } ,[])
//     return contents ;
// }


import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);

  const fetchContents = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setContents(response.data.content); // Update the contents
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  useEffect(() => {
    fetchContents(); // Fetch contents on mount
  }, []);

  return { contents, fetchContents }; // Return both contents and the function
}
