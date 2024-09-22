const friends = require('../models/friends');

// Find all friends
exports.getAllFriends = (req, res) => {
    res.json(friends);
};


// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter
exports.filterFriends = (req, res) => {
  const filterGender = req.query.gender;
  const filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
      matchingFriends = matchingFriends.filter(friend => friend.gender === filterGender);
  }

  if (filterLetter) {
      matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(filterLetter));
  }

  if (matchingFriends.length > 0) {
      res.status(200).json(matchingFriends);
  } else {
      res.status(404).json({ error: "No friends found" });
  }
};


// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

exports.getInfo = (req, res) => {
  const userAgent = req.headers['user-agent'];
  const contentType = req.headers['content-type'];
  const accept = req.headers['accept'];

  res.json({
      'user-agent': userAgent,
      'content-type': contentType,
      'accept': accept
  });
};


// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter
exports.getFriendById = (req, res) => {
  const friendId = parseInt(req.params.id, 10);
  const friend = friends.find(friend => friend.id === friendId);

  if (friend) {
      res.status(200).json(friend);
  } else {
      res.status(404).json({ error: `Friend with ID ${friendId} not found` });
  }
};


// TODO - #4: Complete the PUT route which will update data for an existing friend
// Get a single friend by ID
exports.getFriendById = (req, res) => {
  const friendId = parseInt(req.params.id, 10);
  const friend = friends.find(friend => friend.id === friendId);

  if (friend) {
      res.status(200).json(friend);
  } else {
      res.status(404).json({ error: `Friend with ID ${friendId} not found` });
  }
};

// Add a new friend
exports.addFriend = (req, res) => {
  const newFriend = req.body;

  if (!newFriend.name || !newFriend.gender) {
      return res.status(400).json({ error: 'Name and gender are required' });
  }

  newFriend.id = friends.length + 1;
  friends.push(newFriend);

  res.status(201).json(newFriend);
};


// Update an existing friend by ID
exports.updateFriend = (req, res) => {
  const friendId = parseInt(req.params.id, 10);
  const friendIndex = friends.findIndex(friend => friend.id === friendId);

  if (friendIndex !== -1) {
      friends[friendIndex] = { ...friends[friendIndex], ...req.body };
      res.status(200).json(friends[friendIndex]);
  } else {
      res.status(404).json({ error: `Friend with ID ${friendId} not found` });
  }
};