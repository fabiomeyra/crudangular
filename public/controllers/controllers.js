var app = angular.module('app', []);


app.controller('AppCtrl', ['$scope','$http',function($scope,$http) {
    console.log("Hello World from controller");

    
    var refresh = function(){
	    $http.get('/contactlist').success(function(response){
	    	console.log("I got the da i requested");
	    	$scope.listaDeContatos=response;
	    });
	}
	refresh();
    $scope.AddContact = function(){
    	console.log($scope.contato)
    	$http.post('/contactlist',$scope.contato).success(function(response){
    		console.log(response);
    		refresh();
    		delete $scope.contato;
    	});
    };
    $scope.DellContato = function(id){
    	console.log(id);
    	$http.delete('/contactlist/'+id).success(function(response){
    		refresh();
    	});
    	
    	
    };

    $scope.Editar = function(id){
    	console.log(id);
    	$http.get('/contactlist/'+id).success(function(response){
    		$scope.contato = response;
    		$scope.editando = true;
    	});
    };
    $scope.Atualizar = function(){
    	console.log($scope.contato._id);
    	$http.put('/contactlist/'+ $scope.contato._id,$scope.contato).success(function(response){
    		$scope.editando = false;
    		refresh();
    		delete $scope.contato;
    		
    	});
    	 
    };
    
}]);﻿

