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
    const { url } = req.body;

    const info = await ytdlCore.getInfo(url);

    const readableStream = ytdlCore(url, { filter: 'audioonly' });
    const fileName = `${info.videoDetails.title}-${Date.now()}-output.mp3`;

    const writableStream = fs.createWriteStream(
      path.resolve('..', 'uploads', fileName)
    );

    const stream = readableStream.pipe(writableStream);

    stream.on('finish', () => {
      res.json({
        status: 'success',
        data: {
          downloadLink: `/download/${encodeURIComponent(fileName)}`,
        },
      });
    });
  } catch (err) {
    next(err);
  }
});

//Sends back the request filename as a download
app.get('/download/:fileName', (req, res) => {
  const decodedFileName = decodeURIComponent(req.params.fileName);
  res.download(path.resolve('..', 'uploads', decodedFileName));
});

//global error handler that will catch errors and send a generic message back to client
app.use((err, req, res, next) => {
  res.json({
    status: 'error',
    message: 'Sorry, we couldnt find that video!',
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log('The server is now listening for incoming requests!');
});
