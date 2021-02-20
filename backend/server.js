const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const student = require("./routes/hostel");

mongoose
  .connect("mongodb://localhost/hostel", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB!", err));

app.use(cors());
app.use(express.json());
app.use("/hostel", student);

app.listen(5000, () => console.log("Listening to port 5000"));
