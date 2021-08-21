const express = require('express');
const app = express();
const router = require('./controller/registerPassword')
app.use(router);

app.listen(40000, () => {
  console.log("app listening at ", 40000)
});
