const Blog = require("../models/Blog");
const Comment = require("../models/Comment");
const Reply = require("../models/Reply");

const blog_index = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    const comments = await Comment.find();
    const replies = await Reply.find();
    // console.log(replies);
    res
      .set(
        "Content-Security-Policy",
        "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
      )
      .render("blog", {
        title: "Blog",
        blogs: blogs,
        comments: comments,
        replies: replies,
      });
  } catch (err) {
    console.error("Error: ", err);
  }
};

const postComment = (req, res) => {
  const id = req.params.id;
  const comment = new Comment(req.body);
  comment["blog_id"] = id;
  console.log(comment);
  try {
    comment
      .save()
      .then((result) => {
        res.redirect("/blog");
        // res.send("saved Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.error(err);
  }
};

const postReply = async (req, res) => {
  const id = req.params.id;
  const reply = new Reply(req.body);
  reply["comment_id"] = id;
  console.log(reply);
  try {
    reply
      .save()
      .then((result) => {
        res.redirect("/blog");
        // res.send("saved Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.error(err);
  }
};

// const blog_create_post = (req, res) => {
//   const blog = new Blog(req.body);
//   blog
//     .save()
//     .then((result) => {
//       res.redirect("/blogs");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const blog_delete = (req, res) => {
//   const id = req.params.id;
//   Blog.findByIdAndDelete(id)
//     .then((result) => {
//       res.json({ redirect: "/blogs" });
//     })
//     .catch((err) => console.log(err));
// };

module.exports = {
  blog_index,
  // blog_create_get,
  // blog_create_post,
  // blog_delete,
  postComment,
  postReply,
};
