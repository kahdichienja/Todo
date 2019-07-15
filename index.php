<?php

session_start();

if (isset($_SESSION['user'])) {
    header("location: views/mytodo.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link href="fonts/font.css" rel="stylesheet">
      <!--Import materialize.css-->
    <link rel="shortcut icon" type="image/jpeg" href="img/user.jpeg"/>  
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link type="text/css" rel="stylesheet" href="css/app.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="css/custome.css"  media="screen,projection"/>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src=""></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Home</title>
</head>

<body>
<nav class="white blue-grey lighten-5">
    <div class="nav-wrapper black-text">
      <a href="#!" class="brand-logo left black-text" style="margin-left: 3rem;">Todo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a class="black-text" href="index.php">Sign In</a></li>
        <li><a class="black-text" href="register.php">Sign Up</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav light-blue darken-1" id="mobile-demo">
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
    <li><a class="blue lighten-2" href="index.php"><i class="material-icons">person_pin</i> Sign In</a></li>
    <li><a class="blue lighten-1" href="register.php"><i class="material-icons">person_pin</i> Sign Up</a></li>
    <li>
        <div class="divider"></div>
    </li>
    <li><a class="blue darken-2" href="login.php"><i class="material-icons">more_vert</i> More</a></li>
  </ul>
    <div class="container">
        <div class="col s12 m7">
            <h2 class="header black-text">Login</h2>
                <div class="card horizontal">
                    <div class="card-image hide-on-med-and-down">
                        <img src="img/img1.jpg">
                    </div>
                <div class="card-stacked white blue-grey lighten-5">
                    <div class="card-content">
                        <form action="" method="post">
                            <div class="row">
                                <div class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">email</i>
                                        <input type="email" name="user_email">
                                        <label for="">Email Address</label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">visibility_off</i>
                                        <input type="password" name="user_password">
                                        <label for="">Password</label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col s12">
                                        <div class="input-field col s12">
                                            <button type="submit" class="btn">Sign In</button>
                                        </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-action">
                        <a href="login.php" class="waves-effect waves-light btn red"><i class="fab fa-google-plus-g fa-10x"></i> login with google</a>
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