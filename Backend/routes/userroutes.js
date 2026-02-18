const express = require("express");
const router = express.Router();
const Task = require("../model/authmodel");
const {checkAuth} = require("../Middleware/auth");


router.get("/add", checkAuth,(req,res)=>{
  res.render("addTask");
});

router.post("/add", checkAuth, async (req,res)=>{
  await Task.create({
    title:req.body.title,
    description:req.body.description,
    user:req.user.id
  });
  res.redirect("/tasks");
});

router.get("/delete/:id", checkAuth, async (req,res)=>{
  const task = await Task.findById(req.params.id);


  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/tasks");
});

module.exports = router;
