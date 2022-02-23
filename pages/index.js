import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();

  return (
    <div className={styles.container}>
      {query.link && (
        <audio controls>
          <source src={`/api/stream?link=${query.link}`} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </div>
  );
}
