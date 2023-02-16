var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelectorAll("li");
var ul=document.querySelector("ul")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addDeleteButton(li);
	input.value = "";
	//add toggle function to newly created list
	li.addEventListener("click",toggleDone)
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function toggleDone(event){
	event.target.classList.toggle("done")
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDeleteButton(parent){
	var deleteButton=document.createElement("button")
	parent.appendChild(deleteButton)
	deleteButton.innerHTML="Delete"
	deleteButton.onclick=function(){
	this.parentElement.remove()
	}
}

for(var i=0;i<list.length;i++){
	list[i].addEventListener("click",toggleDone);
	addDeleteButton(list[i])
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
