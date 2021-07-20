const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
   day: { 
      type: Number,
      required: true
   },
   exercises: {

   },

   array: Array,
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;