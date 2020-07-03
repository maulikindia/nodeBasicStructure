let config = require('../config/db');
let userModel = require('../models/user');

//-------------------------------------business logic------------------------------------

//add user func to add /new user
async function addUser(req, res) {
    let bodyData = req.body;
    await userModel.create(bodyData, async (err, data) => {
        if (err) {
            return res.json({ status: false, msg: err, data: [] });
        }
        else if (data !== null) {
            return res.json({ status: true, msg: '', data: data });
        }

    });

};


//get user func to get all users
async function getUsers(req, res) {
    await userModel.find({}, async (err, data) => {
        if (err) {
            return res.json({ status: false, msg: err, data: [] });
        }
        else if (data !== null) {
            console.log(data);
            return res.json({ status: true, msg: '', data: data });
        }
    });
};

//get user by id func to fetch user by passing id
async function getUserById(req, res) {
    await userModel.findOne({ _id: req.query.id }, async (err, data) => {
        if (err) {
            return res.json({ status: false, msg: err, data: [] });
        }
        else if (data !== null) {
            return res.json({ status: true, msg: '', data: data });
        }
    });

};


module.exports = { addUser, getUsers, getUserById };