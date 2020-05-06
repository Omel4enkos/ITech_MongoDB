<?php
$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->library->resourses;
$cursor = $collection->distinct("author");
$array = array();
foreach ($cursor as $a){
    $array[]=$a;
}
$_SESSION['author'] = $array;
