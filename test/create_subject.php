<?php
require 'vendor/autoload.php';
$departments = Department::all();
$message = '';
if (isset($_POST['submit'])) {
    Subject::insert([
        'name' => $_POST['name'],
        'department_id' => $_POST['department']
    ]);
    $message = 'Subject inserted Successfuly';
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
        <label for="name">Subject name</label>
        <input type="text" name="name" id="">
        <label for="name">Department</label>
        <select name="department" id="">
            <?php foreach ($departments as $department) : ?>          
                <option value="<?= $department->id ?>"><?= $department->name ?></option>
            <?php endforeach; ?>
        </select>
        <input type="submit" value="submint" name="submit">
    </form>

</body>
</html>
