import { BackendBaseURL } from "../../../utils/constant";
import axios from "axios";
import Image from "next/image";
import { GoogleTagManager } from "@next/third-parties/google";
export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://tldw-126832972135.herokuapp.com/user/getalltitle",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "123@123.com" }),
      }
    );

    const data = await response.json();
    console.log("asdfasdfasdfasdfadss````asdfsadfadsf``````");
    const slugs = data.data.map((item, index) => ({
      slug: [
        item.video_title.replace(/[\?\/]/g, "").replace(/\s/g, "-"),
        item.url,
      ],
    }));

    return slugs;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getData(url) {
  try {
    console.log("print");
    const response = await fetch(
      "https://tldw-126832972135.herokuapp.com/user/getsummarydata",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "123@123.com", url: url }),
      }
    );
    console.log(response.data);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return false;
  }
}

export default async function Summary({ params }) {
  console.log("params", params.slug);

  const data = await getData(params.slug[1]);
  console.log(data);
  return (
    <div className="w-full flex flex-col items-center py-16 px-[18%] min-h-[70vh] bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]">
      <GoogleTagManager gtmId="GTM-PW5F742Z"></GoogleTagManager>
      <div className="flex flex-col items-center justify-center text-center">
        <h1
          className="text-[30px] font-semibold"
          dangerouslySetInnerHTML={{
            __html: data?.data?.data.video_title,
          }}></h1>
        <img
          src={data?.data?.data?.thumbnail}
          width={400}
          height={300}
          className="my-4"></img>
      </div>

      <div
        className="mt-4 ml-4 "
        dangerouslySetInnerHTML={{
          __html: data?.data?.data?.content.replace(/【7†source】/g, ""),
        }}>
        {}
      </div>
    </div>
  );
}
