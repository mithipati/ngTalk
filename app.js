var resources = angular.module("resources", []);

resources.controller("ResourceController", function ($scope) {
  $scope.linkList = [
    { name: "ngTalk Extension" , url: "https://github.com/mithipati/ngTalkExt" },
    { name: "Thinkster Tutorial" , url: "http://www.thinkster.io/angularjs/GtaQ0oMGIl/a-better-way-to-learn-angularjs" },
    { name: "egghead screen casts" , url: "https://egghead.io/" },
    { name: "ng Newsletter" , url: "http://www.ng-newsletter.com/" },
    { name: "ng Magazine" , url: "https://flipboard.com/section/the-angularjs-magazine-bbIMWS" },
    { name: "Angular.js Repo" , url: "https://github.com/jmcunningham/AngularJS-Learning" },
    { name: "Angular.js O'Reilly Book" , url: "http://it-ebooks.info/book/2076/" },
    { name: "AngularJS: The Awesome Parts by Ari Lerney" , url: "http://vimeo.com/90388983" }
  ];
});
