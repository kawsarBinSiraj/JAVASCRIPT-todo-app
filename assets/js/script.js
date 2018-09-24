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
var keyStore = null;

// initialize addItem function
addItem(listArry);



/**
 * @create addItem function
 * @param : listArry
 */

function addItem(listArry){
    // define empty str
    var str = "";
    
    // loop in listArry
    // value store in str
    listArry.forEach(function (value, key) {
        // store data in str
        str += "<li class='list-group-item border' data-key=" + key + " >" + value + "<button onclick='removeItem(this.parentNode)' class='btn btn-danger ti-close float-right' style='margin-left:3px' ></button> <button onclick='editItem(this.parentNode)' class='btn btn-warning ti-marker-alt float-right'></button> </li>";
    });
    
    // append to markup
    list.innerHTML = str;

    // item count
    listCount.innerHTML = listArry.length + ' Task Left';
}


/**
 * @click event of add button
 * @store data
 */

 addBtn.addEventListener('click', function (event) {

    // check input value
    if (input.value == '' || null ) {
        alert('please input something below the input box');
    }
    else {

        if ( this.classList.contains('btn-warning') ) {
            update();
        }
        else {
            listArry.push(input.value);
            input.value = '';
            
            // call addItem function
            addItem(listArry);
            listCount.innerHTML = listArry.length + ' Task Left';
        }

        
    }
});


/**
 * @removeItem function
 * @param : item
 */
function removeItem(item) {
   
   // item remove form listArry
   listArry.splice(item.dataset.key , 1);

    // item remove
    item.remove();
   
   // item count
   listCount.innerHTML = listArry.length + ' Task Left';

   // call addItem function
   addItem(listArry);
    
}


/**
 * @update function
 * @param : -
 */

function update() {

    //  update array
    listArry[keyStore] = input.value;

    // set keyStore null
    keyStore = null;

    // input empty 
    input.value = '';

    // classList add
    // classList remove
    addBtn.classList.remove("btn-warning");
    addBtn.classList.add("btn-light");

    // add items 
    addItem(listArry);
}


/**
 * @update editItem
 * @param : item
 */

function editItem (item) {

    // specific item by key
    input.value = listArry[item.dataset.key];

    // classList add
    // classList remove
    addBtn.classList.remove("btn-light");
    addBtn.classList.add("btn-warning");
    
    // key store
    keyStore = item.dataset.key;
    
}