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



server.get('/', (req, res) => {
    res.send("Express'ten Merhaba!!");
});

const PORT = process.env.PORT || 3000;


server.use(errorHandling);
server.listen(process.env.PORT, () => {
    console.log("http://localhost:5000 adresinde server calisiyor...");
});
