var myApp = angular.module("myModule", [])
                    .controller("myController", function($scope) {

                        var employees = [
                           { name:"TATA", dateOfBirth: new Date("November 23, 1980"), gender:"Male", salary:15000.693 },
                           { name:"Mahindra", dateOfBirth: new Date("November 3, 1991"), gender:"Male", salary:15000 },
                           { name:"Ford", dateOfBirth: new Date("November 23, 1985"), gender:"Female", salary:895000 },
                           { name:"Chev", dateOfBirth: new Date("May 23, 1970"), gender:"Male", salary:15000 },
                           { name:"Suziki", dateOfBirth: new Date("November 23, 1980"), gender:"Female", salary:15000 }
                        ];
                        $scope.employees = employees;
                        $scope.rowLimit = 3;

                    });