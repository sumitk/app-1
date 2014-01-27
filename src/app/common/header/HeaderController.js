'use strict';

angular.module('CouchCommerceApp')
.controller('HeaderController', function ($rootScope, $scope, $location, navigationService, couchService, basketService, urlParserService, deviceService) {

    $scope.basketItemCount = 0;
    $scope.navigationService = navigationService;
    $scope.urlParserService = urlParserService;
    $scope.deviceService = deviceService;

    var updateBasketItemCount = function () {
        $scope.basketItemCount = basketService.getSummary().quantity;
    };

    updateBasketItemCount();

    basketService
        .on('itemAdded', updateBasketItemCount)
        .on('itemRemoved', updateBasketItemCount)
        .on('cleared', updateBasketItemCount);

    $scope.showSearch = function () {
        $rootScope.$emit('header.searchButtonClicked');
    };
});
