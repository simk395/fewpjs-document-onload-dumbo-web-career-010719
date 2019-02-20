// Your code goes here
function domContentLoaded(){
document.addEventListener("DOMContentLoaded", function(event){
    updateDOM();
    });
}

function updateDOM(){
    const id = document.querySelector('#text');
    id.innerHTML = "This is really cool!"
    return id;
}