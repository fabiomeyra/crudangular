angular.module('app').service('contatosAPI', function($http, config){
	this.getContatos = function(){
		return $http.get(config.urlApp +'/contactlist');
	}
	this.setContatos = function(contato){
		return $http.put(config.urlApp +'/salvaContato',contato)
	}
	this.deletaContatos = function(id){
		return $http.delete(config.urlApp +'/contactlist/'+id)
	}
})