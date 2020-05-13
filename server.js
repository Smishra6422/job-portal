const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const adminRoutes = require("./routes/admin");
const jobRoutes = require("./routes/job");
const path = require("path");

const app = express();

const port = process.env.PORT || 5002;

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI =
  "mongodb+srv://taskapp:MishrA6422@cluster0-fivla.mongodb.net/job";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MONGODB CONNECTED"))
  .catch((err) => console.log(err));

app.use("/admin", adminRoutes);
app.use("/user", jobRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is up and running at ${port}`);
});
