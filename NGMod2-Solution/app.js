(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyControllerFunc)
        .controller('AlreadyBoughtController', AlreadyBoughtControllerFunc)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffServiceFunc);

    ToBuyControllerFunc.$inject = ['ShoppingListCheckOffService'];


    function ToBuyControllerFunc(ShoppingListCheckOffService) {
        var ctrl1 = this;
        //     ctrl1.name = "";
        //     ctrl1.quantity = "";

        //     ctrl1.ToBuyMsg = "";
        //     ctrl1.items = ShoppingListCheckOffService.getItems();
        //     ctrl1.ItemBought = function (itemIndex) {
        //         ShoppingListCheckOffService.removeItem(itemIndex);
        //     };

        ctrl1.items = ShoppingListCheckOffService.getItems();

        ctrl1.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        };
    };

    AlreadyBoughtControllerFunc.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtControllerFunc(ShoppingListCheckOffService) {
        var ctrl2 = this;

        ctrl2.AlreadyBoughtMsg = "";
        ctrl2.items = ShoppingListCheckOffService.getItems();
    };

    function ShoppingListCheckOffServiceFunc() {
        var service = this;
        //     // List of shopping items
        var items = [
            { name: "Milk", quantity: 5 },
            { name: "Apples", quantity: 10 },
            { name: "Eggs", quantity: 12 },
            { name: "Butter", quantity: 2 },
            { name: "Chocolate", quantity: 5 }
        ];

            service.removeItem = function (itemIdex) {
                items.splice(itemIdex, 1);
            };

        service.getItems = function () {
            return items;
        };
    };

})();