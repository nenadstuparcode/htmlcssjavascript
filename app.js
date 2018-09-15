

let url = 'https://jsonplaceholder.typicode.com/users';
let show = document.getElementById('show');
let start = document.getElementById('start');
let name = document.getElementById('name');
let search = document.getElementById('search');
//// Fetch data and store to array
let users = [];
fetch(url) 
   .then(response => response.json())
   .then(data => data.forEach((item)=>{
       users.push(item);
   }))
console.log(users);

///Display all users 
function initState(){
    show.innerHTML = "";
}

function findUserByName(){
    initState();
    users.filter((user)=>{
       if(user.name === name.value) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let field = document.createElement("p");
        field.setAttribute("class", "field");
        field.innerText = user.name;
        card.appendChild(field);
        show.appendChild(card);
       } else {
      
       }
    })
}
function displayUsers() {
    initState();
    users.forEach((user)=>{
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let field = document.createElement("p");
        field.setAttribute("class", "field");
        field.innerText = user.name;
        card.appendChild(field);
        show.appendChild(card);
    })
}
/// Filters 
start.addEventListener('click',displayUsers);
name.addEventListener('keyup', findUserByName);







