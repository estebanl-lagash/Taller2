const fetch = require("node-fetch");
var config = require("./../settings/appsettings.secrets.json");
const { apiUri } = config;

const getUf = async () => {
  const result = fetch(apiUri)
    .then(res => res.json())
    .then(data => {
      return `El valor de ${data.uf.nombre}
    es de $ ${data.uf.valor}`;
    });
  return await result;
};

module.exports = { getUf };
