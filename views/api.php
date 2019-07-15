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


echo $posts;

//post with more than 5 comments
$posttrends = Post::has('comments', '>=', 5)->withCount('comments')->orderBy('id', 'desc')->get();

require_once "process/Getuserdata.php";
$Userdata = new Userdata();


$profiles = $Userdata->Userprofiles();

// echo $posttrends;


// if (!isset($_SESSION['user'])) {
//     header("location: ../login.php");
// }

?>
