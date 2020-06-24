const express = require('express');

const hobbitsRouter = require("./hobbits/hobbitsRouter.js");

const server = express();

server.use(express.json());

server.use('/hobbits', hobbitsRouter);


module.exports = server;