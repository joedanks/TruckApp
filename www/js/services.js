angular.module('starter.services', [])

  .factory('Trucks', function ($http) {
    return {
      truckIds: function () {
        return $http({
          method: 'GET',
          url: 'https://perrystowingserver.herokuapp.com/trucks/ids'
        })
      },
      truck: function (id) {
        return $http({
          method: 'GET',
          url: 'https://perrystowingserver.herokuapp.com/trucks/' + id
        })
      }
    }
  })

  .factory('Calls', function ($http) {
    return {
      activeCall: function (truckId) {
        return $http({
          method: 'GET',
          url: 'https://perrystowingserver.herokuapp.com/calls/activeTruck/' + truckId
        })
      }
    }
  })

  .factory('DriverService', function ($http) {
    return {
      getAll: function (truckId) {
        return $http({
          method: 'GET',
          url: 'http://localhost:8080/trucks'
        })
      }
    }
  });
