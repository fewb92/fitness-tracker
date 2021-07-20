const router = require("express").Router();
const workoutRoutes = require("./workoutroutes");

router.use("/workouts", workoutRoutes);

module.exports = router;