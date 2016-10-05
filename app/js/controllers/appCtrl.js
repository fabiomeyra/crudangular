angular.module('app').controller('appCtrl',function($scope, contatosAPI, locaisAPI) {

   
    contatosAPI.getContatos().then(function(response){
    	$scope.listaDeContatos=response.data;
    	$scope.semBanco = false;   
    }).catch(function(err){
    			
    });
	
	locaisAPI.getLocais().then(function(response){
	    	$scope.locais=response.data;
	    }
	).catch(function(err){
		$scope.semBanco = true;
	});
    
    $scope.salvarContato = function(contato){
	 	contatosAPI.setContatos(contato).then(function(response){
	    		if(!$scope.editando){
	    			contato._id= response.data.upserted['0']._id;
	    			$scope.listaDeContatos.push(contato);
	    	
	    		}else{
	    			$scope.listaDeContatos.splice($scope.listaDeContatos.indexOf($scope.contatoClicado),1,contato);
	    			$scope.editando=false;
	    		
	    		}
	    		delete $scope.contato;
	    		$scope.contactForm.$setPristine();

	    });
    };
    $scope.deletarContato = function(id){
    	contatosAPI.deletaContatos(id).then(function(response){
    		$scope.listaDeContatos = $scope.listaDeContatos.filter(function(contato){
    			return contato._id !== id;
    	});
    });
    	
    	
    };

    $scope.editarContato = function(contato){ 	
    		$scope.contato = angular.copy(contato);
    		$scope.editando = true;
            $scope.contatoClicado = contato;
    	
    };    
});﻿

