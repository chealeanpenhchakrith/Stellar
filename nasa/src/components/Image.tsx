import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Image() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  interface Image {
    copyright: string;
    date: string;
    explanation: string;
    url: string;
    title: string;
  }
  const [image, SetImage] = useState<Image>(Object);
  useEffect(() => {
    axios.get(url).then((response) => {
      SetImage({
        copyright: response.data.copyright,
        date: response.data.date.split("2024"),
        explanation: response.data.explanation,
        url: response.data.url,
        title: response.data.title,
      });
      console.log(response.data);
    });
  }, []);

  const url: string = `https://api.nasa.gov/planetary/apod?date=2024-${month}-${day}&api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  return (
    <>
      <div className="flex justify-center mt-15 ">
        <img
          src={image.url}
          alt="picture"
          width={700}
          height={700}
          className="rounded-2xl"
        />
      </div>
      <div className="text-white flex justify-center mt-10">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-4xl">{image.title}</h1>
          <h1 className="text-wrap w-175 text-white text-justify leading-9">
            {image.explanation}
          </h1>
          <div className="flex flex-col w-175 gap-2">
            {image.copyright ? (
              <div>
                <h1 className="text-[#7083A3]">
                  Copyright : {image.copyright}
                </h1>
                <h1 className="text-[#7083A3]">Date : 2025{image.date}</h1>
              </div>
            ) : (
              <div>
                <h1 className="text-[#7083A3]">Date : 2025{image.date}</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
