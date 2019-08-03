/// <reference path="angular.min.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var countries = [
            {
                name: "India",
                cities: [
                    { name: "Delhi" },
                    { name: "Bangalore" },
                    { name: "Mumbai" },
                ]
            },
            {
                name: "Europe",
                cities: [
                    { name: "Luxembourg" },
                    { name: "Switzerland" },
                    { name: "Paris" },
                ]
            },
            {
                name: "USA",
                cities: [
                    { name: "California" },
                    { name: "New York" },
                    { name: "Chicago" },
                ]
            }
        ];

        $scope.countries = countries;
    });