const fs = require("fs");
const faker = require("faker");

const name = faker.internet.userName();

function createUser() {
  const result = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    followers: Math.floor(Math.random() * 300),
    following: Math.floor(Math.random() * 300),
  };

  return result;
}

function generateUsers() {
  let result = [];

  for (let i = 0; i <= 100; i++) {
    result.push(createUser());
  }

  return result;
}

fs.writeFile(
  "../assets/users.json",
  JSON.stringify(generateUsers()),
  (error) => {
    if (error) return console.error(error);
    console.log("Users generated and written to assets/users.json");
  }
);
