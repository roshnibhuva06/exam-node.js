const express = require("express");
const router = express.Router();
const User = require("../model/usermodel");

router.post("/register", async (req,res)=>{
  await User.create(req.body);
  res.redirect("/login");
});


router.get("/logout",(req,res)=>{
  res.clearCookie("token");
  res.redirect("/login");
});

module.exports = router;
