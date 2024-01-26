const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique:true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
      validate: {
        validator: function (value) {
          return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(value);
        },
        message: 'Invalid email format',
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought', // Assuming 'thought' is the name of the referenced model
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user', // Self-reference to User model
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
  
  // Create a virtual called friendCount
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
