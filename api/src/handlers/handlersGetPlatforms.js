const getPlatforms = require("../controllers/getPlatformsControllers")


const handlersGetPlatforms = async (req, res) => {
    try {
      const plataformas = await getPlatforms();
      res.status(200).json(plataformas);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

module.exports = handlersGetPlatforms;