 /// <reference path="angular.min.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employee = [
            { firstName: "Captain", lastName: "America", gender: "Male", salary: "70000" },
            { firstName: "Iron", lastName: "Man", gender: "Male", salary: "70000" },
            { firstName: "Doctor", lastName: "Strange", gender: "Male", salary: "90000" },
            { firstName: "Super", lastName: "Man", gender: "Male", salary: "70000" },
            { firstName: "Black", lastName: "Widow", gender: "Female", salary: "80000" },
        ];

        $scope.employee = employee;
    });