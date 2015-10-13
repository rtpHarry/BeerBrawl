/* global angular */
;(function() {

    'use strict';

    angular
        .module('formlyApp')
        .controller('MainController', MainController);

    function MainController(beerCalculator) {

        var vm = this;
        
        // The model object that we reference
        // on the element in index.html
        vm.offer1 = {};
    
        // An array of our form fields with configuration
        // and options set. We make reference to this in
        // the 'fields' attribute on the element
        vm.offerFields = [
            {
                key: 'cansize',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Can Size (ml)',
                    required: true
                }
            },
            {
                key: 'cansinpack',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Cans In Pack',
                    required: true
                }
            },
            {
                key: 'numberofpacks',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Number Of Packs',
                    required: true
                }
            },
            {
                key: 'cost',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Cost',
                    required: true
                }
            },
            {
                key: 'cansinpack',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'ABV (% Strength) (Optional)',
                    required: false
                }
            }
        ];
    }

})();