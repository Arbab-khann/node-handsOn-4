const express = require("express");
const app = express();

const route = require("./userlogin/authentication");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/user", route);

app.listen(5050, async () => {
  try {
    // await connection();
    console.log("server started............");
  } catch (err) {
    console.log(`${err} in server connection`);
  }
});
