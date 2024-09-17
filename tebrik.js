document.getElementById("changenamebtn").
addEventListener("click", function()
{ 
    var newname = prompt("adı daxil edin:");
    if (newname) {
        document.getElementById("name").textContent=newname;
    }

});