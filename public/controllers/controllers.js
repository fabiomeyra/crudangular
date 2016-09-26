var app = angular.module('app', []);


app.controller('AppCtrl', ['$scope','$http',function($scope,$http) {

    
    var refresh = function(){
	    $http.get('/contactlist').success(function(response){
	    	$scope.listaDeContatos=response;
	    });
	}
	refresh();
    $scope.AddContact = function(){
 
    	$http.post('/contactlist',$scope.contato).success(function(response){
    		refresh();
    		delete $scope.contato;
    	});
    };
    $scope.DellContato = function(id){
    	$http.delete('/contactlist/'+id).success(function(response){
    		refresh();
    	});
    	
    	
    };

    $scope.Editar = function(id){
    	$http.get('/contactlist/'+id).success(function(response){
    		$scope.contato = response;
    		$scope.editando = true;
    	});
    };
    $scope.Atualizar = function(){
    	$http.put('/contactlist/'+ $scope.contato._id,$scope.contato).success(function(response){
    		$scope.editando = false;
    		refresh();
    		delete $scope.contato;
    		
    	});
    	 
    };
    
}]);﻿

