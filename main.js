
let clicker1 = document.getElementById("seetime")
let clicker = document.getElementById("clock-face")
const stark = {
    stark2(){
        clicker.innerHTML = Date()
    }
}
stark.stark2()
clicker1.addEventListener("click",  () => {
stark.stark2()
})