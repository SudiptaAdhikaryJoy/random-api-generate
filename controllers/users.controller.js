let users = [
    { id: 1, 'gender': 'male', 'name': 'watson', 'contact': '+8801234', 'address': 'italy', 'photourl': ''},
    { id: 2, 'gender': 'female', 'name': 'merry', 'contact': '+8801234', 'address': 'france', 'photourl': ''},
    { id: 3, 'gender': 'male', 'name': 'john', 'contact': '+8801234', 'address': 'dhaka', 'photourl': ''},
    { id: 4, 'gender': 'male', 'name': 'harris', 'contact': '+8801234', 'address': 'england', 'photourl': ''},
    { id: 5, 'gender': 'male', 'name': 'pk', 'contact': '+8801235', 'address': 'pakistan', 'photourl': ''},
    { id: 6, 'gender': 'male', 'name': 'sk', 'contact': '+8801232', 'address': 'India', 'photourl': ''},
    { id: 7, 'gender': 'male', 'name': 'borris', 'contact': '+88671234', 'address': 'dhaka', 'photourl': ''},
    { id: 8, 'gender': 'male', 'name': 'johnson', 'contact': '+88111234', 'address': 'germany', 'photourl': ''},
    { id: 9, 'gender': 'male', 'name': 'russel', 'contact': '+88018434', 'address': 'usa', 'photourl': ''},
    { id: 10, 'gender': 'female', 'name': 'emma', 'contact': '+88024634', 'address': 'sydney', 'photourl': ''},
    { id: 11, 'gender': 'female', 'name': 'sheme', 'contact': '+8835634', 'address': 'cumilla', 'photourl': ''},
];



module.exports.getAllUsers = (req, res, next)=>{
    const {limit, page} = req.query;

    res.json(users.slice(0, limit));
}

module.exports.saveUsers = (req, res) => {
    users.push(req.body);
    res.send(users);
}

module.exports.getUserDetails = (req, res) => {
    const {id} = req.params;
    // console.log(id);
    if( foundUser = users.find(user => user.id === Number(id))){

        res.status(200).send({
            success: true,
            message: 'Success',
            data: foundUser,
        })
    } else{
        res.status(500).send({
            success: false,
            error: 'Internal server error'
        })
    }

}

module.exports.updateUser = (req, res)=>{
    const {id} = req.params;

    const newUser = users.find(user => user.id === Number(id));
    newUser.id = id;
    newUser.name = req.body.name;

    res.send(newUser);
}

module.exports.deleteUser = (req, res) => {
    const {id} = req.params;

    users = users.filter(user => user.id !== Number(id));
    res.send(users);
}