const express = require('express');
const app = express();

app.listen(process.env.PORT || 8080, () => {
  console.log('The server is now listening for incoming requests!');
});
