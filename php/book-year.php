<?php
session_start();

require '../vendor/autoload.php';

//header('Content-Type: text/xml');
/*echo '<?xml version="1.0" encoding="utf8" ?>';*/
//header("Cache-Control: no-cache, must-revalidate");

header('Content-Type: application/json');
header("Cache-Control: no-cache, must-revalidate");

$first_year = $_REQUEST['first_year'];
$last_year = $_REQUEST['last_year'];
$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->library->resourses;
$filter = array('$or' => array(array('publishing_year' =>array('$gte'=>(integer)$first_year, '$lte'=>(integer)$last_year)),
    array('yearOfIssue' =>array('$gte'=>(integer)$first_year, '$lte'=>(integer)$last_year)),
    array("release_date.year" =>array('$gte'=>(integer)$first_year, '$lte'=>(integer)$last_year))));


$optiong  = ['projection' => ['_id' => 0]];
$cursor = $collection->find($filter,$optiong)->toArray();
$author = array();
$arr = array();
//echo "<root>";
foreach ($cursor as $c) {
//   print_r($c);
    if (isset($c["book_title"])) {
        $book_title = $c["book_title"];
    } else {
        $book_title = "---";
    }
    if (isset($c["isbn"])) {
        $isbn = $c["isbn"];
    } else {
        $isbn = "---";
    }
    if (isset($c["publisher"])) {
        $publisher = $c["publisher"];
    } else {
        $publisher = "---";
    }
    if (isset($c["publishing_year"])) {
        $publishing_year = $c["publishing_year"];
    } else {
        $publishing_year = "---";
    }
    if (isset($c["pages"])) {
        $pages = $c["pages"];
    } else {
        $pages = "---";
    }
    if (isset($c["author"])) {
        $author = $c["author"];
    } else {
        $author = "---";
    }
    if (isset($c["magazine_title"])) {
        $magazine_title = $c["magazine_title"];
    } else {
        $magazine_title = "---";
    }
    if (isset($c["yearOfIssue"])) {
        $yearOfIssue = $c["yearOfIssue"];
    } else {
        $yearOfIssue = "---";
    }
    if (isset($c["number"])) {
        $number = $c["number"];
    } else {
        $number = "---";
    }

    if (isset($c["newspaper_title"])) {
        $newspaper_title = $c["newspaper_title"];
    } else {
        $newspaper_title = "---";
    }
    if (isset($c["release_date"])) {
        $release_date = $c['release_date']['day'] . "." . $c['release_date']['month'] . "." . $c['release_date']['year'];
    } else {
        $release_date = "---";
    }

        $temp = array($book_title, $isbn, $publisher, $publishing_year, $pages, $author,$magazine_title,
            $yearOfIssue,$number, $newspaper_title,$release_date  );
        array_push($arr, $temp);


//        print("<row><book_title>$book_title</book_title>
//                <isbn>$isbn</isbn>
//                <publisher>$publisher</publisher>
//                <publishing_year>$publishing_year</publishing_year>
//                <pages>$pages</pages>
//                <magazine_title>$magazine_title</magazine_title>
//                <yearOfIssue>$yearOfIssue</yearOfIssue>
//                <number>$number</number>
//                <newspaper_title>$newspaper_title</newspaper_title>
//                <release_date>$release_date</release_date>
//                </row>");
 }

echo json_encode($arr);
//echo "</root>";
