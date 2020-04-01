var button=document.getElementById("enter");
var input=document.getElementById("userinput");

var button2=document.getElementById("deletee");


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

function delete_List()
{
  var lis = document.getElementById("listt")
  lis.removeChild(lis.childNodes([-1]));
}

button2.addEventListener("click",delete_List())
