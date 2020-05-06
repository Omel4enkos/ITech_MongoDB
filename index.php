<?php
session_start();
require 'vendor/autoload.php';
require_once 'php/select-publisher.php';
require_once 'php/select-author.php';
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №3</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/table.css">
    <script src="main.js"></script>
</head>
<body>
<div class="dropdown">
    <div class="dropdown-content">
        <div class="Top-text">
    <p><u><b>Вариант 0</b></u>. Создать и заполнить БД для хранения информации о литературных ресурсах библиотеки
        (книгах, газетах, журналах).<br></p>
        <p>Для описания множества литературных ресурсов достаточно использовать одну коллекцию.</p>
        <p>Каждый ресурс, представленный в виде документа в составе коллекции, характеризуется набором свойств<br></p>
        </div>
    </div>
</div>

<div class="div-task">
    <div class="task">
       <p> Предоставить пользователю возможность получения информации о:</p>
    </div>
</div>

<div class="position">
    <ul class="list">
        <li id="li1">Литературе указанного издательства</li>
    </ul>
    <div class="li2">
        <ul class="list">
            <li id="li2">Литературе, за указанный период</li>
        </ul>
    </div>
    <div class="li3">
        <ul class="list">
            <li id="li3">Литературе указанного автора</li>
        </ul>
    </div>
</div>
<div class="box">

    <div class = "select">
        <label class="label" for="publisher">Выберите издательство:</label>
        <select name="publisher" class="select-publisher" id="publish" onchange="Select1()">
            <option hidden disabled selected>Виды:</option>
            <?php
            for($i=0;$i<count($_SESSION['publisher']);$i++):?>
                <option value="<?=$_SESSION['publisher'][$i]?>"><?=$_SESSION['publisher'][$i]?></option>
            <?php endfor; ?>
        </select><br>
        <div class="div-btn">
            <input type="button" class="select-btn" value="Выбрать" onclick="First()">
            <input type="button" class="select-btn" value="getItem" onclick="ChangedSelect1()">
        </div>
    </div>

    <div class = "select">
        <label class="label" for="year">Выберите период издания:<br></label>
        <div class="div-year">
            <select class="select-year" name="year[]" id="year" multiple>
                <?php for($i = 2000; $i <= date('Y'); $i++): ?>
                    <option value="<?=$i?>"><?=$i?></option>
                <?php endfor; ?>
            </select><br>
        </div>
        <div class="year-btn">
            <input type="button" class="btn2" value="Выбрать" onclick="Second()">
            <input type="button" class="btn2" value="getItem" onclick="ChangedSelect2()">
        </div>
    </div>

    <div class = "select">
        <label class="label" for="authors">Выберите нужного автора:<br></label>
        <div class="div-year">
            <select name="authors" class="select-author" id="author" onchange="Select3()">
                <option hidden disabled selected>Автор:</option>
                <?php
                for($i=0;$i<count($_SESSION['author']);$i++):?>
                    <option value="<?=$_SESSION['author'][$i]?>"><?=$_SESSION['author'][$i]?></option>
                <?php endfor; ?>
            </select>
        </div>
        <div class="div-btn">
            <input type="button" class="select-btn" value="Выбрать" onclick="Third()">
            <input type="button" class="select-btn" value="getItem" onclick="ChangedSelect3()">
        </div>
    </div>
</div>
<div class="position2">
    <p class="msg none" id="msg">Some Error</p>
    <p class="msg2 none" id="msg2">Some Error</p>
    <p class="msg3 none" id="msg3">Some Error</p>
</div>

<div class="margin"></div>
<table class="book-table none" id="book-table">
    <thead>
    <tr>
        <th>Название</th>
        <th>Номер</th>
        <th>Издатель</th>
        <th>Год издания</th>
        <th>Страницы</th>
        <th>Автор</th>
    </tr>
    </thead>
    <tbody id="res1"></tbody>
</table>
<div class="margin"></div>
<table class="book-table2 none" id="book-table2">
    <thead>
    <tr>
        <th>Название</th>
        <th>Номер</th>
        <th>Издатель</th>
        <th>Год издания</th>
        <th>Страницы</th>
        <th>Автор</th>
    </tr>
    </thead>
    <tbody id="res11"></tbody>
</table>






<div class="margin"></div>
<table class="book-table none" id="year-table">
    <thead>
    <tr>
        <th>Название книги</th>
        <th>Номер</th>
        <th>Издатель</th>
        <th>Год издания</th>
        <th>Страницы</th>
        <th>Автор</th>
        <th>Название журнала</th>
        <th>Год выпуска</th>
        <th>Номер</th>
        <th>Название газеты</th>
        <th>Дата</th>
    </tr>
    </thead>
    <tbody id="res2"></tbody>
</table>

<div class="margin"></div>
<table class="book-table2 none" id="year-table2">
    <thead>
    <tr>
        <th>Название книги</th>
        <th>Номер</th>
        <th>Издатель</th>
        <th>Год издания</th>
        <th>Страницы</th>
        <th>Автор</th>
        <th>Название журнала</th>
        <th>Год выпуска</th>
        <th>Номер</th>
        <th>Название газеты</th>
        <th>Дата</th>
    </tr>
    </thead>
    <tbody id="res22"></tbody>
</table>






<div class="margin"></div>
<table class="book-table none" id="author-table">
    <thead>
    <tr>
        <th>Название</th>
        <th>Номер</th>
        <th>Издатель</th>
        <th>Год издания</th>
        <th>Страницы</th>
        <th>Автор</th>
    </tr>
    </thead>
    <tbody id="res3"></tbody>
</table>
<div class="margin"></div>
<table class="book-table2 none" id="author-table2">
    <thead>
    <tr>
        <th>Название</th>
        <th>Номер</th>
        <th>Издатель</th>
        <th>Год издания</th>
        <th>Страницы</th>
        <th>Автор</th>
    </tr>
    </thead>
    <tbody id="res33"></tbody>
</table>


</body>
</html>