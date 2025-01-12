const users = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Anna', age: 24 },
  ];
  
  const getUsers = (req, res) => {
    res.json(users);
  };
  
  const createUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  module.exports = {
    getUsers,
    createUser
  };
  