/*
    Instead of making a $http.post('/api/shows') request directly from the controller, 
    I have injected the Show service so we could use the save() method provided by $resource module. 
    The code is now slightly cleaner (URL is no longer hard coded in the controller) and more consistent 
    with the rest of the code. I should have done that in the first place since I am advocating for 
    keeping $http out of the controllers and leave that job to services.
*/
angular.module("MyApp")
  .controller('AddCtrl', ['$scope', '$alert', 'Show', function($scope, $alert, Show) {
  	$scope.addShow = function() {
  		Show.save({ showName: $scope.showName },
  			function() {
  				$scope.showName = '';
  				$scope.addForm.$setPristine();
  				$alert({
  					content: 'TV show has been added.',
  					placement: 'top-right',
  					type: 'success',
  					duration: 3
  				});
  			},
  			function(response) {
  				$scope.showName = '';
  				$scope.addForm.$setPristine();
  				$alert({
  					content: response.data.message,
  					placement: 'top-right',
  					type: 'danger',
  					duration: 3
  				});
  			});
  	};
  }]);