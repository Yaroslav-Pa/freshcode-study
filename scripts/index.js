const { Client } = require('pg');
const fs = require('fs/promises');
const { getUsers } = require('../api');
const { mapUsers } = require('../utils/userUtils');
const { user, password, host, port, database } = require('../config/db.json');

const config = {
  user,
  password,
  host,
  port,
  database,
};

const client = new Client(config);

async function start() {
  const users = await getUsers();

  await client.connect();

  const resetQuery = await fs.readFile(`${__dirname}/sql/reset.sql`, 'utf-8');

  await client.query(resetQuery);

  const result = await client.query(`INSERT INTO users (
    "first_name",
    "last_name",
    "email",
    "is_male",
    "balance",
    "height",
    "weight",
    "comments",
    "birthday"
  )
  VALUES
  ${mapUsers(users)}
  RETURNING *;`);
  // користувачі
  console.log(result.rows);

  await client.end();
}

start();
