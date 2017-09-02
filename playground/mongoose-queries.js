const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '59aa5b6741815890b2b63f71';

if (! ObjectID.isValid(id)) {
    console.log("id not valid");
}

User.findById(id).then((user) => {
    if(!user){
        return console.log("user not found");      
    }
    console.log("User given the id: ", user);
}).catch((e) => {
    return console.log("Error finding id: ", e);
});
