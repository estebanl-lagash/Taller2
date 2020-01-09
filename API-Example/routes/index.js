const express = require("express");
const num = require("../helpers/numerosALetras");
const router = express.Router();
const fecha = require("../helpers/fecha");
const api = require("../helpers/api");
const api_qr = require("../helpers/code-qr");

router.get("/numeroaletra/:numeros", (request, response) => {
  const { numeros } = request.params;
  const result = num.numero(numeros);
  if (!result) response.send(401, "el valor enviado no es válido");
  else response.status(200).send(result);
});

router.get("/tomarEdad/:fecha", (req, res) => {
  let edad = fecha.obtenerEdad(req.params.fecha);
  res.send(200, `La edad es ${edad}`);
});

router.get("/getUF", async function(req, res) {
  const valor = await api.getUf();
  res.send(200, valor);
});
router.get("/getQR", async function(req, res) {
  res.send(crearQr());
});

module.exports = router;
