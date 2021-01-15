require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

const server = app.listen(process.env.PORT, () => {
    console.log(`Express running on PORT ${server.address().port}`);
});
