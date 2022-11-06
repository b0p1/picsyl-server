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

// User's Posts route
const postsRoutes = require("./routes/posts");
app.use("/posts", postsRoutes);

// Comment route
const commentsRoutes = require("./routes/comments");
app.use("/comments", commentsRoutes);

// Likes route
const likesRoutes = require("./routes/likes");
app.use("/likes", likesRoutes);

// // Users route
const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
