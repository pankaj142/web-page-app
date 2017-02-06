
( function (){
 
    angular.module('myApp', [])
    
    .controller('firstController', firstController);
    
    firstController.$inject =["$scope"];
    function firstController ($scope){
        $scope.name="";
        $scope.elementArray=0;
        $scope.no=0;
        $scope.message="";
        
        $scope.countItems= function(){
            $scope.elementArray = $scope.name.split(",");
                $scope.no=$scope.elementArray.length;
            
            if($scope.name == "")
                $scope.message="Please enter data first";
            else if($scope.no <=3 && $scope.no > 0)
                $scope.message="Enjoy!";
            else
                $scope.message="Too much!";  
            
            
        };
    
    };
    
})();



