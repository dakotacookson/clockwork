
let clicker1 = document.getElementById("seetime")
let clicker = document.getElementById("clock-face")
function name() {
    clicker.innerHTML = Date()
}

name()
clicker1.addEventListener("click",  () => {
    name()
    console.log(name())
})
