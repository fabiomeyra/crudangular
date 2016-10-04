var express=require('express');	
var app=express();
var mongojs = require('mongojs');
var config = require('./config.json');
var db = mongojs(config.caminhoBanco+'contactlist',['contactlist','locais']);
var bodyParser = require ('body-parser');
app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());

db.on('error', function(err){
	console.log("Erro de Conexão com o banco!");
});
db.on('connect',function(){
	console.log("está conectado ao banco!");
});
	
app.all('*', function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
}); 

app.get('/contactlist', function(req, res, next){
	db.contactlist.find(function(err, doc){
		if(!err){
			res.json(doc);
		}else{
			next(err);
		}
	})
});

app.get('/locais', function(req, res, next){
	db.locais.find(function(err, doc){
		if(!err){
			res.json(doc);
		}else{
			next(err);
		}
	})
});

app.delete('/contactlist/:id',function(req,res){
	var id = req.params.id;
	db.contactlist.remove({_id: mongojs.ObjectId(id)},function(err, doc){
    		res.json(doc);
    });
});

app.put('/salvaContato', function(req, res){
	var id = req.body._id;
	console.log(id);
	db.contactlist.update(
		{_id: mongojs.ObjectId(id)},
		{$set:{nome: req.body.nome, email: req.body.email, numero: req.body.numero, localidade: req.body.localidade}},
		{upsert: true}, function(err, doc){
			res.json(doc);

	});
});


app.listen(3000);
console.log("Server running on  port 3000");