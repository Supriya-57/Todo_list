import 'bootstrap/dist/css/bootstrap.min.css';

let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let text = inp.value.trim(); // Trim whitespace
    if (text === "") {
        alert("Please enter a valid item.");
        return;
    }
    let item=document.createElement("li");
    item.innerText= text;

    let delBtn=document.createElement("button");
     delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);

    ul.appendChild(item);
    inp.value="";
});

// Use event delegation for delete functionality
ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
        console.log("Item deleted");
    }
});