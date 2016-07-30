angular.module('app')
  .service('mainService', function($http) {
    this.GetZip = function(zip) {
      var url = 'http://maps.googleapis.com/maps/api/geocode/json?address='+zip
      console.log(url);
      return $http.get(url)
      .then(function(response){
        return response;
      }).catch(function(err) {
        alert("error")
      });
    }
  });
