const Testimonial = require("../models/Testimonial");

const testimonial_get = (req, res) => {
  Testimonial.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res
        .set(
          "Content-Security-Policy",
          "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
        )
        .render("index", { testimonials: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const testimonial_create_post = (req, res) => {
  const testimonial = new Testimonial(req.body);
  testimonial["state"] = 0;
  testimonial
    .save()
    .then((result) => {
      console.log("Saved Successfully...");
      // res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

// const testimonial_details = (req, res) => {
//   const id = req.param.id;
//   Testimonial
//     .findById(id)
//     .then((result) => {
//       res.render
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

module.exports = { testimonial_get, testimonial_create_post };
