// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const ytdl = require("ytdl-core");

export default async function handler(req, res) {
  const { link } = req.query;

  if (!link) return res.status(400).json({ error: "There is no link bro" });

  try {
    res.writeHead(200, {
      "Content-Type": "audio/mp3",
      "Accept-Ranges": "bytes",
      Connection: "Keep-Alive",
      "Transfer-encoding": "chunked",
      "Keep-Alive": "timeout=5000000",
    });

    ytdl(link, {
      filter: function (format) {
        return !format.hasVideo;
      },
      quality: "highest",
    }).pipe(res);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong" });
  }
}
