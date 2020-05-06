<?php
//require '../vendor/autoload.php';
$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->library->resourses;
$cursor = $collection->distinct("publisher");
$array = array();
foreach ($cursor as $a){
    $array[]=$a;
}
$_SESSION['publisher'] = $array;