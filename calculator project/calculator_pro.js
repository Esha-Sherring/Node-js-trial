const express=require("express");
const bodyParser=require("body-parser");
const app= express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(request,response){
	response.sendFile(__dirname + "/index.html");
});
app.post("/", function(request,response){
	
	var num1=Number(request.body.num1);
	var num2=Number(request.body.num2);
	var result=num1+num2;
	response.json("The sum is:"+result);
    console.log(result);
	
});
app.get("/bmi", function(request,response){
	response.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmi", function(request,response){
	
	var w=Number(request.body.we);
	var h=Number(request.body.he);
	var temp=Number(h*h);
	var bmi=w/temp;
	response.json("your BMI is:"+ bmi);
    
	
});
app.listen(3000,function () {
	console.log("server hosting started");
});

