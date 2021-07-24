const express = require('express');
const morgan = require('morgan');
const ytdlCore = require('ytdl-core');
const fs = require('fs');
const paths = require('./utils/paths');
const app = express();

//Request logging
app.use(morgan('dev'));

//parses post data and adds obj to req.body
app.use(express.json());

//Serve react build folder
app.use(express.static(paths.buildFolder));

//Handles converting the file to mp3, saving it to the disk, sending a response back with the DL link
app.post('/api/convert', async (req, res, next) => {
  try {
    const { url, fileExtension } = req.body;

    //only accept mp3 or mp4 formats
    if (fileExtension !== 'mp3' && fileExtension !== 'mp4')
      throw new Error('Sorry, you must specify a fileExtension of mp3 or mp4!');

    //gets info about specified youtube video
    const info = await ytdlCore.getInfo(url);
    const { title, video_url } = info.videoDetails;

    const strippedTitle = title.replace(/[/\\?%*:|"<>]/g, ''); //strips out characters that are illegal in file names
    const fileName = `${strippedTitle}-${Date.now()}.${fileExtension}`;

    //create read stream from YT Video and create a writeable stream to save it
    const filter = fileExtension === 'mp3' ? 'audioonly' : 'videoandaudio';
    const readableStream = ytdlCore(url, { filter });
    const writableStream = fs.createWriteStream(
      `${paths.downloadFolder}/${fileName}`
    );

    //push read stream into write stream + added event handler that will send the json response once the finish event is fired
    readableStream.pipe(writableStream);

    writableStream.on('finish', () => {
      res.json({
        status: 'success',
        data: {
          title,
          videoUrl: video_url,
          embedUrl: info.videoDetails.embed.iframeUrl,
          thumbnail: info.videoDetails.thumbnails[0].url,
          author: info.videoDetails.author.name,
          authorUrl: info.videoDetails.author.channel_url,
          downloadLink: `/download/${encodeURIComponent(fileName)}`,
        },
      });
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//Sends back the requested filename as a download
app.get('/download/:fileName', (req, res, next) => {
  const fileName = decodeURIComponent(req.params.fileName);

  res.download(`${paths.downloadFolder}/${fileName}`, (err) => {
    if (err) next(new Error('Sorry, that file does not exist!'));
  });
});

//global error handler that will catch errors and send a generic message back to client
app.use((err, req, res, next) => {
  res.json({
    status: 'error',
    message: err.message,
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log('The server is now listening for incoming requests!');
});
