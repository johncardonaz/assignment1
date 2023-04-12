angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {

  $scope.checkIfTooMuch = function(){
  if (!$scope.lunchItems){
    $scope.color="red";
    $scope.message = "Please entre data first. Thank you."
  }else{
    var cont = 0;
    var items = $scope.lunchItems.split(",");
    for (i=0;i<=items.length;i++){
      if (items[i]!=""){
         cont ++;
      }
    }cont--;
    if (cont<=3){
      $scope.message="Enjoy!!!";
      $scope.color="green";
    }else {
      $scope.message="Too much";
      $scope.color="green";
    }
  }
  };
  };
