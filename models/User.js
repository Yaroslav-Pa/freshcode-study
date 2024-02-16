let users = [{ id: 0, email: 'test@test', password: '1212321' }];

class User {
  static async create(data) {
    const newUser = { ...data };

    newUser.id = users.length;
    newUser.createdAt = new Date();

    users.push(newUser);
    return newUser;
  }
  static async findAll() {
    return users;
  }
  static async findOne(id) {
    const user = users.find((user) => user.id === id);
    return user;
  }
  static async update(id, newUserData) {
    users = users.map((user) => {
      if (user.id !== id) {
        return user;
      }

      const updatedUser = { ...user, ...newUserData };
      return updatedUser;
    });

    const updatedUser = await User.findOne(id);

    return updatedUser;
  }
}

module.exports = User;
