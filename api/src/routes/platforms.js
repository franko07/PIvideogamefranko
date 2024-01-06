const { Router } = require("express")

const handlersGetPlatforms = require("../handlers/handlersGetPlatforms")

const platformsRouter = Router();

// Routers

platformsRouter.get("/", handlersGetPlatforms);


module.exports = platformsRouter;