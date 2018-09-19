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
 var listCount = document.getElementById('list-count');
 var listArry = [
     'type new task and then click to add button',
     'This example demonstrates how to create a todo list app using pure javascript'
 ];



// initialize addItem function
addItem(listArry);

// create addItem function
function addItem(listArry){
    // define empty str
    var str = "";
    
    // loop in listArry
    // value store in str
    listArry.forEach(function (value, key) {
        // store data in str
        str += "<li class='list-group-item border'>" + value + "<button onclick='removeItem(this.parentNode)' class='btn btn-danger ti-close float-right'></button></li>";
    });
    
    // append to markup
    list.innerHTML = str;

    // item count
    listCount.innerHTML = listArry.length + ' Task Left';
}



 // click event of add button
 addBtn.addEventListener('click', function () {
    // check input value
    if (input.value == '' || null ) {
        alert('please input something below the input box');
    }
    else {
        listArry.push(input.value);
        input.value = '';
        
        // call addItem function
        addItem(listArry);
    }
});


// create removeItem function
function removeItem(item) {
    // item remove
   item.remove();
    
   // item remove form listArry
   listArry.shift(item.parentNode);

   // item count
   listCount.innerHTML = listArry.length + ' Task Left';
    
}