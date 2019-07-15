<?php
    require_once 'config/config.php';
    // session_start();

    if (isset($_SESSION['access_token'])) {

        $client->setAccessToken($_SESSION['access_token']);

    }else if (isset($_GET['code'])) {

        $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
        $_SESSION['access_token'] = $token;

    }else {

        if (isset($_SESSION['user'])) {
            header("location: views/");
            // echo 'working';
        }else {
            Header("location: index.php");
        }

    }
// Authentiction with google_Client
    $Oauth = new Google_Service_Oauth2($client);
// Authentiction with UploadCare

    $user = $Oauth->userinfo->get();


    $userData['name'] = $user->name;
    $userData['email'] = $user->email;
    $userData['gender'] = $user->gender;
    $userData['pageLink'] = $user->link;
    $userData['picture'] = $user->picture;
    
    $_SESSION['user'] = $userData;

    // echo '<pre>';
    // print_r($userData);






    header("location: views/");
    // print_r($userData);
