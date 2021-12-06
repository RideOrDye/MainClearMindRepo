
const women = document.getElementById('women');
const categories = ["shoes","bags", "jewelery"];
const bags = ["tote", "crossbag","handbag"];
const womenUl = document.createElement('ul');


//Can I create a a multi-level menu with a nested for loop? 
function makeUL(array) {
 
    for (var i = 0; i < array.length; i++) {
       var emptyItem = array[i];
       var item = document.createElement('li');
        item.appendChild(document.createTextNode(emptyItem));
        women.appendChild(item);
       item.style.display = item.style.display == "block" ? "none" : "block";    
  
    }

   return women;
}



//this function is selecting second 'li' in categories and display block the subcategory of bags. 
//It is the the second level of multilevel dropdown
//Not sure if I should abandon this idea
function dropDown(a) {
   // var li = a.parentElement,
    submenu = li.getElementsByTagName('ul')[0];
    submenu.style.display = submenu.style.display == "block" ? "none" : "block";

    return false;
}


dropDown(bags)