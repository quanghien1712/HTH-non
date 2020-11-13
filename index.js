const express = require('express');
const app = express(); //initialize express
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true})); //get access data from view(html) as a object inside bracket
//method get
app.get("/",(req,res) => {
	res.sendFile(__dirname+"/index.html");
})
//method post
app.post("/hello",(req,res) => {
	var name = req.body.name;
	res.send(`Hello ${name}`);
})
app.listen(3000,()=>{
		console.log('Server started at port 3000');
});