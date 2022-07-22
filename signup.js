let check = document.querySelector(".check")
let checkDiv = document.querySelector(".check div")

check.addEventListener("click", () => {
    checkDiv.classList.toggle("color")
})

let password = document.querySelector("#password")
let show = document.querySelector(".input-wrapper p")

show.addEventListener("click", () => {
    if (show.innerHTML == "show") {
        password.type = "text"
        show.innerHTML = "hide"
    } else {
        password.type = "password"
        show.innerHTML = "show"
    }
})