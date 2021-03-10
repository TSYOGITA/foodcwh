const express = require('express');
const path = require('path');
const app = express();
const static_path = path.join("__dirname","../module");
app.set('view engine','hbs');
app.use(express.static(static_path));
const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.render("cwy");
})
app.listen(port,()=>{
    console.log("The website is running on ${port}");
})