import { Button } from "../components/ui/button";
import { PlusIcon } from "../components/icons/plusicon";
import { Cards } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/createcontentmodal";

import { useEffect, useState } from "react";
import { Sidebar } from "../components/ui/Sidebar";
import { Shareicon } from "../components/icons/Shareicon";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [modalOpen, setmodalOpen] = useState(false);
  const { contents, fetchContents } = useContent();
  const [filteredContents, setFilteredContents] = useState(contents); // Store filtered data

  // Function to filter content by type
  //@ts-ignore
  const filterByType = (type) => {
    if (type === "all") {
      setFilteredContents(contents); // Reset to all contents
    } else {
      //@ts-ignore
      setFilteredContents(contents.filter((content) => content.type === type));
    }
  };

    // Load all contents when the component mounts or when contents change
    useEffect(() => {
      setFilteredContents(contents);
    }, [contents]); // Runs when `contents` is updated
  
  

  return (
    <div className="opacity-100">
     
      <Sidebar userId={(contents?.[0] as any)?.userId?.toString() ?? ""}
       onFilter={filterByType}  />

      <div className="p-4 ml-64 min-h-screen border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setmodalOpen(false);
          }}
          fetchContents={fetchContents} // Pass fetchContents as a prop
        />
        <span>
          <div className="flex justify-end gap-4">
            <Button
              onClick={() => {
                setmodalOpen(true);
              }}
              startIcon={<PlusIcon />}
              sizes="md"
              variant="primary"
              text="Add New "
            />
            <Button
              sizes="md"
              variant="secondary"
              text="Share Brain"
              startIcon={<Shareicon />}
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/brain/share`,
                  {
                    share: true,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                const shareUrl = `http://localhost:5173/share/ ${response.data.hash}`;
                alert(shareUrl);
              }}
            />
          </div>
        </span>
        <div
          className="font-bold text-2xl font-sans gap-2px py-4 pl-10
        "
        >
          Your Notes
        </div>

        <div className="flex gap-3 m-5 flex-wrap">
          {filteredContents.map((content) => (
            <Cards
            //@ts-ignore
              key={content._id}
               //@ts-ignore
              title={content.title}
               //@ts-ignore
              link={content.link}
               //@ts-ignore
              type={content.type}
               //@ts-ignore
              contentId={content._id}
              fetchContents={fetchContents}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
