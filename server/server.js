const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const apiRouter = require('./routes/apiRoutes');

//Request logging
app.use(morgan('dev'));

//Serve react build folder
app.use(express.static(path.resolve('..', 'client', 'build')));

//routing
app.use('/api', apiRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log('The server is now listening for incoming requests!');
});
