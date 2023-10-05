const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const commentRouter = require('./Comments')
const UserRouter = require('./UserProfile')
const AdminRouter = require('./Admin')
const CategoryRouter = require('./Category')
const LayoutRouter = require('./Layouts')
const email = require('./Autoemail')
router.get("/", (req, res) => {
    res.send("Welcome to our page");
  });

  router.use("/admin", AdminRouter);
  router.use("/question", questionRouter);
  router.use("/answer", answerRouter);
  router.use('/comment', commentRouter)
  router.use('/user', UserRouter)
  router.use('/category', CategoryRouter)
  router.use('/layouts', LayoutRouter)
  router.use('/autoemail', email)
  module.exports = router;