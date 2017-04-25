/**
 * Created by criac on 24/04/2017.
 */
angular.module("", ["ngRoute"])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/view1',{
            templateUrl: 'page1.html'
        }).when('/view2',{
            templateUrl:'page2.html',
            controller: 'Ctrl'
        }).otherwise({redirectTo:'/view1'});
    }]).factory('pizza', function($http){
    var pizzaSerce= {
        getData: function () {
            return $http.get('script/pizza.json').then(function (response) {
                return response.data;
            });
        }
    }
    return pizzaServices;
}).controller('Ctrl',['$scope', 'pizza',
    function($scope,Pizza){
        Pizza.getData().then(function(data){
            $scope.dati={};//inizializziamo idati
            //logica da implementare
        });
    }
]);










/*var app=angular.module("moduloEsempio",["ngRoute"]);
app.config(["$routeProvider", function($routeProvider){
    $routeProvider.when("/view1",{
        templateUrl: "page1.html"
    }).when("/view2",{
        templateUrl: "page2.html",
        controller: "Ctrl"
    }).otherwise({
        redirectTo: "/view1"
    });
}]);
app.factory("pizza",function($http){
    var pizzaService={
        getData: function(){
            return $hhtp.get("script/pizza.json").then(function(response){
                return response.data;
            });
        }
    };
}

app.controller("Ctrl",["$scope", "pizza",
function($scope, pizza){
    pizza.getData().then(function(data){
        $scope.dati.pizza=data.name;
    });
}]);
*/




