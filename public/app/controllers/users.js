app.controller('usersController', function($scope, $http, API_URL) {

    //toggle between login and registration form
     /*$scope.toggle = function(form_type) {
        $scope.form_type = form_type;
        if (form_type == 'login') {     // login
            $("ul").empty();
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $("#login-form-link").addClass('active');
            //e.preventDefault();
        } else {                        // registration
            $("ul").empty();
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $("#register-form-link").addClass('active');
            //e.preventDefault();
        }
    }*/  


    $scope.toggle = function(form_type) {
        $scope.form_type = form_type;
        $("ul").empty();
        $(".form-tab").fadeOut(100);
        $("#"+form_type+"-form").delay(100).fadeIn(100);
        $(".form-link").removeClass('active');
        $("#"+form_type+"-form-link").addClass('active');
        //e.preventDefault();       
    }   

    //login
    /*$scope.login = function() {
        var url = "/laravel_angular/users/login";
        $http({
            method: 'POST',
            url: url,
            data: $.param($scope.users),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(response) {
            console.log(response);
            //location.reload();
        }).error(function(response) {
            console.log(response);
            alert('This is embarassing. An error has occured. Please check the log for details');
        });
    }*/


    //logout
    $scope.confirmLogout = function(id) {
        var isConfirmLogout = confirm('Are you sure you want logout?');
        if (isConfirmLogout) {
            $http({
                method: 'GET',
                url: '/laravel_angular/users/logout/'
            }).
            success(function(data) {
                //console.log(data);
                location.reload();
            }).
            error(function(data) {
                console.log(data);
                alert('Unable to logout');
            });
        } else {
            return false;
        }
    }
});