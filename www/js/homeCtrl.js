angular.module("starter")
  .controller('homeCtrl', ['$scope', function($scope) {

    var vm = $scope;
    vm.data = {
      nav:null,
      for:null,
      slideIndex:0
    };
    vm.slides = [
      {
      // "id": 1,
      // "title":"1",
      "url": 'https://placehold.it/1080x250'
    }, {
      // "id": 2,
      // "title":"2",
      "url": 'https://placehold.it/1080x250'
    }, {
      // "id": 3,
      // "title":"3",
      "url": 'https://placehold.it/1080x250'
    }, {
      // "id": 4,
      // "title":"4",
      "url": 'https://placehold.it/1080x250'
    },
    {
      // "id": 4,
      // "title":"4",
      "url": 'https://placehold.it/1080x250'
    }
    ,
    {
      // "id": 4,
      // "title":"4",
      "url": 'https://placehold.it/1080x250'
    },
    {
      // "id": 4,
      // "title":"4",
      "url": 'https://placehold.it/1080x250'
    },
    {
      // "id": 4,
      // "title":"4",
      "url": 'https://placehold.it/1080x250'
    }

  ];


  }]);
