const express = require("express");
const testimonialController = require("../controllers/testimonialController");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/", testimonialController.testimonial_get);

router.get("/blog", blogController.blog_index);

router.post("/post", testimonialController.testimonial_create_post);

router.post("/blog/:id", blogController.postComment);

router.post("/blog/comment/:id", blogController.postReply);

router.get("/web-services", (req, res) => {
  res.render("web");
});

router.get("/mobile-services", (req, res) => {
  res.render("mobile");
});

router.get("/embedded-services", (req, res) => {
  res.render("emb");
});

router.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

router.get("/locy", (req, res) => {
  res.render("soon");
});

module.exports = router;
