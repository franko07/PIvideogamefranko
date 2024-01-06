const axios = require("axios")
const {API_KEY} = process.env;
const {Consola} = require("../db")


const getPlatforms = async () => {
    const URL = `https://api.rawg.io/api/platforms`;
    const platformsBD = await Consola.findAll();

    if (platformsBD.length === 0) {
        const response = await axios.get(`${URL}?key=${API_KEY}`)
        const plataformas = response.data.results.map((plat) => ({
            id: plat.id,
            name: plat.name
        }))
        await Consola.bulkCreate(plataformas)
        return plataformas;
    }
    return platformsBD    
}

module.exports = getPlatforms;