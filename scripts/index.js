const { Client } = require('pg');
const config = {
  user: 'postgres',
  password: '1',
  host: 'localhost',
  database: 'mylessons',
  port: 5432,
};
const client = new Client(config);
const start = async () => {
  await client.connect();

  const result = await client.query('SELECT * FROM users;');
  console.log(result);

  await client.end();
};
start();
