let PoundsE1 = document.getElementById("pounds")
let outputE1 = document.getElementById("KG")
document.getElementById("clicker").addEventListener("click", conv)

// WHY ISNT THIS F****** WORKING 
// omg i forgot to add a .value
function conv(){
    let A = PoundsE1.value / 2
    let B = A
    outputE1.innerHTML = B
}
