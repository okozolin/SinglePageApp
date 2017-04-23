(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyControllerFunc)
        .controller('AlreadyBoughtController', AlreadyBoughtControllerFunc)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffServiceFunc);

    ToBuyControllerFunc.$inject = ['ShoppingListCheckOffService'];
    function ToBuyControllerFunc(ShoppingListCheckOffService) {
        var ctrl1 = this;
        // Show all items in list on the screen
        ctrl1.items = ShoppingListCheckOffService.ShowItems();
        // When ;Bought' button clicked - remove items from one list  and place on the other
        // ctrl1.removeItem = function (itemIndex) {
        //     ShoppingListCheckOffService.removeItem(itemIndex);
        // };
        ctrl1.removeItem = function (itemIndex) {
            try {
                ShoppingListCheckOffService.removeItem(itemIndex);
            }
            catch (err) {
                ctrl1.emptyMessage = err.message;
            }
        };

        ctrl1.addItem = function (itemName, ItemQuantity) {
            ShoppingListCheckOffService.addItem(itemName, ItemQuantity);
        };
    }

    AlreadyBoughtControllerFunc.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtControllerFunc(ShoppingListCheckOffService) {
        var ctrl2 = this;


        ctrl2.items = ShoppingListCheckOffService.getItems();

        ctrl2.NothingBought = function () {
            return ctrl2.items.length === 0;
        };

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

        // service.removeItem = function (itemIdex) {
        //     items.splice(itemIdex, 1);
        // };
        service.removeItem = function (itemIdex) {
            items.splice(itemIdex, 1);
            if (items.length == 0) {
                console.log("array empty");
                throw new Error("Everything is bought!");
            }
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