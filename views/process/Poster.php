<?php
/**
 *
 */
class Userpost extends Db
{

  function __construct()
  {
    // code...
  }
  public function insert($fields)
  {
    $implodeColumns = implode(',', array_keys($fields));

    $implodePlaceholder = implode(", :", array_keys($fields));

    $sql = "INSERT INTO posts($implodeColumns) VALUES(:" . $implodePlaceholder . ")";

    $stmt = $this->connect()->prepare($sql);

    foreach ($fields as $key => $value) {
      $stmt->bindValue(':' . $key, $value);
    }

    $stmtExecute = $stmt->execute();

    if ($stmtExecute) {
    
    header('Location: ../mytodo.php');
    
    }

  }
}




 ?>
