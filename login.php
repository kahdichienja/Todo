<?php
    require_once 'config/config.php';
    $authUrl = $client->createAuthUrl();

    header("location: ".$authUrl );
    // print_r($client);