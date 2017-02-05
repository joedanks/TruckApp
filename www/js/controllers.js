angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Calls) {

  let localTruckId = window.localStorage.getItem('truckId');

  if(localTruckId) {
    Calls.activeCall(localTruckId).success(function(response){
      $scope.call = response;
      $scope.call.pickupUrl = encodeURI('geo://0,0?q='+response.pickUpLocation);
      console.log(response);
    });
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Trucks) {

  Trucks.truckIds().success(function(response) {
    $scope.truckIds = response;
    console.log(response);
    let localTruckId = window.localStorage.getItem('truckId');
    console.log(localTruckId);
    if(localTruckId) {
      $scope.truckIds.forEach(function(element){
        if(element.id == localTruckId) {
          $scope.truckId = element;
          $scope.getTruck(element);
        }
      })
    }
  });

  $scope.getTruck = function(truckId) {
    Trucks.truck(truckId.id).success(function(response){
      $scope.truck = response;
      window.localStorage.setItem('truckId', response.id);
    });
  }
});
