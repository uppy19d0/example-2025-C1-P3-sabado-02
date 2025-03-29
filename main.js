const axios = require("axios");

//consumir el endpoint de ejemplo
const URL = process.env.BACKEND_URL;
const users = axios.get(`${URL}).catch((error){
console.log("ERROR");
});


console.log(`{JSON.stringify(users)});


