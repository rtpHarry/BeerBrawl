/* global angular */
(function() {

    'use strict';

    angular
        .module('beerBrawlApp', ['formly', 'formlyBootstrap', 'ngAnimate', 'ui.router'])
        
    // configuring our routes 
    // =============================================================================
    .config(function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
        
            // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: 'form.html',
                controller: 'formController'
            })
            
            // nested states 
            // each of these sections will have their own view
            // url will be nested (/form/addoffer)
            .state('form.addoffer', {
                url: '/addoffer',
                templateUrl: 'form-addoffer.html'
            })
            
            // url will be /form/payment
            .state('form.brawl', {
                url: '/brawl',
                templateUrl: 'form-brawl.html'
            });
            
        // catch all route
        // send users to the form page 
        $urlRouterProvider.otherwise('/form/addoffer');
    })
    
    // our controller for the form
    // =============================================================================
    .controller('formController', function($scope) {
        
        // we will store all of our form data in this object
        $scope.formData = {};
        
        // function to process the form
        $scope.processForm = function() {
            alert('awesome!');
        };
        
    });

})();