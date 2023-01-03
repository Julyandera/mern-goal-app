const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
  text: {
    type: String,
    requires: [true, 'Please add text!']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)