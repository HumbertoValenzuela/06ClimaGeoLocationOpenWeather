const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options( {
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;//argv para obtener los argumentos

// console.log(argv.direccion);
// lugar.getLugarLatLng( argv.direccion ).then( console.log );

// clima.getClima( 44.002222222, -75.983055555 )
//   .then( console.log )
//   .catch( err => console.log(err));

const getInfo = async ( direccion ) => {


  try {
    const obtenerCoordenadas = await lugar.getLugarLatLng( direccion );
      // .then( resp => { 
      //   return resp.direccion, resp.lat } )
      // .catch( erro => erro)
    // return obtenerLugar
    const obtenerClima = await clima.getClima( obtenerCoordenadas.lat, obtenerCoordenadas.lng );
    return `El clima de ${direccion} es de ${obtenerClima}`;
    
  } catch (error) {
    return `No se puedo determinar el clima de ${direccion}. ${error}`;    
  }

  // salida
  // El clima de (lugar es de (temperatura))
  // No se pudo determinar el clima de (lugar)
}

getInfo( argv.direccion )
  .then( console.log )
  .catch( console.log);

// 051 Introduccion a la seccion
// Conexion a api de google para obtener info de ciudades, con la info de google realizar otra llamada a otra api open weather 
// peticiones http request(callback) axios(Promises)

// La sección se enfoca en los siguientes temas:
// Consumo de APIs
// Llamadas HTTP hacia servidores externos
// Paquete request
// Paquete Axios
// Uso servicios para obtener la dirección por nombre.
// Uso de OpenWeather para obtener el clima
// Respaldos locales y remotos mediante

// 053 Inicio del proyecto - Aplicación del Clima del Mundo
// node app -d Chile  
// yargs tiene una opcion que permite poner comandos directamente o configurar argumentos directamente en la raiza de la aplicacion, el .options({})


// 054 Lectura - City-Geo-Location no existe
// En las próximas clases estaremos usando una API para obtener las coordenadas de una ciudad en base al nombre que recibamos como argumento
// City-geo-location-lookup - API
// obtener tu API key y usarlo

// alternativa
// https://rapidapi.com/wirefreethought/api/geodb-cities/

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
//   params: {namePrefix: 'valparaiso'},
//   headers: {
//     'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
//     'x-rapidapi-key': '61458a9f5emsh557648d90cc5b61p106736jsn81be7cc3b77b'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// 056 Peticiones HTTP - Axios – Request
// npm i axios
//  instance = axios.create
// instance.get()
// resultado: status: 200, statusText: 'OK',
// data: [ [Object], [Object], [Object], [Object], [Object] ],
// forsar error cambiando la direccion y mostrar status: 404
// resp.data);//para obtener los datos
// La Api entrega una serie de resultados
// Solo Mostrar el primer resultado
// resp.data.data[0]

// 058 Open Weather Map
// El capítulo anterior se obtuvo la dirección latitud longitud mediante el método getLugarLatLng.
// Usar estos datos para obtener el clima en base a esas coordenadas
// https://openweathermap.org/ api para obtener el clima por dirección, latitud o longitud
// crear api key - ir a link API - Current Weather Data - API Doc - By geographic coordinates -una demo api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// usar PostMan
// api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=244c651a3717aca5ec8e20f43124b1be&units=metric&lang=es
// clima.js - petición get no se configura headers - el api key es enviado en el url
// los parametros serán latitud y longitud
// axios.get(`link`) esto es una promesa, uno puede esperar

// 059 Conectando ambos servicios
// Crear función que contenga las dos peticiones a la API