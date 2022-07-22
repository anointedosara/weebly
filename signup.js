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

let firstName = document.querySelector("#firstname")
let firstError = document.querySelector(".first-error")
let form = document.querySelector(".form")
let firstErrorText = document.querySelector(".first-error p")
let firstIcon = document.querySelector(".first-icon")
let lastName = document.querySelector("#lastname")
let lastError = document.querySelector(".last-error")
let lastErrorText = document.querySelector(".last-error p")
let lastIcon = document.querySelector(".last-icon")

form.addEventListener("submit", (e) => {
    if (firstName.value !== "") {
        firstError.classList.remove("showError")
        firstName.classList.remove("border")
        firstErrorText.innerHTML = ""
        firstIcon.classList.remove("showError")
    } else {
        firstError.classList.add("showError")
        firstName.classList.add("border")
        firstErrorText.innerHTML = "we need your first name"
        firstIcon.classList.add("showError")
    }
})