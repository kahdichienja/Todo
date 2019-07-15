<?php
    session_start();
    require_once "Db.php";
    require_once "Poster.php";
    
    if (isset($_POST['submit'])) {;
        $email = $_POST['email'];
        $message = $_POST['message'];
        $file_url = $_POST['qs-file'];
        $username = $_POST['username'];
        $user_imgurl = $_POST['user_imgurl'];
        // $unique_hash = $_POST['unique_hash'];
        
        // echo $message.'<br>';
        // echo $file_url.'<br>';
        // echo $username.'<br>';
        // echo $user_imgurl.'<br>';
       
        $fields = [
            'message' => $message,
            'email' => $email,
            'file_url' => $file_url,
            'username' => $username,
            'user_imgurl' => $user_imgurl,
            'unique_hash' => bin2hex(random_bytes(20))
        ];

        // echo '<pre>';
        // print_r($fields);
        $userpost = new Userpost();
        $userpost->insert($fields);
        
        
    }
?>