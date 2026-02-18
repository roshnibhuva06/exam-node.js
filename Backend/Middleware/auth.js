const jwt = require("jsonwebtoken");

function checkAuth(req,res,next){

  const token = req.cookies.token;
  if(!token) return res.redirect("/login");
  req.user = data;
  next();
}

export default  checkAuth;
