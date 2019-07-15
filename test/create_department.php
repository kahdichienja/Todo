<?php
require 'vendor/autoload.php';
$message = '';
if (isset($_POST['submit'])) {
    Department::insert([
        'name' => $_POST['name']
    ]);
    $message = 'Department inserted Successfuly';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="green">
        <?php if(!empty($message)):?>
            <?= $message; ?>
        <?php endif; ?>
    </div>
    <form action="" method="post">
        <label for="name">Department name</label>
        <input type="text" name="name" id="">
        <input type="submit" value="submint" name="submit">
    </form>

</body>
</html>
