import validator from 'validator';
const isEmpty = require("is-empty");

//form validation logic
module.exports = function UpDateInput(data) {
  

  //convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.userName) ? data.userName : "";
  data.description = !isEmpty(data.email) ? data.email : "";
  data.id = !isEmpty(data.password) ? data.password : "";

};
