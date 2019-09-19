const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.json());

require('./server/routes')(app);

app.listen(port, (err) => {
    console.log(`Listening to port ${port}.`);
})