/**
* @type {mongoose.SchemaDefinitionProperty}
*/
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type:String, required: true, unique:true}, 
    email : { type:String, required:true, unique:true},
    mobile : { type:String, required:true, unique:true},   
    password:{ type:String, required: true},       
    isActive: {type: Boolean, default: true},
    dateCreated:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('user', userSchema);