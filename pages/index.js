import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();
  const [audioLink, setAudioLink] = useState("");

  useEffect(() => {
    (async () => {
      if (query.link) {
        const res = await (await fetch(`/api/fetch?link=${query.link}`)).json();

        console.log(res);
        setAudioLink(res.url);
      }
    })();
  }, [query.link]);

  return (
    <div className={styles.container}>
      {audioLink && (
        <audio controls>
          <source src={audioLink} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </div>
  );
}
