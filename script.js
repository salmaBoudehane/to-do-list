const inputBox=document.getElementById("input");
const list=document.getElementById("task");

document.getElementById("addButton").addEventListener("click",()=>{
    if(inputBox.value === ""){
        alert("You need to enter the task !!!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    save();
});
list.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        save();
    }
});
function save(){
    localStorage.setItem("tasks",list.innerHTML);
}
function refresh(){
    list.innerHTML=localStorage.getItem("tasks");
}
refresh();
