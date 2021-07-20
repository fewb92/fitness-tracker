const router = require("express").Router();
const Workout = require("../../models/Workout");


router.get("/", async (req, res) => {
    try {
        const lastWorkout = await Workout.aggregate([
            {
                $match: {}
            },
            {
                $sort: { _id: -1 }
            },
            {
                $limit: 1
            },
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            }
        ])
        res.json(lastWorkout);
    } catch (err) {
        res.json(err);
    }
});

router.get("/range", async (req, res) => {
    try {
        const lastWorkout = await Workout.aggregate([
            {
                $match: {}
            },
            {
                $sort: { _id: -1 }
            },
            {
                $limit: 7
            },
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            }
        ])
        res.json(lastWorkout);
    } catch (err) {
        res.json(err);
    }
});

router.post("/", (req, res) => {
    Workout.create(req.body)
    .then(newWorkout => {
        res.json(newWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/:id", (req, res) => {
    Workout.updateOne(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
    )
    .then(newExercise => {
        res.json(newExercise);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;