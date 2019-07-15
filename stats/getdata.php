<?php
  $dbhost = 'localhost';
  $dbname = 'test2';
  $dbuser = 'root';
  $dbpass = '';

// Create connection
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM posts";
$result = $conn->query($sql);


while ($row = $result->fetch_assoc()) {
    $data[] = $row['id'];
 }

 
 ?>
    <!-- <div class="container">
        <div id="container" class="card" style="width:100%; height:400px;"></div>
    </div>
    <script src="js/jquery.js"></script>
    <script src="js/graph.js"></script> -->
<script>
//  var chart = new Highcharts.Chart({
//        chart: {
//           renderTo: 'container',
//           type: 'bar'
//        },
//        title: {
//             text: 'Fruit Consumption'
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges', 'greens']
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruit eaten'
//             }
//         },
//        series: [{
//           data: [<?php echo join($data, ',') ?>],
//           pointStart: 0,
//           pointInterval: 1
//        }]
//  });
</script>





