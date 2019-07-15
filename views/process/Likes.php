<?php
require '../../vendor/autoload.php';
$message = '';
if (isset($_POST['submit'])) {

    $email = $_POST['email'];
    $id = $_POST['post_id'];
    $likes = Like::all();
    // echo $likes->count();
    foreach ($likes as $like) {
        if ($like->email == $email && $like->post_id == $id) {
            // DB::table('likes')
            // ->where('post_id', $id)
            // ->update(['like_count' => 0]);
            echo 'email already exist';
            header("location: ../mytodo.php");
            die();
        }
    }
    Like::insert([
        'email' => $_POST['email'],
        'post_id' => $_POST['post_id'],
        'like_count' => $_POST['like_count'],
        'userprofile' => $_POST['userprofile']
    ]);
    header("location: ../mytodo.php");
}
?>