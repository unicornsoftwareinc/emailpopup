const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  headline: String,
  buttonText: String,
  backgroundColor: String,
  headlineColor: String,
  buttonColor: String,
  emails: Array

}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
