'use strict';

// Declare app level module which depends on views, and components
var salesTaxApp = angular.module('salesTax', [
  'ngRoute',
  'orderController',
  'productService',
  'orderService'

]);

salesTaxApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/viewOrder', {
        templateUrl: '/SalesTax/viewOrder',
        controller: 'UpdateOrderController'
    }).when( '/viewProducts',{
        templateUrl: '/SalesTax/viewProducts',
        controller: 'ProductsController'
    }).when( '/viewOrders',{
        templateUrl: '/SalesTax/viewOrders',
        controller: 'OrdersController'
    }).when('/viewOrder/:orderId', {
        templateUrl: '/SalesTax/viewOrder',
        controller: 'UpdateOrderController'
    })
    .otherwise({
        redirectTo: '/viewOrder'
    });
}]);







