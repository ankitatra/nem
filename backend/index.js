const express = require("express");
const cors = require("cors");

const { connection } = require("./config/db");
const { socialuserRouter } = require("./routes/socialmediauser.routes");
const {socialpostRouter}=require("./routes/socialmediapost.routes")
const { socialauthenticate}=require("./middleware/authenticate.middleware")
const app = express();
require("dotenv").config();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.use("/user", socialuserRouter);
app.use(socialauthenticate)
app.use("/post", socialpostRouter);
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("db is running");
  } catch (error) {
    console.log(error);
  }
  console.log(`port is running ${process.env.port}`);
});
