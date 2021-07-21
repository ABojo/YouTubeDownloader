const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ytdlCore = require('ytdl-core');
const fs = require('fs');
const app = express();

const apiRouter = require('./routes/apiRoutes');

//Request logging
app.use(morgan('dev'));

//parses post data and adds obj to req.body
app.use(express.json());

//Serve react build folder
app.use(express.static(path.resolve('..', 'client', 'build')));

app.post('/api/convert', async (req, res) => {
  const { url } = req.body;

  const readableStream = ytdlCore(url, { filter: 'audioonly' });
  const info = await ytdlCore.getInfo(url);
  const fileName = `${encodeURIComponent(
    info.videoDetails.title
  )}-${Date.now()}-output.mp3`;

  const writableStream = fs.createWriteStream(
    path.resolve('..', 'uploads', fileName)
  );

  const stream = readableStream.pipe(writableStream);

  stream.on('finish', () => {
    res.json({
      status: 'success',
      data: {
        downloadLink: `/download/${fileName}`,
      },
    });
  });
});

//routing
app.use('/api', apiRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log('The server is now listening for incoming requests!');
});
