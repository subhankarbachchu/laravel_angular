var app = angular.module('laravel_angular', [])
        .constant('API_URL', 'http://localhost:8000/laravel_angular/public/api/v1/');

app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<%=');
    $interpolateProvider.endSymbol('%>');
});
