const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function() {
      return this.createdAt.toISOString();
    }
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], // Array of nested reaction documents
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize our Video model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
