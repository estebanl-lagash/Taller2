const obtenerEdad = fecha => {
  const fechaValor = fecha.split("-");
  const nuevaFecha = new Date(fechaValor[2], fechaValor[1], fechaValor[0]);
  const fechaHoy = new Date();
  let edad = fechaHoy.getFullYear() - nuevaFecha.getFullYear();
  let mes = fechaHoy.getMonth() + 1 - nuevaFecha.getMonth();
  if (mes < 0 || (mes === 0 && fechaHoy.getDate() < nuevaFecha.getDate()))
    edad--;
  return edad <= 0 ? 0 : edad;
};


module.exports = { obtenerEdad };
