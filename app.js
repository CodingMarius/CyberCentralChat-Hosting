const express = require("express");
const history = require("connect-history-api-fallback");

const path = __dirname + "/app";

const app = express();
app.use(history());
app.use(express.static(path));


app.get("/", (req, res) => {
    res.sendFile('./app/index.html');
});

// set port, listen for requests
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});