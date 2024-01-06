const { Router } = require("express")

const handlersGetGenres = require("../handlers/handlersGetGenres")

const genresRouter = Router();

// Routers

genresRouter.get("/", handlersGetGenres);




module.exports = genresRouter;