var app = angular.module('tictactoeApp', []);

app.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'main.html',
            controller: 'GameController'
        }).
        otherwise({
            redirectTo: '/'
    });
});

app.constant('grid_size', 3);

app.factory('game', function(){
	return new Game();
})