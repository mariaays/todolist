
function crossOut(){
    console.log("crossOut()");
    event.target.style.textDecoration = "line-through";
   
}

function remove(){
    event.target.parentNode.style.display = "none";
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.setAttribute("onclick", "crossOut()");
    li.innerHTML += "<span class=\"close\" onclick=\"remove()\"> x </span>";
    if (inputValue === ''){
        alert("must write something!! :(");
    } else {
        document.getElementById("ul").appendChild(li);
    }
    document.getElementById("newInput").value = "";
}


