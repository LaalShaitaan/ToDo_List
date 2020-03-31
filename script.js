var button=document.getElementById("enter");
var input=document.getElementById("userinput");

var button2=document.getElementById("deletee");
var deleteme=document.getElementById("userdelete");


var ul=document.querySelector("ul")

button.addEventListener("click",function(){
  if(input.value.length>0)
  {
    var l_add=document.createElement("li");
    l_add.appendChild(document.createTextNode(input.value));
    ul.appendChild(l_add);
    input.value="";
  }
})


input.addEventListener("keypress",function(event){
  if(input.value.length>0 && event.keyCode===13)
  {
    var l_add=document.createElement("li");
    l_add.appendChild(document.createTextNode(input.value));
    ul.appendChild(l_add);
    input.value="";
  }
})


var lis = document.querySelectorAll("ul");
button2.removeEventListener("click",function(){
  li.parentNode.removeChild([-1]);
})
