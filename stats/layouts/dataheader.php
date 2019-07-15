<?php

session_start();
require_once 'vendor/autoload.php';

if (!isset($_SESSION['user'])) {
    header("location: login.php");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link href="fonts/font.css" rel="stylesheet">
      <!--Import materialize.css-->
    <link rel="shortcut icon" type="image/jpeg" href="img/user.jpeg"/>
    <link type="text/css" rel="stylesheet" href="css/bootstrap.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="css/bootstrap.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="css/style.css"  media="screen,projection"/>
    <script src="js/jquery.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Place this tag in your head or just before your close body tag. -->
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <style>
        body{
            background-color: #e0e0e0;
        }
        #searchInput{
            margin: 70px 90px 8px 60rem;
            width:50%;
            background-color: #9e9e9e9e;
            border-radius: 5px;
            border-bottom: 0px;
        }
        #liHover:hover{
            text-decoration: none;
            background: white;
        }
        #sidenavLinks{
            position: relative;
            top: -4.25rem;
            left: 3rem;
        }
        div#btnfooter {
            margin-top: -2rem;
            background: #efefef;
        }
        #searchInput::placeholder {
            padding: 20px;
            color: #ffffff;
            font-family: 'Roboto' sans-serif;
        }
        .main-img img,
        .imgs img {
            width: 100%;
            cursor: pointer;
        }

        .imgs {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 8px;
        }

        @keyframes fadeIn {
            to {
                opacity: 1;
            }
        }

        .fade-in {
            opacity: 0;
            animation: fadeIn 1.5s ease-in 1 forwards;
        }
            @media (max-width: 650px) {
                #searchInput {
                    margin: 70px 90px 8px 30rem;
                    width: 10%;
                }
                #searchInput::placeholder {
                    padding: 0;
                    background-color: #fff;
                    height: auto;
                }
            }
        </style>
    <title>Home</title>
</head>

<body>
    <div  class="navbar-fixed z-depth-3">
        <nav class="white lighten-5 hoverable navbar-fixed">
            <div class="nav-wrapper">
            <a href="#!" style="margin-left: 25px;" id="myToggler" class="left brand-logo grey-text lighten-2"><i class="material-icons">menu</i> Analysis</a>
            <div class="" style="position: absolute; left: 0%; transform: translate(-50%, -50%);" >
            <input type="text" disabled class="hide-on-med-and-down" id="searchInput" placeholder="Search...">
            </div>
            <ul class="right">
                <li><a href="" title="Groups"><i class="material-icons grey-text lighten-2">bubble_chart</i></a></li>
                <li><a href="" title="Notifications"><i class="material-icons grey-text lighten-2">notifications</i></a></li>
                <li><a href="" title="<?=$_SESSION['user']['name'];?>"><img style="height: 40px; width: 40px; margin-right: 25px;" class="circle" src="<?=$_SESSION['user']['picture'];?>"></a></li>
            </ul>
            </div>
        </nav>
    </div>
    <div class="container">
        <ul id="slide-out" class="sidenav light-blue darken-1">
            <li>
                <div class="user-view">
                    <div class="background">
                        <img src="img/bg.jpeg">
                    </div>
                    <a href="#user"><img class="circle" src="<?=$_SESSION['user']['picture'];?>"></a>
                    <a href="#name"><span class="white-text name"><?=$_SESSION['user']['name'];?></span></a>
                    <a href="#email"><span class="white-text email"><?=$_SESSION['user']['email'];?></span></a>
                </div>
            </li>
                <li><a class="blue lighten-2" href="#"><i class="material-icons">home</i> Home</a></li>
            <li>
                <div class="divider"></div>
            </li>
            <li><a class="blue lighten-1" href="data.php"><i class="material-icons">assessment</i> Analysis</a></li>
            <li><a class="blue darken-2" target="_blank" href="<?=$_SESSION['user']['pageLink'];?>"><i class="material-icons">more_vert</i> My Google Plus</a></li>
            <li><a class="blue darken-2" href="logout.php"><i class="material-icons">visibility_off</i> logout</a></li>

        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger white-text"><i class="material-icons">menu</i></a>
        <!-- endnav -->


    </div>
