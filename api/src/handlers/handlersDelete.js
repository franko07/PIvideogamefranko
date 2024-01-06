const { Videogame } = require("../db")
const {Op} = require("sequelize")

const deleteGame = async (req, res) => {
  const id = req.params.id;
  const game = await Videogame.findOne({
    where: {
      id,
    },
  });
  if (!game) {
    return res.status(404).json({
      message: "El juego no existe.",
    });
  }
  await game.destroy();
  return res.status(200).json({
    message: "El juego se ha eliminado correctamente.",
  });
};
module.exports = deleteGame;