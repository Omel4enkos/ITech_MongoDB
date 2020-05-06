<?php
require '../vendor/autoload.php';

session_start();
header('Content-Type: application/json');
header("Cache-Control: no-cache, must-revalidate");

$auth = $_REQUEST['auth'];
$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->library->resourses;
//$filter = array("book_title","isbn","publisher","publishing_year","pages","author");
$filter = array("author"=>$auth);
$optiong  = ['projection' => ['_id' => 0]];
$cursor = $collection->find($filter,$optiong)->toArray();
$arr = array();
$author = array();
foreach($cursor as $c)
{
    $book_title = $c["book_title"];
    $isbn = $c["isbn"];
    $publisher = $c["publisher"];
    $publishing_year = $c["publishing_year"];
    $pages = $c["pages"];
    $author = $c["author"];
    for($i=0;$i<count($author);$i++){
        if($author[$i] == $auth) {
            $temp = array($book_title, $isbn, $publisher, $publishing_year, $pages, $author[$i]);
            array_push($arr, $temp);
        }
    }
}
//print_r($author);
//for($i=0;$i<count($author);$i++) {
////    if ($author[$i] == "Иванов") {
//        echo $author[$i];
////    }
//}

echo json_encode($arr);