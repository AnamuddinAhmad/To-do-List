let input = document.querySelector("#task");
let btn = document.querySelector(".btn");
let ul = document.querySelector("ul");

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  //Creating element
  var li = document.createElement("li");
  let check = document.createElement("input");
  check.setAttribute("class", "chk")
  check.type = "checkbox";
  li.style.textDecoration="lineThrough";
  
  
  //assinging input value;
  li.textContent = input.value;
  if (input.value > "") {
    ul.appendChild(li);
    li.appendChild(check);
    console.log(ul);
  }
  input.value = "";

});

//for deleting
ul.addEventListener("click",(e)=>{
   if(e.target.nodeName=="INPUT"){
    let del =e.target.parentElement;
    del.remove();
   }else{
    
   }
})


