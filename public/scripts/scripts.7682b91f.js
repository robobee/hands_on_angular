"use strict";angular.module("swFrontendApp",["ngCookies","ngResource","ngRoute","ngSanitize"]).factory("authInterceptor",["$q","$location",function(a,b){return{request:function(a){return a.headers=a.headers||{},localStorage.auth_token&&(a.headers.token=localStorage.auth_token),a},responseError:function(c){return 401===c.status&&b.path("/login"),a.reject(c)}}}]).config(["$httpProvider",function(a){a.interceptors.push("authInterceptor")}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html"}).when("/edges",{templateUrl:"views/edges.html",controller:"EdgesController"}).when("/login",{templateUrl:"views/login.html",controller:"LoginController"}).when("/admin",{templateUrl:"views/admin.html",controller:"AdminController"}).otherwise({redirectTo:"/"})}]),angular.module("swFrontendApp").controller("EdgesController",["$scope","edges","filterBy","ranks",function(a,b,c,d){a.edges=b.query(),a.ranks=d.query(),a.filterBy=c,a.deleteEdge=function(a){a.$delete()};var e=null;a.selectEdge=function(a){e=e===a?null:a},a.isSelected=function(a){return a===e},a.displayRequirements=function(a){for(var b="",c=0;c<a.length;c++)""!==b&&(b+=", "),a[c].name&&(b+=a[c].name+" "),b+=a[c].value;return b}}]),angular.module("swFrontendApp").controller("NavigationController",["$scope","$location","auth",function(a,b,c){a.isLoggedIn=c.isLoggedIn,a.logout=function(){var a=c.logout();a.then(function(){localStorage.removeItem("auth_token"),b.path("/login")})},a.isActive=function(a){var c=b.path().split("/")[1].split("?")[0];return c===a.split("/")[1]}}]),angular.module("swFrontendApp").directive("navbar",function(){return{restrict:"E",templateUrl:"views/navbar.html",controller:"NavigationController"}}),angular.module("swFrontendApp").factory("edges",["$resource",function(a){return a("/api/edges/:id",{id:"@id"})}]),angular.module("swFrontendApp").factory("categories",["$resource",function(a){return a("/api/categories")}]),angular.module("swFrontendApp").filter("edges",function(){return function(a,b){var c=function(a){for(var b={},c=0;c<a.length;c++)if("rank"===a[c].mode){b=a[c];break}return b.value};return a.filter(function(a,d,e){var f=a.category.name===b.category.name||"All"===b.category.name,g="All"===b.rank.name||c(a.requirements)===b.rank.name;return f&&g})}}),angular.module("swFrontendApp").service("ranks",function(){this.query=function(){return[{name:"All"},{name:"Novice"},{name:"Seasoned"}]}}),angular.module("swFrontendApp").controller("LoginController",["$scope","auth","$location",function(a,b,c){a.login=function(){if(a.loginForm.$valid){var c=b.login(a.user);c.then(d,e)}};var d=function(a){localStorage.setItem("auth_token",a.data.auth_token),c.path("/edges")},e=function(b){a.wrongCredentials=!0}}]),angular.module("swFrontendApp").directive("cuFocus",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){d.$focused=!1,b.bind("focus",function(b){a.$apply(function(){d.$focused=!0})}).bind("blur",function(b){a.$apply(function(){d.$focused=!1})})}}}),angular.module("swFrontendApp").service("auth",["$http",function(a){this.login=function(b){return a.post("/api/login",{email:b.email,password:b.password})},this.isLoggedIn=function(){return localStorage.getItem("auth_token")?!0:!1},this.logout=function(){return a["delete"]("/api/logout")}}]),angular.module("swFrontendApp").controller("AdminController",["$http","$scope","users",function(a,b,c){b.users=c.query()}]),angular.module("swFrontendApp").controller("FiltersController",["$scope","filterBy","ranks","categories",function(a,b,c,d){b.rank=a.ranks[0],a.categories=d.query(function(){a.categories.unshift({name:"All"}),b.category=a.categories[0]})}]),angular.module("swFrontendApp").value("filterBy",{search:"",category:null,rank:null}),angular.module("swFrontendApp").controller("NewEdgeController",["$scope","edges","ranks","categories",function(a,b,c,d){a.newEdge=new b,a.ranks=a.ranks.slice(1),a.categories=d.query(),a.createEdge=function(){var c=a.newEdge.$save();c.then(function(c){a.edges.push(c),a.newEdge=new b})}}]),angular.module("swFrontendApp").factory("users",["$resource",function(a){return a("/api/users")}]);