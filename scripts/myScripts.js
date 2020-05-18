var mytext=document.querySelector("#myToDo");
var myUl=document.querySelector("#ToDoList");
mytext.addEventListener("keypress",AddToList);
function AddToList(event) {
	if(event.charCode===13){
		console.log("hi");
		var liel=document.createElement("li");
		liel.appendChild(document.createTextNode(mytext.value));
		myUl.appendChild(liel);
	}
}