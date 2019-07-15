<?php

session_start();
require_once '../googleAPI/vendor/autoload.php';
use Uploadcare as Uploadcare;
use Uploadcare\Api;
define('UC_PUBLIC_KEY', 'de9130ae79540903c80e');
define('UC_SECRET_KEY', '66165d450ba4a59dd9ee');
$api = new Uploadcare\Api(UC_PUBLIC_KEY, UC_SECRET_KEY);
// eloquent
require '../vendor/autoload.php';
// likes
$likes = Like::orderBy('id', 'desc')->limit(5)->get();
// echo $likes->count();
$posts = Post::orderBy('id', 'desc')->get();
// more than 5 comments
$posttrends = Post::has('comments', '>=', 5)->withCount('comments')->orderBy('id', 'desc')->get();

require_once "process/Getuserdata.php";
$Userdata = new Userdata();

$profiles = $Userdata->Userprofiles();
if (!isset($_SESSION['user'])) {
    header("location: ../login.php");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link href="../fonts/font.css" rel="stylesheet">
      <!--Import materialize.css-->
    <link rel="shortcut icon" type="image/jpeg" href="../img/user.jpeg"/>
    <link type="text/css" rel="stylesheet" href="../css/bootstrap.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="../css/boot3.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="../css/app.css"  media="screen,projection"/>
    <script src="../js/jquery-3.3.1.min.js"></script>
<!-- uploadCare -->
<script src="../js/uploadcare.js"></script>
<script src="../js/uploadcare.tab-effects.js"></script>
<script>
  uploadcare.registerTab('preview', uploadcareTabEffects)
</script>
<script>
    UPLOADCARE_PUBLIC_KEY = 'de9130ae79540903c80e';
    // UPLOADCARE_TABS = 'file camera url facebook gdrive gphotos dropbox instagram evernote flickr skydrive box vk huddle';
    UPLOADCARE_EFFECTS = 'crop,rotate,mirror,flip,enhance,sharp,blur,grayscale,invert';
    UPLOADCARE_IMAGE_SHRINK = '1024x1024 50%';
    UPLOADCARE_IMAGES_ONLY = true;

    UPLOADCARE_IMAGES_ONLY = true;
    UPLOADCARE_CROP = 'free';

</script>
<!-- end uploadcare -->

    <script src="../js/jquery-3.3.1.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <!-- Place this tag in your head or just before your close body tag. -->
    <!-- <script src="https://apis.google.com/js/platform.js" async defer></script> -->
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
    <div  class="navbar-fixed">
        <nav class="white lighten-5 hoverable navbar-fixed">
            <div class="nav-wrapper">
            <a href="#!" style="margin-left: 25px;" id="myToggler" class="left brand-logo grey-text lighten-2"><i class="material-icons">menu</i> Todo</a>
            <div class="" style="position: absolute; left: 0%; transform: translate(-50%, -50%);" >
            <input type="text" class="hide-on-med-and-down" id="searchInput" placeholder="Search Todos">
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
                        <img src="../img/bg.jpeg">
                    </div>
                    <a href="#user"><img class="circle" src="<?=$_SESSION['user']['picture'];?>"></a>
                    <a href="#name"><span class="white-text name"><?=$_SESSION['user']['name'];?></span></a>
                    <a href="#email"><span class="white-text email"><?=$_SESSION['user']['email'];?></span></a>
                </div>
            </li>
                <li><a class="blue lighten-2" href="../login.php"><i class="material-icons">home</i> Home</a></li>
            <li>
                <div class="divider"></div>
            </li>
            <li><a class="blue lighten-1" href="trending.php"><i class="material-icons">star_half</i> Trending</a></li>
            <li><a class="blue darken-1" href="login.php"><i class="material-icons">bubble_chart</i> Groups</a></li>
            <li><a class="blue darken-1" href="profiles.php?details=<?=$_SESSION['user']['email'];?>"><i class="material-icons">person_pin</i> My Profiles</a></li>
            <li><a class="blue darken-1" href="login.php"><i class="material-icons">person_add</i> Followers</a></li>
             <li><a class="mb-5" href="http://developer.al-masi.com/stats/" id="liHover"><i class="material-icons">vpn_lock</i> Internet Of Things</a></li>
            <li><a class="blue darken-2" target="_blank" href="<?=$_SESSION['user']['pageLink'];?>"><i class="material-icons">more_vert</i> My Google Plus</a></li>
            <li><a class="blue darken-2" href="../views/logout.php"><i class="material-icons">visibility_off</i> logout</a></li>

        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger white-text"><i class="material-icons">menu</i></a>
        <!-- endnav -->


    </div>
