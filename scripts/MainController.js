/* global angular */
;(function() {

    'use strict';

    angular
        .module('beerBrawlApp')
        .controller('MainController', MainController);

    function MainController(beerCalculator) {

        var vm = this;
        
        // submit handler
        vm.onSubmit = onSubmit;
        
        function onSubmit() {
            alert(beerCalculator.calculate(vm.offerModel));
        }
        
        // storage for all offers
        vm.offers = [];
        
        // The model object that we reference
        // on the element in index.html
        vm.offerModel = {
            cansize1: 440,
            cansinpack1: 10,
            numberofpacks1: 3,
            cost1: 22,
            abv1: 4.8,
            cansize2: 440,
            cansinpack2: 10,
            numberofpacks2: 2,
            cost2: 17,
            abv2: 4.8, 
        };
        
        // An array of our form fields with configuration
        // and options set. We make reference to this in
        // the 'fields' attribute on the element
        vm.offerFields = [
            {
                template: '<h2>Offer 1</h2>'
            },
            {
                key: 'cansize1',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Can Size (ml)',
                    required: true
                }
                /*
                    templateOptions: {
                    type: 'number',
                    label: 'Zip',
                    max: 99999,
                    min: 0,
                    pattern: '\\d{5}'
                    }*/
            },
            {
                key: 'cansinpack1',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Cans In Pack',
                    required: true
                }
            },
            {
                key: 'numberofpacks1',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Number Of Packs',
                    required: true
                }
            },
            {
                key: 'cost1',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Cost',
                    required: true
                }
            },
            {
                key: 'abv1',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'ABV (% Strength) (Optional)',
                    required: false
                }
            },
            {
                template: '<h2>Offer 2</h2>'
            },
            {
                key: 'cansize2',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Can Size (ml)',
                    required: true
                }
            },
            {
                key: 'cansinpack2',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Cans In Pack',
                    required: true
                }
            },
            {
                key: 'numberofpacks2',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Number Of Packs',
                    required: true
                }
            },
            {
                key: 'cost2',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Cost',
                    required: true
                }
            },
            {
                key: 'abv2',
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