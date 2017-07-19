'use strict';
var EventController= function($scope){
$scope.event = {
    name : 'Angular Boot Camp',
    date : '1/1/2003',
    time : '10:30 AM',
    location : {
        address : 'Google Headquarters',
        city : 'Mountain View',
        province : 'CA'
    },
    imageUrl : 'img/angularjs-logo.png',
    sessions : [
        { name: 'Directives Masterclass',
          creatorName : 'Bob Smith',
          duration : 1,
          level : 'Introductory',
          abstract : 'In this session you will learn the ins and outs of directives',
          upVoteCount:0
        },
        { name: 'Scopes for fun and profit',
          creatorName : 'John Doe',
          duration : 2,
          level : 'Introductory',
          abstract : 'In this session you will learn the ins and outs of directives',
          upVoteCount:0
        },
        { name: 'Well behaved controllers',
          creatorName : 'Jane Doe',
          duration : 4,
          level : 'Intermediate',
          abstract : 'In this session you will learn the ins and outs of directives',
          upVoteCount:0
        }
    ]
};

$scope.upVoteSession = function(session){
    session.upVoteCount++;
};
$scope.downVoteSession = function(session){
    session.upVoteCount--;
};

};

 
eventsApp.controller('EventController',EventController);