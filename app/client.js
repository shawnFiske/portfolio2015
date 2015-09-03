'use strict';

require('angular/angular');
require('angular-animate');

var portfolioApp = angular.module('portfolioApp', ['ngAnimate']);

//controllers
require('./js/controllers/portfolio_controller.js')(portfolioApp);
require('./js/controllers/project_controller.js')(portfolioApp);

//directives
require('./js/directives/project_list_directive.js')(portfolioApp);

