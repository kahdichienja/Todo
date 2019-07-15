<?php
include 'layouts/header.php';
if (isset($_SESSION['user'])) {
    header("location: views/");
}