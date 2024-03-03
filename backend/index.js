const express = require('express');
require('dotenv').config();
const cors = require('cors')
const rootRouter = require("./routes/index")
const userRouter = require("./routes/user")

const PORT = process.env.PORT;
const app = express();

app.use(cors())
app.use(express.json())


app.use("/api/v1", rootRouter);
app.use("/api/v1/user")



app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server listening on Port", PORT)
})





