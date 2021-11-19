const axios = require('axios');
// const axios = require("axios").default;

const getLugarLatLng = async ( dir ) => {
  // Cuando el argumento tenga un espacio 
  // const encodeUrl = encodeURI( argv.direccion );
  // console.log( encodeUrl );
  
  const instance = axios.create( {
    baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    // params: {namePrefix: `${argv.direccion}`},
    params: {namePrefix: `${dir}`},
    headers: {
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      'x-rapidapi-key': '61458a9f5emsh557648d90cc5b61p106736jsn81be7cc3b77b'
    }
  });
  
  // instance.get()
    // .then( resp => {
      //console.log(resp);//info detallada para obtener status
      //console.log(resp.data);//para obtener los datos
      // console.log(resp.data.data[0]);//El primer resultado
    // })
    // .catch( err => {
      // console.log(err);
    // })
  
  const resp = await instance.get();
  // Si falla o no tiene resultados
  if ( resp.data.data.length === 0 ) {
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.data[0];

  const direccion = data.name;
  const lat = data.latitude;
  const lng = data.longitude;

  return {
    direccion,
    lat,
    lng
  }
}

module.exports = {
  getLugarLatLng
}