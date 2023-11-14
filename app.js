const inputBox = document.getElementById("input-box");
const listItem = document.getElementById("list-item");

function saveData(){
    localStorage.setItem("data", listItem.innerHTML);
}

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span")
        let d = document.createAttribute("class");
        d.value = "delete";
        span.setAttributeNode(d);
        listItem.appendChild(li);
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
}

listItem.addEventListener("click", function(a){
    if(a.target.tagName === "LI"){
        a.target.classList.toggle("checked");
        saveData();
    }
else if(a.target.tagName === "SPAN"){
    a.target.parentElement.remove();
saveData();
}}, false);

function showTask(){
    listItem.innerHTML = localStorage.getItem("data");
}
showTask();







