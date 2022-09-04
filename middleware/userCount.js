let count = 0;

const userCount = (req, res, next) => {
    count++;

    console.log(count);
    // res.send("user found");
    next();
}

module.exports = userCount;