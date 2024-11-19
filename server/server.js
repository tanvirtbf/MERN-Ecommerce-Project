const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRouter = require('./routes/auth/auth-routes')

// create a database connection
mongoose
  .connect(
    "mongodb+srv://tanver_tbf:cvFxTExB5IjBBcPS@cluster0.nsurs.mongodb.net/"
  )
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:5173/',
    methods: ['GET','POST','DELETE','PUT'],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma"
    ],
    credentials: true,
  })
)

app.use(cookieParser())

app.use(express.json())

app.use('/api/auth', authRouter)

// Run Server
app.listen(PORT, ()=> {
  console.log(`Server Running on ${PORT}`)
})
