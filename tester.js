var fetch = require("node-fetch");

const getData = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

getData('http://localhost:3000/api/users');

user = {
    id: 10, name: "aaa"
}

const { id, name } = user
console.log(id)
console.log(name)