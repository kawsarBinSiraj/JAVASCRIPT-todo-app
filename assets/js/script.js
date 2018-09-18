

/**
 * - todo list app
 * - created by kawsar Ibn Siraj
 * - RAW Javascript
 * - date : 18.09.2018 
 * - more about me -> http://kawsarhossain.com/
 */


 // variables declaration
 var input = document.getElementById('input');
 var addBtn = document.getElementById('addBtn');
 var list = document.getElementById('list');
 var listArry = [];

 // click event of add button
 addBtn.addEventListener('click', function () {

    if (input.value == '' || null ) {
        alert('please input something below the input box');
    }
    else {
        listArry.push(input.value);
        input.value = '';

        var str = "";
        // loop for all value in array store
        listArry.forEach(function (value, key) {
            str += "<li class='list-group-item border'>" + value + "<span class='btn btn-danger ti-close float-right'></span> </li>";
        });
        
        // append to markup
        list.innerHTML = str;

        var dlt = list.querySelectorAll('span');

        // specific item delete in click event
        for (let i = 0; i < dlt.length; i++) {
            dlt[i].addEventListener('click', function () {
                this.parentNode.remove();
                listArry.shift(this.parentNode);
            });
        }
    }

 });