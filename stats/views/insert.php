<?php
error_reporting(0);
require '../vendor/autoload.php';
$message = '';
if (isset($_POST['submit'])) {
    $checkBox = implode(',', $_POST['visitedwebsites']);
    if(empty( $_POST['gender'])){?>
        <script>
        alert('Gender Missing??');
        window.location.href = 'http://developer.al-masi.com/stats/views/';  
    </script>
    <?php 
    }
    if(empty( $_POST['age'])){?>
        <script>
        alert('Age Missing??');
        window.location.href = 'http://developer.al-masi.com/stats/views/';  
    </script>
    <?php 
    }
    Stat::insert([
        'username' => $_POST['username'],
        'gender' => $_POST['gender'],
        'age' => $_POST['age'],
        'education' => $_POST['education'],
        'faculty' => $_POST['faculty'],
        'hostel' => $_POST['hostel'],
        'religion' => $_POST['religion'],
        'networkarea' => $_POST['networkarea'],
        'networkvisit' => $_POST['networkvisit'],
        'socialmedia' => $_POST['socialmedia'],
        'yinternet' => $_POST['yinternet'],
        'visitedwebsites' =>  $checkBox,
        'socialschool' => $_POST['socialschool']
    ]);
    ?>
    <script>
        alert('Data collected Successfuly');
        window.location.href = 'http://developer.al-masi.com/stats/views/';  
    </script>
    <?php
}
