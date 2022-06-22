const UserComponent = require('../components/user/controller');

module.exports = {
  init(app) {
    app.get('/v1/user', UserComponent.findUser);

    app.post('/v1/user', UserComponent.createUser);

    app.patch('/v1/user', UserComponent.updateUser);

    app.delete('/v1/user', UserComponent.deleteUser);
  },
};
