const express = require('express');
const morgan = require('morgan');
const ytdlCore = require('ytdl-core');
const fs = require('fs');
const path = require('path');
const app = express();

//Request logging
app.use(morgan('dev'));

//parses post data and adds obj to req.body
app.use(express.json());

//Serve react build folder
app.use(express.static(path.resolve('..', 'client', 'build')));

//get details about the specified video and send it back to the user
app.get('/api/videos/:videoId', async (req, res, next) => {
  try {
    const info = await ytdlCore.getInfo(req.params.videoId);

    res.json({
      status: 'success',
      data: {
        title: info.videoDetails.title,
        description: info.videoDetails.description,
        lengthSeconds: info.videoDetails.lengthSeconds,
        viewCount: info.videoDetails.viewCount,
        publishDate: info.videoDetails.publishDate,
        likes: info.videoDetails.likes,
        dislikes: info.videoDetails.dislikes,
        videoId: info.videoDetails.videoId,
        videoUrl: info.videoDetails.video_url,
        embedUrl: info.videoDetails.embed.iframeUrl,
        thumbnail: info.videoDetails.thumbnails[0].url,
        author: info.videoDetails.author.name,
        authorUrl: info.videoDetails.author.channel_url,
        authorSubs: info.videoDetails.author.subscriber_count,
      },
    });
  } catch (err) {
    next(err);
  }
});

//stream the file back to the client in the requested format
app.get('/api/videos/:videoId/:format', async (req, res, next) => {
  try {
    const { videoId, format } = req.params;

    if (format !== 'mp3' && format !== 'mp4')
      throw new Error('Sorry, you must specify a format of mp3 or mp4!');

    const title = (
      await ytdlCore.getInfo(req.params.videoId)
    ).videoDetails.title.replace(/[/\\?%*:|"<>]/g, '');

    //create read stream from YT Video and create a writeable stream to save it
    const filter = format === 'mp3' ? 'audioonly' : 'videoandaudio';
    const quality = format === 'mp3' ? 'highestaudio' : 'highestvideo';

    const readableStream = ytdlCore(videoId, { filter, quality });

    res.attachment(`${title}.${format}`);
    readableStream.pipe(res);
  } catch (err) {
    next(err);
  }
});

//global error handler that will catch errors and send a generic message back to client
app.use((err, req, res, next) => {
  res.json({
    status: 'error',
    data: err,
    message: err.message,
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log('The server is now listening for incoming requests!');
});
