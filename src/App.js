/**
 * Created by rns.mac on 12/27/15.
 */
angular.module('myApp', []);

angular.module('myApp')
    .factory('Person', function () {
        return function Person (name) {
            this.name = name;
        };
    });


