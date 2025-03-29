const axios = require("axios");

//consumir el endpoint de ejemplo
const URL = "localhost:3000/users";
const users = axios.get(`${URL}).catch((error){
console.log("ERROR");
});


console.log(`{JSON.stringify(users)});


