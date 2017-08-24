var EditEventController=function($scope)
{
    $scope.saveEvent = function(event,newEventForm){
        console.log(newEventForm.$valid);
        if(newEventForm.$valid){
        alert('event '+ event.name + ' is saved !!!');
        }
    };
    $scope.cancelEdit = function(event){
        window.location="/EventDetails.html";
    };

};
eventsApp.controller('EditEventController',EditEventController);