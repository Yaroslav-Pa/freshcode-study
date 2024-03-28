// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// запуск виділених команд - ctrl + alt + s

// ! create {Create}
// ! one
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


// ! many
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

db.inventory.insertMany([
  { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);




// ! find (SELECT) {Read}

// * db.inventory.find(<querry>, <projection>, <options>);
// * querry - selection filter
// * projection - specifies the fields to return 
// * options - additional options  

// ? Query Selectors
// https://www.mongodb.com/docs/v6.0/reference/operator/query/#std-label-query-selectors

// ! всі записи
db.inventory.find();


// ! вибірка деякіх записів

// ? status === D
db.inventory.find({
  status: "D"
});

// ? qty < 60
db.inventory.find({
  qty: { $lt : 60 }
});

// ?qty >= 50 && status === D 
// * v1
db.inventory.find({
  qty: { $gte : 50 },
  status: 'D'
});
// * v2
db.inventory.find({
  $and:[{qty: { $gte : 50 }}, {status: 'D'}]
});

// ? qty >= 50 || status === D 
db.inventory.find({
  $or:[{qty: { $gte : 50 }}, {status: 'D'}]
});

// ? звернення до властивостей об'єкта/масива
// ? size: { ..., uom === "cm" }
db.inventory.find({
  "size.uom": 'cm'
});


// ! вибірка лише тих що мають [поле]
db.users.find({
  email: { $exists:true }
});