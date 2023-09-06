let button = document.querySelectorAll('.btn');
// console.log(button);
let str ="";

//the way to convert the string in to array
Array.from(button).forEach((buttons)=> {
     buttons.addEventListener('click',(e)=>{
if(e.target.innerHTML== "="){
 str = eval(str);
 document.getElementById('calculating').value = str;
    
}
else if(e.target.innerHTML=='C'){
     str = "";
     document.getElementById('calculating').value = str;
 
}
else if (e.target.innerHTML=='D'){
str = str.slice(0,-1);
document.getElementById('calculating').value = str;
}
else{
     console.log(e.target);
     str = str + e.target.innerHTML;
     document.getElementById('calculating').value = str;
}

     })
});
   
