angular.module('starter.services', [])


  .factory('TruckService', function ($http) {
    return {
      getTruckIds: function () {
        return $http({
          method: "GET",
          url: window.ServiceUrl + "/trucks/ids"
        })
      },
      truck: function (id) {
        return $http({
          method: "GET",
          url: window.ServiceUrl + "/trucks/" + id
        })
      }
    }
  })

  .factory('CallService', function ($http) {
    return {
      getActiveCall: function (truckId) {
        return $http({
          method: "GET",
          url: window.ServiceUrl + "/calls/activeTruck/" + truckId
        })
      }
    }
  })

  .factory('DriverService', function ($http) {
    return {
      getAll: function (truckId) {
        return $http({
          method: 'GET',
          url: window.ServiceUrl + "/trucks"
        })
      }
    }
  });
