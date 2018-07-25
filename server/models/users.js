const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: String,
    first_name: String,
    last_name: String,
    
});

module.exports = mongoose.model('user',usersSchema, 'users'); //mongoose.model creates a model
                                                             //arg1:name of model is user
                                                             //arg2:model will represent a usersSchema
                                                             //arg3:name of collection in database
                                                             //model.exports: because it will be used elsewhere