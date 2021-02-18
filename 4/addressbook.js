//Entry class
class Entry{
    constructor(name, phone, email){
        this.name= name;
        this.phone = phone;
        this.email = email;
    }
}

//Array list for entry objects

var entrylist = [];

//elements from the HTML
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('search');




//Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', searchFunction);


// Add Item
function addItem(e){
    e.preventDefault();
    
    //Check if name-field and at least one of the others is filled out before adding
    var nameinput = document.forms['myForm']['fname'].value;
    var phoneinput = document.forms['myForm']['phone'].value;
    var emailinput = document.forms['myForm']['email'].value;
    if (nameinput ==""){
        alert("Name must be filled out");
        return false;
    }else if(phoneinput == "" && emailinput == ""){
        alert("You must fill out either phone or email info")
    }else{

    //Get input value
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    //Creating an entry object and pushing it into the entrylist
    var entry = new Entry(name, phone, email);
    entrylist.push(entry);
    console.log(entrylist);

    //Create new p element and a element for mail

    var pname = document.createElement('p');
    var pemail = document.createElement('a');
    var pphone = document.createElement('p');
    
    //Add link to the mail-element
    pemail.href = "mailto:" + email;

    // Add class
    pname.className = 'name';
    pphone.className = 'phone';
    pemail.className = 'email';


    //Add text node with input value
    

    pname.appendChild(document.createTextNode(name));
    pemail.appendChild(document.createTextNode(email));
    pphone.appendChild(document.createTextNode(phone));
   


    // Create new li element
    var li = document.createElement('li');
    
    // Add class
    li.className = 'list-group-item';


    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add class to del button
    deleteBtn.className = 'delete-button';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
   
    // Append the paragraphs to the li element
    li.appendChild(pname);
    li.appendChild(pphone);
    li.appendChild(pemail);

    // append button to li
    li.appendChild(deleteBtn);
    
    // Append li to list
    itemList.appendChild(li);
    }
}


// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete-button')){
        if(confirm('Are you sure you want to delete this contact?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            entrylist.splice(li, 1);
        }
    }    
}
 
//filter Entries by name

function searchFunction(){
    var input, filter, ul, li, p, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("items");
    li = ul.getElementsByTagName("li");
    for (i = 0; i< li.length; i++){
        p = li[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        console.log(p.innerText);
        if(txtValue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }

}


//Drop down table  visibility

function dropFunc(){
    var x = document.getElementById("mydiv");
    
    if(x.style.display === "none")
    {
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }

}

// Function for changing font
var li = document.getElementById("items");
// cursive, sans serif verdana
document.getElementById('dropdown').addEventListener("change", function() {
    if(this.value == "verdana"){
      console.log(this.value);
      li.style.fontFamily = "verdana";
    }else if(this.value == "cursive"){
        li.style.fontFamily = "cursive";
    }else if(this.value == "timesnewroman"){
        li.style.fontFamily = "Times New Roman";
    }else{
        li.style.fontFamily = "sans-serif";
    }
});