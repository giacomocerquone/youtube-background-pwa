# PWA to handly runs youtube in background

deployed here -> [https://ytbg-lac.vercel.app/](https://ytbg-lac.vercel.app/)


This is an experiment using next.js and ytdl-core to be able to listen to youtube videos in background.
It's a PWA and leverages the [share-target](https://web.dev/web-share-target/) feature supported by some browsers.

# Why it doesn't always work?

Basically I've deployed it on vercel and if you look closely at my `/api/stream` endpoint implementation, I'm using [ytdl-core](https://github.com/fent/node-ytdl-core) to directly return a node stream to be played by the audio html tag. This means it'll use bandwith, but [vercel cuts it to 5mb](https://vercel.com/support/articles/how-to-bypass-vercel-5mb-body-size-limit-serverless-functions), as soon as the 5mb are reached it'll close the connection.

This means you can't point the app to long videos (maximum will be about 1 minute give or take, depending also on the audio quality of that video).

## Extra

Why returning directly the node stream is the only solution?
Because any youtube downloader will give you a googlevideo link accessible only by the same ip that requested it (you can find this info also within the readme of ytdl).
Therefore, I couldn't just return the video url and then let the client download the audio.

## The interesting bit

is the following one in the manifest.json

```json
"share_target": {
  "action": "/",
  "method": "GET",
  "params": {
    "title": "title",
    "text": "text",
    "url": "query"
  }
}
```

## Screenshots

![photo_2022-02-23_23-49-21](https://user-images.githubusercontent.com/9303791/155426186-4a4c26f9-b3e2-495e-9630-f1f27266f1e5.jpg)
![photo_2022-02-23_23-49-24](https://user-images.githubusercontent.com/9303791/155426188-d600d229-1a87-4023-973a-0c9344330bd3.jpg)

