//ionic中使用得是ui-router路由服务
var app = angular.module('app',["ionic","ui.router"]);
//配置路由，使用ui-router
app.config(function ($stateProvider,$urlRouterProvider) {
	//通过url..provider配置地址不在路由表范围内时的跳转页面
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state("home",{
		url:'/home',
		templateUrl:"template/home.html",
		controller:"homeController"
	})
	.state('detail',{
		url:'/detail/:name/:city/:country/:age',
		templateUrl:"template/detail.html",
		controller:"detailController"
	})
})