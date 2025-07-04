let express = require("express");
let u = require("./aa");
let app = express();


let port = 4518;
app.listen(port, ()=>{
console.log("i am listing");
});

app.use (function (req,res,next) {
  console.log("good");
  next()
})

app.get("/home",(req,res)=>{
  res.send("welcome to our home-page...")
})

app.get("/home/about" ,(req, res)=> {
  res.send("welcome to about...")
});

app.get("/home/about/:un", (req, res)=>{
  console.log(req.params);
  let {un} = req.params;
  res.send("hello dear..."+un)
  });

  
