const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
//Load Environment Variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Wellcome to my server");
});
app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`);
});
