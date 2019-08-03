/// <reference path="angular.min.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employee = [
            { first: "kuchi", last: "gerangal", gender: "female", salary: "70000" },
            { first: "vivek", last: "gerangal", gender: "male", salary: "70000" },
            { first: "amrit", last: "singh", gender: "male", salary: "90000" },
            { first: "surinder", last: "gerangal", gender: "female", salary: "70000" },
            { first: "chander vikas", last: "gerangal", gender: "male", salary: "80000" },
        ];

        $scope.employee = employee;
    });