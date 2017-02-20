angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, TruckService, CallService) {

    let localTruckId = window.localStorage.getItem('truckId');

    TruckService.getTruckIds().then((response) => {
      this.trucks = response.data;
      console.log(response);
    });

    this.updateSelectedTruck = () => {
      CallService.getActiveCall(this.selectedTruckId).then((response) => {
        this.activeCall = response.data;
      });
    };

  });
