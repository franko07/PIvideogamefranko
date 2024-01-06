const postGame = require("../controllers/postGamesControllers")

const handlresPostGame = async (req, res) => {
    const { image, name, description, releaseData, rating, genres, platforms } = req.body;
  
    try {
      
      const postedGame = await postGame(image, name, description, releaseData, rating, genres, platforms);
  
      return res.status(201).json(postedGame);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };


module.exports = handlresPostGame;