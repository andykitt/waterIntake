const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  dayIntakeAmount: {
    type: Number,
    required: true
  },
  target: {
    type: Number,
    required: false
  },
  logs: {
    timestamp: { type: Number },
    amount: { type: Number }
  }
});

module.exports = Data = mongoose.model('data', DataSchema);
