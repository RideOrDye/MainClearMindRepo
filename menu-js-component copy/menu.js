
const women = document.getElementById('women');
const categories = ["shoes","bags", "jewelery"];
const bags = ["tote", "crossbag","handbag"]


function makeUL(array) {
   var list = document.createElement('ul');
    for (var i = 0; i < array.length; i++) {
       var item = document.createElement('li');
        women.appendChild(document.createTextNode(array[i]));
        women.appendChild(item);
        women.style.display = women.style.display == "none" ? "block" : "none";
        
       
    }

    return list;
}

// couldnt get the same result when used getElementByClassName
document.getElementById('women').appendChild(makeUL(categories));


//this function is selecting second 'li' in categories and display block the subcategory of bags. 
//It is the the second level of multilevel dropdown
function dropDown(a) {
    var li = a.parentElement,
    submenu = li.getElementsByTagName('ul')[0];
    submenu.style.display = submenu.style.display == "block" ? "none" : "block";

    return false;
}


dropDown(bags)