var myApp = angular.module('perkisar', []);

myApp.controller('SkillsController', ['$scope', function ($scope) {
    $scope.skills = [
        { id: 1, icon: 'bootstrap-plain', tooltip: 'Bootstrap'},
        { id: 2, icon: 'html5-plain', tooltip: 'HTML5'},
        { id: 3, icon: 'css3-plain', tooltip: 'CSS3'},
        { id: 15, icon: 'angularjs-plain', tooltip: 'AngularJS'},
        { id: 4, icon: 'javascript-plain', tooltip: 'Javascript'},
        { id: 5, icon: 'jquery_logo', tooltip: 'jQuery'},
        { id: 6, icon: 'bower-plain', tooltip: 'Bower' },
        { id: 7, icon: 'coffeescript-original', tooltip: 'Coffeescript' },
        { id: 9, icon: 'github-plain', tooltip: 'Github' },
        { id: 11, icon: 'sass-original', tooltip: 'Sass' },
        { id: 12, icon: 'photoshop-line', tooltip: 'Photoshop' },
        { id: 13, icon: 'php-plain', tooltip: 'PHP' },
        { id: 14, icon: 'wordpress-plain', tooltip: 'Wordpress' }
    ]
}]);

