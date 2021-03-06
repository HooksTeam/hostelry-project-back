// TODO model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  done: { type: Boolean, default: false },
  dueDate: { type: Date, default: Date.now() },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  priority: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
})

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;