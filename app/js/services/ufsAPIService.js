angular.module('app').service('locaisAPI', function($http, config){
	this.getLocais = function(){
		return $http.get(config.urlApp +'/locais');
	}	
})
