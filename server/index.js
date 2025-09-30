const express = require('express');
const server = express();
const mediaAutomationRouter = require("./routers/mediaAutomationRouter");
const logger = require('./middleware/logger');
const errorHandling = require('./middleware/errorHandling');
const cors = require("cors")

server.use(logger);
server.use(express.json());
server.use(cors());

server.use("/media", mediaAutomationRouter);



server.get('/', (req, res) => {
    res.send("Express'ten Merhaba!!");
});



server.use(errorHandling);
server.listen(5000, () => {
    console.log("http://localhost:5000 adresinde server calisiyor...");
});
