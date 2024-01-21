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

// Getter method to format the timestamp on query
// thoughtSchema.virtual('formattedCreatedAt').get(function () {
//   return this.createdAt.toISOString(); // Adjust the formatting as needed
// });


// Create a virtual property `responses` that gets the amount of response per video
// videoSchema
//   .virtual('getResponses')
//   // Getter
//   .get(function () {
//     return this.responses.length;
//   });

// Initialize our Video model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
