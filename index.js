const express = require('express');
const cors = require('cors');
require('dotenv').config();
const usersRoutes = require("./routes/v1/users.route");

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);


app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});