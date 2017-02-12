angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Calls) {

  let localTruckId = window.localStorage.getItem('truckId');

  $scope.message = 'Test Message';

  if(localTruckId) {
    Calls.activeCall(localTruckId).success(function(response){
      $scope.call = response;
      $scope.call.pickupUrl = encodeURI('geo://0,0?q='+response.pickUpLocation);
      console.log(response);
    });
  }
});
