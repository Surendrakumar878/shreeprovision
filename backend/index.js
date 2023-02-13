const express = require("express");
const app = express();
app.use(express.json());
const { connection } = require("./config/db");
const {authenticate}=require("./middleware/authorization.middleware")
const {userRouter}=require("./routes/user.route")
app.get("/", (req, res) => {
  res.send("get route");
});
app.use(userRouter)
app.use(authenticate)
app.listen(4000, async () => {
  try {
    await connection;
    console.log("connection to db succesfully");
  } catch (err) {
    console.log(err);
    console.log("error in connecting db");
  }
  console.log(`listen to ${400} successfully`);
});
