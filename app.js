// (function () {
// 'use strict';
// angular.module('LunchCheck', [])
// .controller('LunchCheckController', LunchCheckController);
//
// LunchCheckController.$inject = ['$scope'];
// function LunchCheckController($scope) {
//   $scope.checkdisplay = function () {
//     if($scope.menu!=null&&$scope.menu!=''&&$scope.menu!=undefined)
//     {
// var menulist=$scope.menu.trim().split(',');
// var itemcount=0;
// for(var i=0;i<menulist.length;i++){
//   var item=menulist[i].trim();
//   if(item!=null&&item!=''&&item!=undefined)
//   itemcount++;
// }
// if(itemcount==0)
//     $scope.message ="";
// else if(itemcount<=3)
// {
//     $scope.message = "Enjoy ";
//     $scope.styleclass='green';
// }
// else{
//       $scope.message = "Too much ";
//       $scope.styleclass='red';
// }
// }
//   };
// }
//
// })();
!function(){"use strict";function e(e){e.checkdisplay=function(){if(null!=e.menu&&""!=e.menu&&null!=e.menu){for(var n=e.menu.trim().split(","),l=0,s=0;s<n.length;s++){var u=n[s].trim();null!=u&&""!=u&&null!=u&&l++}0==l?e.message="":l<=3?(e.message="Enjoy ",e.styleclass="green"):(e.message="Too much ",e.styleclass="red")}}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
