import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

/**
 * JavaScript function to match (and return) the video Id
 * of any valid Youtube Url, given as input string.
 * @author: Stephan Schmitz <eyecatchup@gmail.com>
 * @url: https://stackoverflow.com/a/10315969/624466
 */
function ytVidId(url) {
  var p =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return (url || "").match(p) ? RegExp.$1 : false;
}

export default function Home() {
  const { query } = useRouter();

  const [vidId, setVidId] = useState("");

  useEffect(() => {
    const isVidId = ytVidId(query.text);

    if (!isVidId && query.text) {
      alert("Can't extract the YouTube URL in the data you shared here.");
    } else {
      setVidId(isVidId);
    }
  }, [query.text]);

  return (
    <div className={styles.container}>
      <p>
        Install this PWA and then share a YouTube video with this PWA to be able
        to listen to the audio in background
      </p>
      <p style={{ backgroundColor: "yellow" }}>
        WARNING: on this vercel hosted URL, videos longer than 30seconds
        won&apos;t work.
      </p>
      <a href="" style={{ margin: "1rem" }}>
        See here why
      </a>
      {vidId && (
        <audio controls>
          <source
            src={`/api/stream?link=https://www.youtube.com/watch?v=${vidId}`}
            type="audio/mpeg"
          />
          Your browser does not support the audio tag.
        </audio>
      )}
    </div>
  );
}
