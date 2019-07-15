<?php
require '../../vendor/autoload.php';
$message = '';
if (isset($_POST['submit'])) {
    Comment::insert([
        'user_imgurl' => $_POST['user_imgurl'],
        'email' => $_POST['email'],
        'username' => $_POST['username'],
        'post_id' => $_POST['post_id'],
        'comment' => $_POST['comment']
    ]);
    header('Location: ../mytodo.php');
    // $message = 'Comment inserted Successfuly';
}
?>