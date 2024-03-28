// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// запуск виділених команд - ctrl + alt + s

// create
// one
db.users.insertOne({
  firstName: 'fistname',
  lastName: 'User',
  email: 'user@gmail',
  isMale: false,
  height: 1.91,
  birthday: new Date(1990, 5, 10),
  address: {
    sity: 'Zaporizhzha',
    country: 'Ukr',
  },
});
db.users.insertOne({
  fullName: 'Jo',
  gender: 'male',
  height: 1.91,
  weight: 85,
  birthday: new Date(1990, 5, 10),
  constacts: {
    address: {
      sity: 'Zaporizhzha',
      country: 'Ukr',
    },
    email: 'user@gmail',
    phone: '+3809262504154',
  },
});
// many
db.users.insertMany([
  {
    fullName: 'Jo1',
    weight: 85,
    deliveryAdress: [
      {
        sity: 'Zaporizhzha',
        country: 'Ukr',
      },
      {
        sity: 'Zaporizhzha2',
        country: 'Jo',
      },
    ],
  },
  {
    fullName: 'Jo2',
    weight: 88,
    deliveryAdress: [
      {
        sity: 'Zaporizhzha',
        country: 'Ukr',
      },
      {
        sity: 'Zaporizhzha2',
        country: 'Jo',
      },
    ],
  },
]);
