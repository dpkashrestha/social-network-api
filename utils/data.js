
const thoughtData = [
    {
      thoughtText: 'This is the first thought.',
      username: 'user1',
      reactions: [
        { username: 'user2', reactionBody: 'Nice!' },
        { username: 'user3', reactionBody: 'Interesting.' },
      ],
    },
    {
      thoughtText: 'Second thought here.',
      username: 'user2',
      reactions: [
        { username: 'user1', reactionBody: 'Agree!' },
        { username: 'user3', reactionBody: 'Disagree.' },
      ],
    },
    {
      thoughtText: 'Another thought for variety.',
      username: 'user3',
      reactions: [
        { username: 'user1', reactionBody: 'Cool!' },
        { username: 'user2', reactionBody: 'Meh.' },
      ],
    },
    {
      thoughtText: 'Thought number four.',
      username: 'user4',
      reactions: [
        { username: 'user1', reactionBody: 'Interesting.' },
        { username: 'user2', reactionBody: 'Disagree.' },
      ],
    },
    {
      thoughtText: 'Fifth thought.',
      username: 'user5',
      reactions: [
        { username: 'user1', reactionBody: 'Great!' },
        { username: 'user2', reactionBody: 'Not bad.' },
      ],
    },
    {
      thoughtText: 'A different thought for variety.',
      username: 'user6',
      reactions: [
        { username: 'user4', reactionBody: 'Interesting.' },
        { username: 'user5', reactionBody: 'Agree!' },
      ],
    },
  ];

  const userData = [
    {
      username: 'user1',
      email: 'user1@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'user2',
      email: 'user2@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'user3',
      email: 'user3@example.com',
      thoughts: [],
      friends: [], 
    },
    {
      username: 'user4',
      email: 'user4@example.com',
      thoughts: [],
      friends: [], 
    },
    {
      username: 'user5',
      email: 'user5@example.com',
      thoughts: [],
      friends: [], 
    },
    {
      username: 'user6',
      email: 'user6@example.com',
      thoughts: [],
      friends: [], 
    },
  ];

  module.exports = { thoughtData, userData };