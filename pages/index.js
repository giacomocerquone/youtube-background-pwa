import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();

  return (
    <div className={styles.container}>
      {query.text && (
        <audio controls>
          <source src={`/api/stream?link=${query.text}`} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </div>
  );
}
