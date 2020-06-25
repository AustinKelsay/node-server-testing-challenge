const express = require('express');

const hobbitsRouter = require("./hobbits/hobbitsRouter.js");

const server = express();

server.use(express.json());

server.use('/hobbits', hobbitsRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
})

module.exports = server;