/*
 * Author: Junyuan Wu
 * Date: 2025-04-26
 * Description: AngularJS controller handling login with username or email
 */

var app = angular.module('loginApp', []);

app.controller('LoginController', function($scope, $http, $window) {
    $scope.user = {};
    $scope.message = '';

    $scope.login = function() {
        $http.post('http://localhost:3000/login', $scope.user)
            .then(function(response) {
                $scope.message = response.data.message;

                // Output new user's details returned by the server
                console.log("User details from server:", response.data.user);

                // If the login is successful or a new user registers successfully, it will jump to the main page after 1 second
                if (response.data.message.includes('Welcome') || response.data.message.includes('New user registered successfully')) {
                    setTimeout(function() {
                        $window.location.href = 'main.html';
                    }, 1000);
                }
            })
            .catch(function(error) {
                $scope.message = "Error connecting to server.";
            });
    };
});