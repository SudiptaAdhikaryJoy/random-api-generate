// let users = [
//     { id: 1, 'gender': 'male', 'name': 'watson', 'contact': '+8801234', 'address': 'italy', 'photourl': 'https://www.pexels.com/photo/man-smiling-behind-wall-220453/'},
//     { id: 2, 'gender': 'female', 'name': 'merry', 'contact': '+8801234', 'address': 'france', 'photourl': 'https://www.pexels.com/photo/portrait-photo-of-smiling-man-with-his-arms-crossed-standing-in-front-of-white-wall-2379004/'},
//     { id: 3, 'gender': 'male', 'name': 'john', 'contact': '+8801234', 'address': 'dhaka', 'photourl': 'https://www.pexels.com/photo/man-in-white-dress-shirt-holding-suit-jacket-1043474/'},
//     { id: 4, 'gender': 'male', 'name': 'harris', 'contact': '+8801234', 'address': 'england', 'photourl': 'https://www.pexels.com/photo/man-standing-near-building-white-black-turtleneck-shirt-874158/'},
//     { id: 5, 'gender': 'male', 'name': 'pk', 'contact': '+8801235', 'address': 'pakistan', 'photourl': 'https://www.pexels.com/photo/man-in-brown-polo-shirt-614810/'},
//     { id: 6, 'gender': 'male', 'name': 'sk', 'contact': '+8801232', 'address': 'India', 'photourl': 'https://www.pexels.com/photo/man-wearing-white-dress-shirt-and-black-necktie-716411/'},
//     { id: 7, 'gender': 'male', 'name': 'borris', 'contact': '+88671234', 'address': 'dhaka', 'photourl': 'https://www.pexels.com/photo/man-wearing-gray-and-red-crew-neck-shirt-smiling-1121796/'},
//     { id: 8, 'gender': 'male', 'name': 'johnson', 'contact': '+88111234', 'address': 'germany', 'photourl': 'https://www.pexels.com/photo/man-on-gray-shirt-portrait-91227/'},
//     { id: 9, 'gender': 'male', 'name': 'russel', 'contact': '+88018434', 'address': 'usa', 'photourl': 'https://www.pexels.com/photo/man-in-white-v-neck-t-shirt-and-black-pants-775358/'},
//     { id: 10, 'gender': 'female', 'name': 'emma', 'contact': '+88024634', 'address': 'sydney', 'photourl': 'https://www.pexels.com/photo/man-wearing-white-dress-shirt-and-black-blazer-2182970/'},
//     { id: 11, 'gender': 'female', 'name': 'sheme', 'contact': '+8835634', 'address': 'cumilla', 'photourl': 'https://www.pexels.com/photo/man-sitting-on-chair-beside-table-834863/'},
// ];

let users = require('../users.json');

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

};

module.exports.updateUser = (req, res)=>{
    const {id} = req.params;

    const newUser = users.find(user => user.id === Number(id));
    newUser.id = id;
    newUser.name = req.body.name;
    newUser.contact = req.body.contact;

    res.send(newUser);
}

module.exports.deleteUser = (req, res) => {
    const {id} = req.params;

    if(users = users.filter(user => user.id !== Number(id))){
        res.status(200).send({
            success: true,
            message: 'Success',
            data: users,
        });
    }
    else if (users = users.filter(user => user.id !== id)){
        res.status(401).send({
            success: false,
            message: 'Unauthorized',
            error: "Invalid Id",
            data: users,
        });
    }
}