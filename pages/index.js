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
      <audio controls>
        <source
          src="https://rr1---sn-45nufxc-hm2l.googlevideo.com/videoplayback?expire=1645543890&ei=cq0UYpLLJsTE7gO9mLyABg&ip=2001%3Ab07%3A6473%3A1082%3Afc59%3Abc4a%3Aaa76%3Af4d4&id=o-AM8yeL49VSwG1EvZUgiauLnEi0Sl63GwRfU3mabkm8q1&itag=251&source=youtube&requiressl=yes&mh=Kp&mm=31%2C26&mn=sn-45nufxc-hm2l%2Csn-hgn7rn7r&ms=au%2Conr&mv=m&mvi=1&pcm2cms=yes&pl=55&gcr=it&initcwndbps=1337500&vprv=1&mime=audio%2Fwebm&ns=rmwiN8x_ShFrXJkRWMSUsWQG&gir=yes&clen=5298732&dur=298.681&lmt=1602500687452756&mt=1645521884&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=2311222&n=e5lsvbeM79gPgPJy3&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAPxAMfVvTWjGUcff_ZlPam4qs83Kq0jnzx9XZ8cib6hlAiEA1r143OuGEQ0rYJqBWeSy3o9_h8QLiGNo_cNWvujzb7g%3D&sig=AOq0QJ8wRAIgTXc_aQrgBtzU_0fzCXN17jtlUprT6wb_egosJXKLtXsCICWUoR4HnLWzL-BnhbRlxFsyZA4Vovt56U2_wyQ86BE2"
          type="audio/mpeg"
        />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
