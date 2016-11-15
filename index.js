var express= require('express');
var bodyParser = require('body-parser');

var app = new express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:false
}));

 var arr=[];
 
 app.get('/get_arr' , function(req,res){
	 res.json(arr);
 });
 
 app.post('/post_arr' , function(req,res){
	 var item = req.body.item; // meret nga ajax request
	 arr.push(item);
	 console.log(arr);
	 res.json(arr);
 });
 
 app.put('/put_arr' , function(req,res){
	 var update=req.body.update; // meret nga ajax request
	 arr.pop(); //heq el. e fundit nga array
	 arr.push(update); // fut el. te ri
	 console.log(arr);
	 res.json({a:1});
 });
 
 app.delete('/delete_arr' , function (req,res){ // boshatis arrayn
	 arr=[];
	 console.log(arr);
 });
 
 app.listen(process.env.PORT||8000);