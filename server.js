const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

app.get("/", (_req, res) => {
  res.send("Hello PICSYL");
});

// User's Posts routes
const postsRoutes = require("./routes/posts");
app.use("/posts", postsRoutes);

// // User routes
const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});


