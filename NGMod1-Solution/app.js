(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckControllerFunc);

    LunchCheckControllerFunc.$inject = ['$scope'];
    function LunchCheckControllerFunc($scope) {
        $scope.food = "";
        $scope.message = "";
        
        $scope.checkTooMuch = function () {
            console.log("entering the function to check when clicked");
            console.log(SplitFoodInput($scope.food).length);
            var arrFoodItems = SplitFoodInput($scope.food);
            var numItems = SplitFoodInput($scope.food).length;
            ChooseRightMessage(numItems, arrFoodItems);
        };

        function SplitFoodInput(stringToSplit) {
            var comma = ','
            var arrayOfFoodItems = stringToSplit.split(comma);
            return arrayOfFoodItems;
        }

        function ChooseRightMessage(num, arrItems) {
            if (arrItems[0] == "") {
                DisplayMsg("Please enter data first") ;
            } else if (num <= 3) {
                DisplayMsg("Enjoy!");
            } else  if ( num > 3){
               DisplayMsg("Too much!") ;
            }
        }

        function DisplayMsg(msg) {
            $scope.message = msg;
        }
    }
})();