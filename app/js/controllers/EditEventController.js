var EditEventController=function($scope)
{
    $scope.saveEvent = function(event){
        alert('event '+ event.name + ' is saved !!!');
    };
    $scope.cancelEdit = function(event){
        window.location="/EventDetails.html";
    };

};
eventsApp.controller('EditEventController',EditEventController);