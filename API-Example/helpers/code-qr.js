var config = require("./../settings/appsettings.secrets.json");
const { qrUri } = config;

const crearQr = () => {
  var qr = require("qr-image");
  var svg_string = qr.imageSync(`${qrUri}`, { type: "svg", size: 4 });

  return svg_string;
};

module.exports = crearQr;