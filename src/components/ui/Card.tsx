import axios from "axios";
import { SubtIcon } from "../icons/subtIcon";
import { BACKEND_URL } from "../../config";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { InfoIcon } from "../icons/info";
import { TwitterIcon } from "../icons/TwitterIcon";
import { LinkedinIcon } from "../icons/linkedin";
import { useEffect } from "react";
// import { TwitterTweetEmbed } from "react-twitter-embed";


interface CardProps {
  title: string;
  link: any;
  type: "twitter" | "youtube" | "linkedin" | "docs";
  contentId: any; // Add contentId
  fetchContents: () => void; // Add fetchContents as a prop
}

export function Cards({
  title,
  link,
  type,
  contentId,
  fetchContents,
}: CardProps) {
  // Dynamically load the Twitter widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  //@ts-ignore
  async function deletecontent(contentId) {
    await axios.delete(
      `${BACKEND_URL}/api/v1/content`,

      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          contentId,
        },
      }
    );
    alert("content is deleted");
    fetchContents();
  }

  const fetchDescription = async () => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/v1/content/${contentId}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      alert(data.discription);
    } catch (error) {
      console.error("Error fetching description:", error);
      alert(
        "An error occurred while fetching the description. Please check the console for details."
      );
    }
  };

  const extractLinkedInPostId = (link: any): any | null => {
    // Match numeric ID following 'activity-'
    const match = link.match(/activity-(\d+)/);
    return match ? match[1] : null;
  };

  const linkedInPostId = extractLinkedInPostId(link);

  console.log("Original URL:", link);
  console.log("Extracted Post ID:", linkedInPostId);

  // Extract Tweet ID
  const extractTweetId = (link: string): string | null => {
    const match = link.match(/status\/(\d+)/);
    return match ? match[1] : null;
  };

  // Example usage:

  const tweetId = extractTweetId(link);

  // console.log("Tweet ID:", tweetId);

  return (
    <div>
      <div className="bg-white rounded-md shadow-md  p-4 border-gray-200 max-w-72 border">
        <div className=" flex justify-between">
          <div className="flex items-center text-lg font-semibold">
            <div className="text-gray-500 pr-2">
              {type === "twitter" && <TwitterIcon />}
              {type === "linkedin" && <LinkedinIcon />}
              {type === "youtube" && <YoutubeIcon />}
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 pt-1 text-gray-500">
              <button onClick={fetchDescription}>
                <InfoIcon />
              </button>
            </div>
            <div className="text-gray-500">
              <button onClick={() => deletecontent(contentId)}>
                <SubtIcon></SubtIcon>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-4">
            {type === "youtube" && (
              <iframe
                className="w-full"
                style={{ height: "163px", overflowY: "auto" }}
                src={link.replace("watch", "embed").replace("?v=", "/")}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div></div>

          {type === "twitter" && (
            <div
              className="w-full"
              style={{ height: "163px", overflowY: "auto" }}
            >
              <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Fetching post... <a href="https://t.co/U8BuPVwSwd">pic.twitter.com/U8BuPVwSwd</a></p>&mdash;  <a href={`https://twitter.com/user/status/${tweetId}`}></a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
              
              
              {/* <blockquote className="twitter-tweet">
                  <a href={`https://twitter.com/user/status/${tweetId}`}></a>
                </blockquote>
            
                <TwitterTweetEmbed
                  tweetId={tweetId!}
               
               
                /> */}
            </div>
          )}
        </div>

        {type === "linkedin" && (
          <div style={{ height: "163px", overflowY: "auto" }}>
            <iframe
              src={link}
              width="310"
              height="163"
              title="LinkedIn Post"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
