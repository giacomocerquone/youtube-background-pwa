// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const youtubedl = require("youtube-dl-exec");

export default async function handler(req, res) {
  const { link } = req.query;

  if (!link) return res.status(400).json({ error: "There is no link bro" });

  try {
    const output = await youtubedl(link, {
      dumpSingleJson: true,
      noWarnings: true,
      noCallHome: true,
      noCheckCertificate: true,
      preferFreeFormats: true,
      youtubeSkipDashManifest: true,
      extractAudio: true,
      audioFormat: "mp3",
    });

    res.status(200).json(output);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong" });
  }
}
