<?php

session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link href="fonts/font.css" rel="stylesheet">
      <!--Import materialize.css-->
    <link rel="shortcut icon" type="image/jpeg" href="img/user.jpeg"/>  
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <!-- <link type="text/css" rel="stylesheet" href="css/custome.css"  media="screen,projection"/> -->
    <script src="js/jquery.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Home</title>
</head>

<body>
    <div class="container">
        <ul id="slide-out" class="sidenav light-blue darken-1">
            <li>
                <div class="user-view">
                    <div class="background">
                        <img src="img/bg.jpeg">
                    </div>
                    <a href="#user"><img class="circle" src="img/user.jpeg"></a>
                    <a href="#name"><span class="white-text name">Welcome Guest</span></a>
                    <a href="#email"><span class="white-text email">guest@gmail.com</span></a>
                </div>
            </li>
                <li><a class="blue lighten-2" href="login.php"><i class="material-icons">home</i> Home</a></li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <!-- endnav -->
        <div class="row center-align">
            <h2 class="header blue-text center-align">Login <small>survey</small></h2>
            <div class="card hoverable col s4 grey lighten-4" style="position: absolute; left:25%; width: 50%;">
                <div class="card-content">
                    <div class="grid center-align">
                    <h1 class="center-align blue-text lighten-4">
                        <i class="fab fa-accusoft fa-2x"></i>
                    </h1>
                    
                        <a href="login.php" class="waves-effect waves-light btn red"><i class="fab fa-google fa-10x"></i> login with google</a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>


    <!--JavaScript at end of body for optimized loading-->
    
    <script type="text/javascript" src="js/app.js"></script>
    <script>
        $(document).ready(function(){
            $('.sidenav').sidenav();
        });
    </script>
</body>

</html>