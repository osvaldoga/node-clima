const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyD8gXu98XYMjLhWd-u7aj1wbtkM7ijMZw8`);

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let dir = respuesta.data.results[0].formatted_address;
    let latitud = respuesta.data.results[0].geometry.location.lat;
    let longitud = respuesta.data.results[0].geometry.location.lng;

    return {
        direccion: dir,
        lat: latitud,
        lng: longitud
    }
}

module.exports = {
    getLugarLatLng
}