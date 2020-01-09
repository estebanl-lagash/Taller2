const writtenNumber = require("written-number");

const numero = numeros => {
  if (isNaN(numeros)) return false;
  else return writtenNumber(numeros, { lang: "es" });
};

module.exports = { numero };
