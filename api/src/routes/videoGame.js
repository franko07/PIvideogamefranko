const { Router } = require("express")
const  HandlersGetAllGames = require("../handlers/gameHandlers")
const getById = require("../handlers/handlersGetByIdGames")
const handlresPostGame = require("../handlers/handlersPostGames")
const gameName = require("../controllers/getvideogameName")
const handlersDelete = require("../handlers/handlersDelete")

const gameRouter = Router();

// Routers

gameRouter.get("/", HandlersGetAllGames);

gameRouter.get("/name", gameName)

gameRouter.get("/:id", getById)

gameRouter.post("/", handlresPostGame)

gameRouter.delete("/delete/:id", handlersDelete)


module.exports = gameRouter;