let users = [];

module.exports = {

  findAll() {
    return new Promise((res) => {
      res(users);
    });
  },

  findUser(email) {
    return new Promise((res) => {
      const user = users.find((item) => item.email === email);
      if (user === undefined) {
        res(`User from email: ${email} not found`);
      }
      res(user);
    });
  },

  createUser(newUser) {
    return new Promise((res) => {
      users.push(newUser);
      res('User is added to the database');
    });
  },

  updateAll(newName) {
    return new Promise((res) => {
      users.forEach((user, index, array) => {
        if (user.name !== newName) {
          const newUser = {
            email: user.email,
            name: newName,
          };
          array.splice(index, 1, newUser);
        }
        res('User is updated');
      });
    });
  },

  deleteUser(email) {
    return new Promise((res) => {
      if (email) {
        users = users.filter((user) => user.email !== email);
        res('User is deleted');
      }
    });
  },

};
