// require("dotenv").config();
const express = require('express');
const connectdb = require('./db/conn');
// const student = require('./models/StudentSchema')
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());
app.use(require('./routes/DealsRouter'));
app.use(require('./routes/router'));
app.use(require("./routes/dropdownRouter"))
app.use(require("./routes/userRouter"))

//Connect to database
connectdb()

app.get('/', (req, res) => res.send("Jai Shree ram"))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is start port number ${port}`))