<?php

header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="utf8" ?>';
header("Cache-Control: no-cache, must-revalidate");
session_start();

require '../vendor/autoload.php';


//header('Content-Type: application/json');
//header("Cache-Control: no-cache, must-revalidate");


$publisher = $_REQUEST['publisher'];
$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->library->resourses;
//$filter = array("book_title","isbn","publisher","publishing_year","pages","author");
$filter = array("publisher"=>$publisher);
//$cursor = $collection->find($filter);
$cursor = $collection->find($filter)->toArray();


//$filter = array("publisher"=>$publisher);
//$filter = array("publisher"=>$publisher);
//$optiong  = ['projection' => ['_id' => 0]];
//$cursor = $collection->find($filter,$optiong);
//$arr = array();
//$author = array();
//foreach($cursor as $c)
//{
//    $book_title = $c["book_title"];
//    $isbn = $c["isbn"];
//    $publisher = $c["publisher"];
//    $publishing_year = $c["publishing_year"];
//    $pages = $c["pages"];
//    $author = $c["author"];
//    for($i=0;$i<count($author);$i++){
//        $temp = array($book_title,$isbn,$publisher,$publishing_year,$pages,$author[$i]);
//        array_push($arr, $temp);
//    }
//}
//echo json_encode($arr);



$author = array();
echo "<root>";

foreach ($cursor as $c){
    $book_title = $c["book_title"];
    $isbn = $c["isbn"];
    $publisher = $c["publisher"];
    $publishing_year = $c["publishing_year"];
    $pages = $c["pages"];
    $author = $c["author"];
    for($i=0;$i<count($author);$i++){
        print "<row><book_title>$book_title</book_title><isbn>$isbn</isbn><publisher>$publisher</publisher>
            <publishing_year>$publishing_year</publishing_year><pages>$pages</pages><author>$author[$i]</author>
            </row>";
    }
}

echo "</root>";
