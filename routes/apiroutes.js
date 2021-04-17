const Workout = require("../models/workout.js");
const express = require("express");
const router = express.Router();

router.post("/api/workouts", ({ body }, res) => {
  Workout.create({})
    .then((dbWork) => {
      res.json(dbWork);
    })
    .catch(({ error }) => {
      console.log(error);
    });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
  console.log("PARAMS", body, params);

  Workout.findOneAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
    .then((dbWork) => {
      res.json(dbWork);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;