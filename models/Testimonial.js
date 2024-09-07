const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testimonialSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    state: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
