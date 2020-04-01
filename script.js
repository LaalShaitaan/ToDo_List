var button=document.getElementById("enter");
var input=document.getElementById("userinput");

var button2=document.getElementById("deletee");
var to_delete_text = document.getElementById('userdelete');

button.addEventListener("click",function(){
  if(input.value.length>0)
  {
    var ul = document.getElementById('unlist');
    var element_to_add = document.createElement('li');
    element_to_add.innerHTML = input.value;
    ul.appendChild(element_to_add);
    input.value="";
  }
})


input.addEventListener("keypress",function(event){
  if(input.value.length>0 && event.keyCode===13)
  {
    var ul = document.getElementById('unlist');
    var element_to_add = document.createElement('li');
    element_to_add.innerHTML = input.value;
    ul.appendChild(element_to_add);
    input.value="";
  }
})

button2.addEventListener("click",function(){
  if(to_delete_text.value.length>0)
  {
    var ul = document.getElementById('unlist');
    for(i = 0 ; i<ul.children.length ; i++)
    {
      console.log(ul.children[i]);
      if(ul.children[i].innerHTML == to_delete_text.value){
        ul.removeChild(ul.children[i]);
      }
    }
    to_delete_text.value = ''
  }
})
