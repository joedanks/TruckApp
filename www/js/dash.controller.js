angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, TruckService, CallService) {

    let localTruckId = window.localStorage.getItem('truckId');

    TruckService.getTruckIds().then((response) => {
      this.trucks = response.data;
      console.log(response);
      if(localTruckId) {
        this.selectedTruckId = localTruckId;
        this.updateSelectedTruck();
      }
    });

    this.updateSelectedTruck = () => {
      CallService.getActiveCall(this.selectedTruckId).then((response) => {
        localTruckId = this.selectedTruckId;
        window.localStorage.setItem('truckId', this.selectedTruckId);
        this.activeCall = response.data;
        if(navigator.userAgent.match(/(Android)/)) {
          this.activeCall.pickUpURL = "geo:?q="+encodeURIComponent(this.activeCall.pickUpLocation);
        } else {
          this.activeCall.pickUpURL = "http://maps.google.com?q="+encodeURIComponent(this.activeCall.pickUpLocation);
        }
      });
    };

  });
