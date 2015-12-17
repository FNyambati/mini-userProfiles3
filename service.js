var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {
    this.getUsers = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://reqres.in/api/users?page=1'
        }).then(function(response) {
            var parsedResponse = response.data.data
            for(var i = 0; i < parsedResponse.length; i++) {
                parsedResponse[i].first_name = 'Fred'
                parsedResponse[i].last_name = 'Nyambati'
            }
            deferred.resolve(parsedResponse)
        })
        return deferred.promise;
    }
});