const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//http server
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(cors());

//Database Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("DB Connection Error:", err));

// routes

const operatingSiteRoute = require("./routes/OperatingSiteRoute");
app.use("/operatingSite", operatingSiteRoute);

const peaksnDeadlinesRoute = require("./routes/PeaksnDeadlineRoute");
app.use("/peaksnDeadline", peaksnDeadlinesRoute);


//start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});