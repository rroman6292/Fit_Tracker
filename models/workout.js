const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: { type: Date, default: () => new Date() },
    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce(function (total, exercise) {
      return total + exercise.duration;
    }, 0);
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;