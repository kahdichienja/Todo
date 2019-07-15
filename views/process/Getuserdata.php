<?php
// class Db
// {
//     protected function connect()
//     {
//         // db connection
//         try {
//             $conn = new PDO("mysql:host=host26; dbname=almasico_developer", 'almasico_developer', 'developer');
//             $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//             // echo 'connected';
//             return $conn;

//         } catch (PDOException $e) {
//             echo 'not connected:' . $e->getMessage();

//         }
//     }
// }

class Userdata extends Db
{
    //  select from db
  public function select()
  {
    $sql = "SELECT * FROM posts ORDER BY created_at DESC";
    // $sql = "SELECT * FROM comments LEFT JOIN posts ON posts.id = comments.post_id";

    $result = $this->connect()->query($sql);

    if ($result->rowCount() > 0) {
      while ($row = $result->fetch()) {
        $data[] = $row;
      }

      return $data;
    } else {
      $msg = 'no data in the DB';
      // echo $msg;
    }

  }
  public function Userprofiles()
  {
    if (isset($_GET['details'])){
    $email = $_SESSION['user']['email'];
    $sql = "SELECT * FROM posts WHERE email = '$email' ORDER BY id DESC";
    $result = $this->connect()->query($sql);

      if ($result->rowCount() > 0) {
        while ($row = $result->fetch()) {
          $data[] = $row;
        }

        return $data;
      } else {
        $msg = 'no data in the DB';
        // echo $msg;
      }
    }


  }


}