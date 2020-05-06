//1-я книга
db.resourses.insertOne(
  {
    "book_title":"История любви",
    "isbn":11111,
    "publisher":"Глобус",
    "publishing_year":2015,
    "pages":500,
    "author":["Иванов", "Смирнов"]
  }
)
//2-я книга
db.resourses.insertOne(
  {
    "book_title":"Предложение года",
    "isbn":22222,
    "publisher":"Одиссей",
    "publishing_year":2010,
    "pages":299,
    "author":"Макаров"
  }
)

//3-я книга
db.resourses.insertOne(
  {
    "book_title":"Публичные отношения",
    "isbn":33333,
    "publisher":"Фактор",
    "publishing_year":2019,
    "pages":350,
    "author":["Макаров","Алексеев"]
  }
)

//4-я книга
db.resourses.insertOne(
  {
    "book_title":"Лучшие друзья",
    "isbn":44444,
    "publisher":"Одиссей",
    "publishing_year":2015,
    "pages":150,
    "author":"Соболев"
  }
)
//5-я книга
db.resourses.insertOne(
  {
    "book_title":"Неизвестный",
    "isbn":55555,
    "publisher":"Одиссей",
    "publishing_year":2020,
    "pages":399,
    "author":"Макаров"
  }
)
//6-я книга
db.resourses.insertOne(
  {
    "book_title":"Чёрная дыра",
    "isbn":66666,
    "publisher":"Глобус",
    "publishing_year":2016,
    "pages":125,
    "author":"Смирнов"
  }
)
//7-я книга
db.resourses.insertOne(
  {
    "book_title":"Фантастические приключения",
    "isbn":77777,
    "publisher":"Одиссей",
    "publishing_year":2017,
    "pages":450,
    "author":["Алексеев","Соболев"]
  }
)
//8-я книга
db.resourses.insertOne(
  {
    "book_title":"Зеркало",
    "isbn":88888,
    "publisher":"Время",
    "publishing_year":2008,
    "pages":799,
    "author":"Иванов"
  }
)

//Поиск книги по автору
db.resourses.find({author:"Иванов"})
//----------------------------------------------------

//1-й журнал
db.resourses.insertOne(
  {
    "magazine_title":"Украинская правда",
    "yearOfIssue":2019,
    "number":12345
  }
)
//2-й журнал
db.resourses.insertOne(
  {
    "magazine_title":"Семон",
    "yearOfIssue":2015,
    "number":12354
  }
)
//3-й журнал
db.resourses.insertOne(
  {
    "magazine_title":"Pink",
    "yearOfIssue":2020,
    "number":54321
  }
)
//Поиск по датам
db.resourses.find({$or:[{publishing_year: {$gt:2008, $lt:2015}},{yearOfIssue: {$gt:2008, $lt:2015}}]})


//1-я газета
db.resourses.insertOne(
  {
    "newspaper_title":"Курьер",
    "release_date":{
      "day":15,
      "month":5,
      "year":2019
    }
  }
)

//2-я газета
db.resourses.insertOne(
  {
    "newspaper_title":"Дайжест",
    "release_date":{
      "day":14,
      "month":3,
      "year":2015
    }
  }
)

//3-я газета
db.resourses.insertOne(
  {
    "newspaper_title":"Квант",
    "release_date":{
      "day":2,
      "month":3,
      "year":2019
    }
  }
)
//4-я газета
db.resourses.insertOne(
  {
    "newspaper_title":"Сад и огород",
    "release_date":{
      "day":15,
      "month":5,
      "year":2000
    }
  }
)
//Поиск по датам
db.resourses.find({$or:[
  {publishing_year: {$gte:2000, $lt:2016}},
  {yearOfIssue: {$gte:2000, $lt:2016}},
  {"release_date.year":{$gte:2000, $lt:2016}}
    ]
  }
)
