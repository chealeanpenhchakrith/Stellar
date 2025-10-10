import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Image() {
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
        date: response.data.date,
        explanation: response.data.explanation,
        url: response.data.url,
        title: response.data.title,
      });
    });
  }, []);

  const url: string = `https://api.nasa.gov/planetary/apod?api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  return (
    <>
      <h1>{image.copyright}</h1>
      <h1>{image.date}</h1>
      <h1>{image.explanation}</h1>
      <h1>{image.title}</h1>
      <img src={image.url} alt="picture" />
    </>
  );
}
