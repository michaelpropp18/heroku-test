const express =require('express');
const app = express();
const PORT = process.env.PORT || "3000";
app.get('/', (req,res) => {
    res.send("Home Page");
});
app.listen(PORT, () => console.log("listening"));
//type "heroku auth:login"
//"heroku create" must have git 
//git push heroku master"