(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyControllerFunc)
        .controller('AlreadyBoughtController', AlreadyBoughtControllerFunc)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffServiceFunc);

    ToBuyControllerFunc.$inject = ['ShoppingListCheckOffService'];
    function ToBuyControllerFunc(ShoppingListCheckOffService) {
        var ctrl1 = this;

        ctrl1.items = ShoppingListCheckOffService.ShowItems();


        ctrl1.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
            ctrl1.addItem = function (itemName, ItemQuantity) {
                ShoppingListCheckOffService.addItem(itemName, ItemQuantity);
            };
        };
    }

    AlreadyBoughtControllerFunc.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtControllerFunc(ShoppingListCheckOffService) {
        var ctrl2 = this;

        ctrl2.items = ShoppingListCheckOffService.getItems();
    }

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

        service.ShowItems = function () {
            return items;
        };


        // List of already Bought items
        var Boughtitems = [];
        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            Boughtitems.push(item);
        };

        service.getItems = function () {
            return Boughtitems;
        };
    }
})();