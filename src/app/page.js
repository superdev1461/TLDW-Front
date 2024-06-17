"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cookie from "js-cookie";
// import PassGuard from "@/components/Guardx";
import toast, { Toaster } from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { Router } from "next/router";
import { isLogin } from "../utils/auth";
import { BackendBaseURL } from "../utils/constant";
import Link from "next/link";
export default function Home() {
  useEffect(() => {
    const authenticate = async () => {
      if (await isLogin()) {
        router.push("/");
      } else {
        router.push("/signin");
      }
    };
    // authenticate();
    // const email = cookie.get("email");
    // getAllTitle(email);

    cookie.set("token", "123@123.com", { expires: 1 });
    cookie.set("email", "123@123.com", { expires: 1 });
    const email = cookie.get("email");
    getAllTitle(email);
  }, []);

  const getAllTitle = (email) => {
    axios
      .post(`${BackendBaseURL}user/getalltitle`, {
        email,
      })
      .then((res) => {
        console.log(res.data.data);
        setSummaryData(res.data.data);
      })
      .catch((err) => {
        alert("failed");
      });
  };

  const [youtubeURL, setYoutubeURL] = useState("");
  const [summaryData, setSummaryData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [redirectURL, setRedirectURL] = useState("");
  const hiddenLinkRef = useRef(null);
  const router = useRouter();
  const getSummary = () => {
    setIsloading(true);
    if (youtubeURL.indexOf("https://") == -1) {
      alert("Input correct youtube url first");
      setIsloading(false);
      return;
    }
    axios
      .post(`${BackendBaseURL}getSummery`, {
        url: youtubeURL,
        email: cookie.get("email"),
      })
      .then((res) => {
        console.log(res.data);
        setIsloading(false);
        let updatedSummarydata = [];
        if (summaryData.length < 5) {
          updatedSummarydata = summaryData.concat(res.data);
        } else {
          updatedSummarydata = summaryData;
          updatedSummarydata[0] = res.data;
        }
        console.log(res);
        console.log(updatedSummarydata);
        if (!res.data.isExist) {
          setSummaryData(updatedSummarydata);
        }

        router.push(
          `/summary/${res.data.video_title
            .replace(/[\?\/]/g, "")
            .replace(/%/g, "")
            .replace(/\s/g, "-")}/${res.data.url}`
        );
        console.log(res.data);
      })
      .catch((err) => {
        alert("Sever Error! Try Again");
        setIsloading(false);
        console.log(err);
      });
  };

  return (
    <div className="min-h-[80vh] pb-8 py-8 px-[10%] bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]">
      <Toaster position="top-right" />
      <div className="flex justify-center flex-col items-center text-center">
        <h1 className="text-[30px] font-semibold py-8">
          Skip the Length, Catch the Gist
          <br />
          Video Summaries in Seconds
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <input
          onChange={(e) => {
            setYoutubeURL(e.target.value);
          }}
          className="w-[30%] dark:bg-zinc-800 dark:text-white rounded-lg border border-green-500 w-full px-4 py-2 h-[40px]"
          type="text"
          name="URL"
          placeholder="Paste a YouTube Video URL"
        />
        <button
          disabled={isloading}
          onClick={() => getSummary()}
          className="ml-4 flex justify-center items-center bg-green-400 hover:bg-green-300 transition-all rounded-lg px-3 h-[40px] py-3 gap-2 w-fit  dark:border-white">
          {isloading ? (
            <Spinner />
          ) : (
            <Image
              src={"/images/add.svg"}
              width={20}
              height={20}
              alt="add icon"
            />
          )}

          <span className="dark:text-black">Summarize</span>
        </button>
      </div>
      <div className="mt-8">
        <p>
          TL-DW.ai is your go-to solution for turning lengthy YouTube videos
          into concise, informative summaries. Designed for busy individuals who
          want to stay informed without spending hours watching videos, TL-DW.ai
          leverages advanced AI technology to distill essential information from
          long YouTube videos into quick, digestible insights. Whether you're
          looking to grasp the main points of educational content, stay updated
          with industry news, or simply save time on your favorite shows,
          TL-DW.ai makes it effortless. <br />
          <br />
          Simply paste the video link, and let TL-DW.ai do the rest. In seconds,
          you'll have a comprehensive summary that allows you to stay ahead,
          save time, and make the most of your viewing experience. Say goodbye
          to "too long; didn't watch" and hello to efficient learning and
          entertainment with TL-DW.ai.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-[30px] dark:text-green-400 text-green-600">
          Latest video summaries
        </p>
        <div className="px-16 ">
          {summaryData.map((summary, index) => {
            return (
              <div className="mt-2" key={index}>
                {/* <Link
                  className=" text-[20px] text-blue-500 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:underline"
                  href={`/summary?email=${cookie.get("email")}&title=${
                    summary.video_title
                  }`}
                  target="_blank">
                  {index + 1} &nbsp;
                  <strong>Title:&nbsp;</strong> {summary.video_title}
                </Link> */}
                <Link
                  className=" text-[20px] text-blue-500 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:underline"
                  href={`/summary/${summary.video_title
                    .replace(/[\?\/]/g, "")
                    .replace(/%/g, "")
                    .replace(/\s/g, "-")}/${summary.url}`}
                  target="_blank">
                  {index + 1} &nbsp;
                  <strong>Title:&nbsp;</strong> {summary.video_title}
                </Link>
                {/* <a
                  className=" text-[20px] text-blue-500 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:underline"
                  onClick={() => {
                    console.log(cookie.get("email"));
                    const userEmail = cookie.get("email");
                    router.push(
                      `/summary?email=${userEmail}&title=${summary.video_title}`
                    );
                  }}>
                  {index + 1} &nbsp;
                  <strong>Title:&nbsp;</strong> {summary.video_title}
                </a> */}
              </div>
            );
          })}
        </div>
      </div>
      <a
        ref={hiddenLinkRef}
        style={{ display: "none" }}
        target="_blank"
        rel="noopener noreferrer">
        Hidden Link
      </a>
    </div>
  );
}
