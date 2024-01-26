const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { thoughtData, userData } = require('./data');
const { Types } = require('mongoose');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the though collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  // Delete the user collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  // Insert all users from the userData
  let userResult = await User.collection.insertMany(userData);
  // Get the inserted ids of the users
  let userInsertedIds = Object.values(userResult.insertedIds);
  
  // Insert all thoughts from the thoughtData
  thoughtData.forEach(thought => {
    thought.createdAt = new Date();
    thought.reactions.forEach(reaction => {
      reaction.reactionId = new Types.ObjectId();
      reaction.createdAt = new Date();
    })
  });

  let thoughtResult = await Thought.collection.insertMany(thoughtData);
  // Get the inserted ids of the thoughts
  let thoughtInsertedIds = Object.values(thoughtResult.insertedIds);

  for (let id of userInsertedIds) {
    const user = await User.findById(id);

    user.friends = getRandomFriends(user, userInsertedIds);
    user.thoughts = getRandomThoughts(thoughtInsertedIds, 2);
    
    await user.save();
  }

  console.info('Seeding complete! 🌱');
  process.exit(0);
});

const getRandomFriends = (user, insertedIds) => {
  const friends = [];
  // Filter the insertedIds to not have the current user's id
  const filteredUserIds = insertedIds.filter((id, i) => id.toString() !== user._id.toString());

  // Find two random users to add as friends
  for (let i=0; i<3; i++) {
      friends.push(filteredUserIds[Math.floor(Math.random() * filteredUserIds.length)]);
  }

  return friends;
}

const getRandomThoughts = (thoughtInsertedIds, count) => {
    const thoughts = [];
    // Find random thoughts to add to the user
    for (let i=0; i<count; i++) {
        thoughts.push(thoughtInsertedIds[Math.floor(Math.random() * thoughtInsertedIds.length)]);
    }
    return thoughts;
  }

  
