const axios = require('axios');

const getClima = async( lat, lng ) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=244c651a3717aca5ec8e20f43124b1be&units=metric&lang=es`)

  return resp.data.main.temp;
}

module.exports = {
  getClima
}