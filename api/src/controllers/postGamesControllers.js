const { Videogame } = require("../db")
const {Op} = require("sequelize")


const postGame = async (image, name, description, releaseData, rating, genres, platforms) => {
    const existingGame = await Videogame.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
    
      if (existingGame) {
        throw new Error("El nombre del juego ya existe.");
      }
      const newGame = await Videogame.create({
        name,
        image,
        description,
        releaseData,
        rating,
        platforms,
        genres
      });
      
    
      
    
      await newGame.addConsolas(platforms);
      await newGame.addGenres(genres);
    
      return newGame;
}

module.exports = postGame;