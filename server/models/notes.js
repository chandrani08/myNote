const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const notesSchema = new Schema({
    username: String,
    title: String,
    content: String,
    tags: [String],//},
    //{timestamps: true
    date_created: { type:Date,default: Date.now }
    

});


module.exports = mongoose.model('note',notesSchema, 'notes'); 