const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const adminRoutes = require("./routes/admin");
const jobRoutes = require("./routes/job");

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

app.use(adminRoutes);
app.use(jobRoutes);

app.listen(port, () => {
  console.log(`Server is up and running at ${port}`);
});
