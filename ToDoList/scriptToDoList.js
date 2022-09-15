const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");

const createEle = () =>{
    if (input.value.length>0){
        let li = document.createElement("li");    
        li.appendChild(document.createTextNode(input.value));    
        ul.appendChild(li);
        input.value = "";
    }
}

button.onclick = () => createEle()
input.onkeydown = (event) =>{
    if (event.keyCode === 13){
        createEle()
    }
}