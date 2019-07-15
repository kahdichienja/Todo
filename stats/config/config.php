<?php

require_once './vendor/autoload.php';
session_start();
$client = new Google_Client();
$client->setAuthConfig('client_secret.json');

// what am calling the API for
$client->addScope(
    [
        Google_Service_Oauth2::PLUS_LOGIN,
        Google_Service_Oauth2::USERINFO_EMAIL,
        Google_Service_Oauth2::PLUS_ME
    ]
);

// redirect after AUTHENTICATION http://developer.al-masi.com/stats/callback.php
$client->setRedirectUri("http://developer.al-masi.com/stats/callback.php");

