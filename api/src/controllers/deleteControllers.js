const { Videogame } = require("../db")
const {Op} = require("sequelize")
const deleteGame = async (id) => {
  const game = await Videogame.findOne({
    where: {
      id,
    },
  });
  if (!game) {
    throw new Error("El juego no existe.");
  }
  await game.destroy();
};
module.exports = deleteGame;