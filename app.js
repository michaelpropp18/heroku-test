const express =require('express');
const app = express();
app.get('/', (req,res) => {
    res.send("Home Page");
});
app.listen(3000)
console.log("Running")
//type "heroku auth:login"
//"heroku create" must have git 
//git push heroku master"