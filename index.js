const express = require('express');
const cors = require('cors');
require('dotenv').config();
const usersRoutes = require("./routes/v1/users.route");
const userCount = require('./middleware/userCount');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 6005;

app.use(cors());
app.use(express.json());
app.use(userCount);

app.use("/user/all", usersRoutes);
app.use("/user", usersRoutes);
app.use("/update", usersRoutes);
app.use("/delete", usersRoutes);
// app.use(limiter)
app.use(errorHandler);

app.all("*", (req, res)=>{
    res.status(400).send('Bad request');
})

app.get('/', (req, res)=>{
    res.send("Running server");
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});

process.on('unhandledRejection', (error)=>{
    console.log(error.name, error.message);
    app.close(()=>{
        process.exit(1);
    });
} )