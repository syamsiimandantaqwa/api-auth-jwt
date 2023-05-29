const express = require("express");
const app = express();
const dotenv = require("dotenv")
const cors = require("cors")

const router = require("./routes/index.js");


dotenv.config();

// middleware
app.use(express.json());
app.use(cors({ origin: "localhost" }))
app.use(router);


app.listen(process.env.PORT, () => console.log("server berjalan di port 5000"))