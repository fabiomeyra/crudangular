angular.module('app').controller('appCtrl',function($scope, contatosAPI, locaisAPI) {

<<<<<<< HEAD
   
=======
   // $scope.locais = [{uf: 'MG', cidade:'Uberlândia'},{uf: 'TO', cidade:'Palmas'}];
>>>>>>> d0bc67e711d121f741153246a52d7e629ecc70fd
    contatosAPI.getContatos().then(function(response){
    	$scope.listaDeContatos=response.data;
    	$scope.semBanco = false;   
    }).catch(function(err){
<<<<<<< HEAD
    			
=======
    	console.log('fabio');		
>>>>>>> d0bc67e711d121f741153246a52d7e629ecc70fd
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
<<<<<<< HEAD
	    	
	    		}else{
	    			$scope.listaDeContatos.splice($scope.listaDeContatos.indexOf($scope.contatoClicado),1,contato);
	    			$scope.editando=false;
	    		
=======
	    			console.log(contato);
	    		}else{
	    			$scope.listaDeContatos.splice($scope.listaDeContatos.indexOf($scope.contatoClicado),1,contato);
	    			$scope.editando=false;
	    			console.log(contato);
>>>>>>> d0bc67e711d121f741153246a52d7e629ecc70fd
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

<<<<<<< HEAD
    $scope.editarContato = function(contato){ 	
=======
    $scope.editarContato = function(contato){
            console.log($scope.listaDeContatos.indexOf(contato)); 	
>>>>>>> d0bc67e711d121f741153246a52d7e629ecc70fd
    		$scope.contato = angular.copy(contato);
    		$scope.editando = true;
            $scope.contatoClicado = contato;
    	
    };    
});﻿

