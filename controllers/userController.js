const { User } = require('../db/models');
const { Op } = require('sequelize');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    // створення 1 запису (INSERT INTO)
    const user = await User.create(body);

    // стрворення декількох записів одночасно
    /*
      const users = await User.bulkCreate([
        userData1,
        userData2,
      ]);
    */

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const { user } = req;

    // const users = await User.findAll({
    //   where: {
    //     id: userId
    //   }
    // });
    // const [user] = users;

    // пошук 1 запису по первинному ключу
    // const user = await User.findByPk(userId, {
    //   attributes: {
    //     exclude: ['password'],
    //   },
    // });

    // пошук 1 запису якій проходить перевірку
    // const user = await User.findOne({
    //   where: {
    //     id: userId
    //   },
    //   attributes : {
    //     exclude: ['password']
    //   }
    // });

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    // параметри запиту урли (все після ?) знаходяться у query
    const {
      pagination: { limit, offset },
      pagination,
    } = req;

    /*
      SELECT * FROM users;
    */
    // const users = await User.findAll();

    /*
      SELECT * FROM users LIMIT x OFFSET y;
    */
    const users = await User.findAll({
      ...pagination,
    });

    /*
      SELECT firstName, lastName, email, balance FROM users;
    */
    // const users = await User.findAll({
    //   attributes: ['firstName', 'lastName', 'email', 'balance'],
    // });

    /*
      SELECT firstName, lastName, email as Пошта, balance FROM users;
    */
    // const users = await User.findAll({
    //   attributes: ['firstName', 'lastName', ['email', 'Пошта'], 'balance'],
    // });

    /*
      SELECT * але без паролю  FROM users;
    */

    // const users = await User.findAll({
    //   attributes: {
    //     exclude: ['password']
    //   },
    // });

    /*
      SELECT * FROM users WHERE last_name = 'Doe';
    */
    // const users = await User.findAll({
    //   where: {
    //     lastName: 'Doe',
    //   },
    // });

    /*
      SELECT * FROM users WHERE first_name = 'Test' AND id > 1;
    */
    // const users = await User.findAll({
    //   where: {
    //     // firstName: 'Test',
    //     // id: {
    //     //   [Op.gt]: 1
    //     // } ,
    //     [Op.and]: [{ firstName: 'Test' }, { id: { [Op.gt]: 1 } }],
    //   },
    // });

    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const { body, user } = req;

    /*
      UPDATE users SET last_name = 'iusdfkhdsfbdsh' WHERE id = 1;
    */

    // v1 через модель
    // const [updatedRows, [updatedUser]] = await User.update(body, {
    //   where: {
    //     id: userId,
    //   },
    //   // RETURNING *
    //   returning: true,
    //   // RETURNING first_name, last_name
    //   // returning: ['firstName', 'lastName']
    // });

    // v2 через екземпляр
    // const user = await User.findByPk(userId);

    const updatedUser = await user.update(body, {
      returning: true,
    });

    res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const { user } = req;

    /*
      DELETE FROM users WHERE id = userId;
    */
    // v1 видалення через модель
    // await User.destroy({
    //   where: {
    //     id: userId,
    //   },
    // });

    // v2 видалення конкретного екземпляру
    // const deletedUser = await User.findByPk(userId);

    // if (!deletedUser) {
    //   throw new Error('User not found');
    // }

    await user.destroy();

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.addPicture = async (req, res, next) => {
  try {
    const { body, user, file } = req;

    /*
    
      "file": {
            "fieldname": "picture",
            "originalname": "cat.webp",
            "encoding": "7bit",
            "mimetype": "image/webp",
            "destination": "/home/work/Documents/fc/2023/PFE-2023-1/lessons/pfe-2023-1-sequelize/public/images",
            "filename": "1710873878656-cat.webp",
            "path": "/home/work/Documents/fc/2023/PFE-2023-1/lessons/pfe-2023-1-sequelize/public/images/1710873878656-cat.webp",
            "size": 592494
        }
    */

    const updatedUser = await user.update(
      { picturePath: file.filename },
      { returning: true }
    );

    res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};
