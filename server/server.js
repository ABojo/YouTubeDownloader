const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ytdlCore = require('ytdl-core');
const fs = require('fs');
const app = express();

//Request logging
app.use(morgan('dev'));

//parses post data and adds obj to req.body
app.use(express.json());

//Serve react build folder
app.use(express.static(path.resolve('..', 'client', 'build')));

//Handles converting the file to mp3, saving it to the disk, sending a response back with the DL link
app.post('/api/convert', async (req, res, next) => {
  try {
    //gets info about YT video or throws error if it cant find the specified video
    const info = await ytdlCore.getInfo(req.body.url);
    const fileName = `${info.videoDetails.title}-${Date.now()}-output.${
      req.body.format
    }`;

    //create read stream from YT Video and create a writeable stream to save it
    const filter = req.body.format === 'mp3' ? 'audioonly' : 'videoandaudio';
    const readableStream = ytdlCore(req.body.url, { filter });
    const writableStream = fs.createWriteStream(
      path.resolve('..', 'uploads', fileName)
    );

    //push read stream into write stream + added event handler that will send the json response once the finish event is fired
    readableStream.pipe(writableStream).on('finish', () => {
      res.json({
        status: 'success',
        data: {
          downloadLink: `/download/${encodeURIComponent(fileName)}`,
        },
      });
    });
  } catch (err) {
    next(new Error("Sorry, we couldn't find that video!"));
  }
});

//Sends back the requested filename as a download
app.get('/download/:fileName', (req, res, next) => {
  const decodedFileName = decodeURIComponent(req.params.fileName);
  res.download(path.resolve('..', 'uploads', decodedFileName), (err) => {
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
