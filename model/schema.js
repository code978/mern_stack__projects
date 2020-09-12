const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name:{
    type:String
  },
  birthday:{
    type:Date
  },
  country:{
    type:String
  },
  file:{
    data:Buffer,
    contenttype:String
  }
})

module.exports = mongoose.model('person',personSchema)