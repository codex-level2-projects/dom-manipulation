"use strict";

const user = {
  name: "Bob",
  age: "33",
  email: "mail@email.com",
};

const stringData = JSON.stringify(user)
console.log(stringData)


const parsedUser = JSON.parse(stringData)
console.log(parsedUser)