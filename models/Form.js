const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,

}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
