<?php

class Db
{
    protected function connect()
    {
        // db connection
        try {
            // $conn = new PDO("mysql:host=host26; dbname=almasico_developer", 'almasico_developer', 'developer');
            $conn = new PDO("mysql:host=localhost; dbname=test", 'root', '');
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo 'connected';
            return $conn;

        } catch (PDOException $e) {
            echo 'not connected:' . $e->getMessage();

        }
    }
}