
function replaceClass(id, x, y) {
    var elem = document.getElementById(id);
    elem.classList.remove(x);
    elem.classList.add(y);
}
 
document.getElementById("darkmode").onclick = function() {
    replaceClass("container", "light", "dark");
    
}
let x=document.getElementById("darkmode")
 
document.getElementById("lightmode").onclick = function() {
    replaceClass("container", "dark", "light");
}