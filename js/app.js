const title = document.getElementById("title");

function handleTitleClick(){
    title.innerText = "got you!";
}
if(title.addEventListener("click", handleTitleClick)){
    
}


console.log(title.className);