const ajax = new XMLHttpRequest();
function Select1() {
    let savedText = document.getElementById("publish");
    console.log(savedText.value);
    localStorage.setItem("savedText",savedText.value);
}
function ChangedSelect1() {
    let text = localStorage.getItem('savedText');
    let msg = document.getElementById('msg');
    let msg2 = document.getElementById('msg2');
    let msg3 = document.getElementById('msg3');

    msg.classList.remove("none");
    msg2.classList.remove("none");
    msg3.classList.remove("none");

    msg.classList.remove("visibility");
    msg2.classList.add("visibility");
    msg3.classList.add("visibility");
    console.log(text);
    if(text ==null){
        // let msg = document.getElementById('msg');
        msg.classList.remove("none");
        msg.innerText = "Ранее не выбиралось"
    }
    else {
        // let msg = document.getElementById('msg');
        // let msg2 = document.getElementById('msg2');
        // let msg3 = document.getElementById('msg3');

        msg.classList.remove("none");
        msg2.classList.remove("none");
        msg3.classList.remove("none");

        msg.classList.remove("visibility");
        msg2.classList.add("visibility");
        msg3.classList.add("visibility");

        msg.innerText ="receivedItem: " + localStorage.getItem('savedText');

        ajax.open("Get","php/book-publisher.php?publisher=" + text,true);

        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4) {
                if (ajax.status === 200) {
                    let second_table2 = document.getElementById("book-table2");
                    second_table2.classList.remove("none");
                    let res = document.getElementById("res11");
                    let rows = ajax.responseXML.firstChild.children;
                    let result = "";
                    for(let i=0;i<rows.length;i++){
                        result+="<tr>";
                        result+="<td>" + rows[i].children[0].textContent + "</td>";
                        result+="<td>" + rows[i].children[1].textContent + "</td>";
                        result+="<td>" + rows[i].children[2].textContent + "</td>";
                        result+="<td>" + rows[i].children[3].textContent + "</td>";
                        result+="<td>" + rows[i].children[4].textContent + "</td>";
                        result+="<td>" + rows[i].children[5].textContent + "</td>";
                        result+="</tr>";
                    }
                    res.innerHTML = result;
                }
            }
        }
        ajax.send();

    }
}
function First() {
    let publish = document.getElementById("publish").value;
    ajax.open("Get","php/book-publisher.php?publisher=" + publish,true);
    let select = document.getElementById("publish").options[0].value;

    let second_table = document.getElementById("year-table");
    let second_table2 = document.getElementById("year-table2");
    let third_table = document.getElementById("author-table");
    let third_table2 = document.getElementById("author-table2");

    let msg = document.getElementById('msg');
    let msg2 = document.getElementById('msg2');
    let msg3 = document.getElementById('msg3');

    msg.classList.remove("none");
    msg2.classList.remove("none");
    msg3.classList.remove("none");

    msg.classList.remove("visibility");
    msg2.classList.add("visibility");
    msg3.classList.add("visibility");

    second_table.classList.add("none");
    second_table2.classList.add("none");
    third_table.classList.add("none");
    third_table2.classList.add("none");

    if (publish == select){
        msg.innerText = "Вы не выбрали издательство";
    }
    else {
        second_table.classList.add("none");
        second_table2.classList.add("none");
        third_table.classList.add("none");
        third_table2.classList.add("none");
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    // let result = JSON.parse(ajax.response);
                    // let res = document.getElementById("res1");
                    // let none = document.getElementById("book-table");
                    // none.classList.remove("none");
                    // let list="";
                    // for (let i = 0; i < result.length; i++) {
                    //     list += "<tr>";
                    //     list += "<td>" + result[i][0] + "</td>";
                    //     list += "<td>" + result[i][1] + "</td>";
                    //     list += "<td>" + result[i][2] + "</td>";
                    //     list += "<td>" + result[i][3] + "</td>";
                    //     list += "<td>" + result[i][4] + "</td>";
                    //     list += "<td>" + result[i][5] + "</td>";
                    //     list += "</tr>";
                    // }
                    // res.innerHTML = list;
                    let first_table = document.getElementById("book-table");
                    first_table.classList.remove("none");
                    msg.classList.add("none");
                    let res = document.getElementById("res1");
                    let rows = ajax.responseXML.firstChild.children;
                    let result = "";
                    for (let i = 0; i < rows.length; i++) {
                        result += "<tr>";
                        result += "<td>" + rows[i].children[0].textContent + "</td>";
                        result += "<td>" + rows[i].children[1].textContent + "</td>";
                        result += "<td>" + rows[i].children[2].textContent + "</td>";
                        result += "<td>" + rows[i].children[3].textContent + "</td>";
                        result += "<td>" + rows[i].children[4].textContent + "</td>";
                        result += "<td>" + rows[i].children[5].textContent + "</td>";
                        result += "</tr>";
                    }
                    res.innerHTML = result;
                }
            }
        }
        ajax.send();
    }
}


