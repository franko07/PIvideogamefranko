const getGenres = require("../controllers/genreControllers")


const handlersGetGenres = async (req, res) => {
    try {
        const genres = await getGenres()
        res.status(200).json(genres)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = handlersGetGenres;