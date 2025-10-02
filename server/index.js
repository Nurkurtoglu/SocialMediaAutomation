const express = require('express');
const server = express();
const mediaAutomationRouter = require("./routers/mediaAutomationRouter");
const logger = require('./middleware/logger');
const errorHandling = require('./middleware/errorHandling');
const cors = require("cors")
const dotenv = require("dotenv")


server.use(logger);
server.use(express.json());
server.use(cors());
dotenv.config();
server.use("/media", mediaAutomationRouter);

const API_URL = process.env.API_URL;

server.get('/', (req, res) => {
    res.send("Express'ten Merhaba!!");
});

const PORT = process.env.PORT || 3000;


server.use(errorHandling);
server.listen(process.env.PORT, () => {
    console.log(`${API_URL} adresinde server calisiyor...`);
});