function ChangedSelect2() {
    let first_year = localStorage.getItem('first_year');

    let msg = document.getElementById('msg');
    let msg2 = document.getElementById('msg2');
    let msg3 = document.getElementById('msg3');

    msg.classList.remove("none");
    msg2.classList.remove("none");
    msg3.classList.remove("none");

    msg.classList.add("visibility");
    msg2.classList.remove("visibility");
    msg3.classList.add("visibility");

    let last_year = localStorage.getItem('last_year');
    if(first_year == null || last_year == null ){
        msg2.innerText = "Ранее не выбиралось"
    }
else {
        let second_table2 = document.getElementById("year-table2");

        msg2.innerText = "receivedItem: " + localStorage.getItem('first_year') + ": " + localStorage.getItem('last_year');

        ajax.open("Get", "php/book-year.php?first_year=" + first_year + "&last_year=" + last_year, true);
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    let result = JSON.parse(ajax.response);
                    let res = document.getElementById("res22");
                    if (ajax.response =="[]") {
                        msg2.classList.remove("none");
                        msg2.innerText = "Нет данных с такими годами";
                    } else {
                        second_table2.classList.remove("none");
                        let list = "";
                        for (let i = 0; i < result.length; i++) {
                            list += "<tr>";
                            list += "<td>" + result[i][0] + "</td>";
                            list += "<td>" + result[i][1] + "</td>";
                            list += "<td>" + result[i][2] + "</td>";
                            list += "<td>" + result[i][3] + "</td>";
                            list += "<td>" + result[i][4] + "</td>";
                            list += "<td>" + result[i][5] + "</td>";
                            list += "<td>" + result[i][6] + "</td>";
                            list += "<td>" + result[i][7] + "</td>";
                            list += "<td>" + result[i][8] + "</td>";
                            list += "<td>" + result[i][9] + "</td>";
                            list += "<td>" + result[i][10] + "</td>";
                            list += "</tr>";
                        }
                        res.innerHTML = list;
                    }
                }
            }
        }
        ajax.send();
    }
}



function Second() {
    let msg = document.getElementById('msg');
    let msg2 = document.getElementById('msg2');
    let msg3 = document.getElementById('msg3');
    //
    msg.classList.remove("none");
    msg2.classList.remove("none");
    msg3.classList.remove("none");
    //
    msg.classList.add("visibility");
    msg2.classList.remove("visibility");
    msg3.classList.add("visibility");
    //
    // let year_table = document.getElementById("year-table");
    //
    let first_table = document.getElementById("book-table");
    let first_table2 = document.getElementById("book-table2");
    let third_table = document.getElementById("author-table");
    let third_table2 = document.getElementById("author-table2");

    let second_table = document.getElementById("year-table");

    let year = document.getElementById("year");
    let array_year = [];
    for(let i=0;i<year.options.length;i++){
        if(year.options[i].selected){
            array_year.push(year.options[i].value);
        }
    }
    let first_year = array_year[0];
    let last_year = array_year[array_year.length-1];

    localStorage.setItem("first_year",first_year);
    localStorage.setItem("last_year",last_year);

    if(first_year === last_year){
        msg2.innerText = "Вы не выбрали конечный год издания";
        first_table.classList.add("none");
        first_table2.classList.add("none");
        third_table.classList.add("none");
        third_table2.classList.add("none");
    }
    else{
        ajax.open("Get","php/book-year.php?first_year=" + first_year + "&last_year=" + last_year,true);
        ajax.onreadystatechange = function() {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    if (ajax.status === 200) {
                        let result = JSON.parse(ajax.response);
                        let res = document.getElementById("res2");
                        if (ajax.response =="[]") {
                            msg2.classList.remove("none");
                            msg2.innerText = "Нет данных с такими годами";
                            second_table.classList.add("none");
                            first_table.classList.add("none");
                            first_table2.classList.add("none");
                            third_table.classList.add("none");
                            third_table2.classList.add("none");
                        } else {
                            second_table.classList.remove("none");
                            msg2.classList.add("none");
                             first_table.classList.add("none");
                             first_table2.classList.add("none");
                             third_table.classList.add("none");
                             third_table2.classList.add("none");
                            let list = "";
                            for (let i = 0; i < result.length; i++) {
                                list += "<tr>";
                                list += "<td>" + result[i][0] + "</td>";
                                list += "<td>" + result[i][1] + "</td>";
                                list += "<td>" + result[i][2] + "</td>";
                                list += "<td>" + result[i][3] + "</td>";
                                list += "<td>" + result[i][4] + "</td>";
                                list += "<td>" + result[i][5] + "</td>";
                                list += "<td>" + result[i][6] + "</td>";
                                list += "<td>" + result[i][7] + "</td>";
                                list += "<td>" + result[i][8] + "</td>";
                                list += "<td>" + result[i][9] + "</td>";
                                list += "<td>" + result[i][10] + "</td>";
                                list += "</tr>";
                            }
                            res.innerHTML = list;
                        }
                    }
                }
            }
        }
                    // console.dir(ajax.responseXML);
                    // let res = document.getElementById("res2");
                    // let result = "";
                    // if (ajax.responseXML == null) {
                    //     msg2.innerText = "Нет данных с такими годами";
                    //     year_table.classList.add("none");
                    //     first_table.classList.add("none");
                    //     third_table.classList.add("none");
                    // } else {
                    //     year_table.classList.remove("none");
                    //     msg2.classList.add("none");
                    //     first_table.classList.add("none");
                    //     third_table.classList.add("none");
                    //     let rows = ajax.responseXML.firstChild.children;
                    //     for(let i=0;i<rows.length;i++) {
                    //             result += "<tr>";
                    //             result += "<td>" + rows[i].children[0].textContent + "</td>";
                    //             result += "<td>" + rows[i].children[1].textContent + "</td>";
                    //             result += "<td>" + rows[i].children[2].textContent + "</td>";
                    //             result += "<td>" + rows[i].children[3].textContent + "</td>";
                    //             result += "<td>" + rows[i].children[4].textContent + "</td>";
                    //             result += "<td>" + rows[i].children[5].textContent + "</td>";
                    //             result += "<td>" + rows[i].children[6].textContent + "</td>";
                    //             result += "<td>" + rows[i].children[7].textContent + "</td>";
                    //             result += "<td>" + rows[i].children[8].textContent + "</td>";
                    //             result += "<td>" + rows[i].children[9].textContent + "</td>";
                    //         result += "</tr>";
                    //     }
                    //     console.dir(result);
                    //      res.innerHTML = result;
                    // }
        ajax.send();
    }
}

