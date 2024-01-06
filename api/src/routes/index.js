const { Router } = require('express');
const gameRouter = require("./videoGame")
const genresRouter = require("./genres")
const platformsRouter = require("./platforms")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/game", gameRouter)

router.use("/genres", genresRouter)

router.use("/platforms", platformsRouter)


module.exports = router;
