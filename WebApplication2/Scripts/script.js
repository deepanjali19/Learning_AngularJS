/// <reference path="angular.min.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employees = [
            { name: "Deepanjali", birthDate: new Date("June 19, 1995"), gender: "Female", salary: 70000.111 },
            { name: "Tom", birthDate: new Date("July 11, 1996"), gender: "Male", salary: 60000.589 },
            { name: "Jerry", birthDate: new Date("August 6, 1997"), gender: "Male", salary: 50005.098 },
            { name: "Benny", birthDate: new Date("April 15, 1985"), gender: "Female", salary: 64000.258 },
            { name: "Lisa", birthDate: new Date("May 9, 1991"), gender: "Female", salary: 55500.963 }
        ];

        $scope.employees = employees;
    });