function Select3() {
    let author = document.getElementById("author");
    console.log(author.value);
    localStorage.setItem("author",author.value);
}
function ChangedSelect3() {
    let text = localStorage.getItem('author');
    let msg = document.getElementById('msg');
    let msg2 = document.getElementById('msg2');
    let msg3 = document.getElementById('msg3');

    msg.classList.remove("none");
    msg2.classList.remove("none");
    msg3.classList.remove("none");

    msg.classList.add("visibility");
    msg2.classList.add("visibility");
    msg3.classList.remove("visibility");
    console.log(text);
    if (text == null) {
        // let msg3 = document.getElementById('msg3');
        msg3.classList.remove("none");
        msg3.innerText = "Ранее не выбиралось"
    } else {
        // let msg = document.getElementById('msg');
        // let msg2 = document.getElementById('msg2');
        // let msg3 = document.getElementById('msg3');

        msg.classList.remove("none");
        msg2.classList.remove("none");
        msg3.classList.remove("none");

        msg.classList.add("visibility");
        msg2.classList.add("visibility");
        msg3.classList.remove("visibility");

        msg3.innerText = "receivedItem: " + localStorage.getItem('author');

        ajax.open("Get", "php/book-author.php?auth=" + text, true);
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    let result = JSON.parse(ajax.response);
                    let res = document.getElementById("res33");
                    let none = document.getElementById("author-table2");
                    none.classList.remove("none");
                    let list = "";
                    for (let i = 0; i < result.length; i++) {
                        list += "<tr>";
                        list += "<td>" + result[i][0] + "</td>";
                        list += "<td>" + result[i][1] + "</td>";
                        list += "<td>" + result[i][2] + "</td>";
                        list += "<td>" + result[i][3] + "</td>";
                        list += "<td>" + result[i][4] + "</td>";
                        list += "<td>" + result[i][5] + "</td>";
                        list += "</tr>";
                    }
                    res.innerHTML = list;
                }
            }
        }
        ajax.send();
    }
}
function  Third() {
    let authors = document.getElementById("author").value;
    console.log(authors);
    ajax.open("Get","php/book-author.php?auth=" + authors,true);
    let select = document.getElementById("author").options[0].value;

    let msg = document.getElementById('msg');
    let msg2 = document.getElementById('msg2');
    let msg3 = document.getElementById('msg3');

    msg.classList.remove("none");
    msg2.classList.remove("none");
    msg3.classList.remove("none");

    msg.classList.add("visibility");
    msg2.classList.add("visibility");
    msg3.classList.remove("visibility");

    let first_table = document.getElementById("book-table");
    let first_table2 = document.getElementById("book-table2");
    let second_table = document.getElementById("year-table");
    let second_table2 = document.getElementById("year-table2");

    first_table.classList.add("none");
    first_table2.classList.add("none");
    second_table2.classList.add("none");
    second_table.classList.add("none");



    if (authors == select){
        msg3.innerText = "Вы не выбрали автора";
    }
    else {
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    let result = JSON.parse(ajax.response);
                    let res = document.getElementById("res3");
                    let none = document.getElementById("author-table");
                    none.classList.remove("none");
                    msg3.classList.add("none");
                    let list="";
                    for (let i = 0; i < result.length; i++) {
                        list += "<tr>";
                        list += "<td>" + result[i][0] + "</td>";
                        list += "<td>" + result[i][1] + "</td>";
                        list += "<td>" + result[i][2] + "</td>";
                        list += "<td>" + result[i][3] + "</td>";
                        list += "<td>" + result[i][4] + "</td>";
                        list += "<td>" + result[i][5] + "</td>";
                        list += "</tr>";
                    }
                    res.innerHTML = list;
                 }
            }
        }
        ajax.send();
    }
}