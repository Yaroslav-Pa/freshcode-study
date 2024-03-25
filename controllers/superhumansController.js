const { Superhuman, Superpower, Image } = require('../db/models');
module.exports.getSuperhumans = async (req, res, next) => {
  try {
    const superhumans = await Superhuman.findAll({
      include: [
        {
          model: Superpower,
          attributes: { exclude: ['updatedAt', 'createdAt', 'superhumanId'] },
        },
        {
          model: Image,
          through: { attributes: [] },
          attributes: { exclude: ['updatedAt', 'createdAt'] },
        },
      ],
    });
    res.status(200).send({ data: superhumans });
  } catch (error) {
    next(error.message);
  }
};

module.exports.getSuperhuman = async (req, res, next) => {
  try {
    const { superhuman } = req;
    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.createSuperhuman = async (req, res, next) => {
  try {
    const {
      body: { powerName, powerDescription, ...superhumanData },
      file,
    } = req;
    const superhuman = await Superhuman.create(superhumanData);
    let superpower, image;
    if (powerName || powerDescription) {
      superpower = await superhuman.createSuperpower({
        powerName,
        powerDescription,
      });
    }
    if (file) {
      image = await superhuman.createImage({
        imageSrc: file.filename,
      });
    }

    const newSuperhuman = {
      ...superhumanData,
      Superpowers:superpower,
      Images:image,
    };

    res.status(201).send({ data: newSuperhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSuperhuman = async (req, res, next) => {
  try {
    const { superhuman, body } = req;
    const updatedSuperhuman = await superhuman.update(body, {
      returning: true,
    });
    res.status(200).send({ data: updatedSuperhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperhuman = async (req, res, next) => {
  try {
    const { superhuman } = req;
    await superhuman.destroy();
    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error);
  }
};

module.exports.addPicture = async (req, res, next) => {
  try {
    const { superhuman, file } = req;

    await superhuman.createImage({
      imageSrc: file.filename,
    });

    res.status(200).send({ data: superhuman });
  } catch (error) {
    next(error.message);
  }
};
module.exports.getPictures = async (req, res, next) => {
  try {
    const { superhuman } = req;
    const pictures = await superhuman.getImages();
    res.status(200).send({ data: pictures });
  } catch (error) {
    next(error.message);
  }
};
