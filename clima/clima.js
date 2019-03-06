const axios = require('axios');

const getTemperatura = async(lat, lng) => {
    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0b7b8dca326f042978b56fc80afc33db&units=metric`);

    return respuesta.data.main.temp;
}

module.exports = {
    getTemperatura
}