let check = document.querySelector(".check")
let checkDiv = document.querySelector(".check div")
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


let formData = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    location: "",
    agree: false
}

check.addEventListener("click", () => {
    formData.agree = !formData.agree;
    formData.agree ? checkDiv.classList.add("color") : checkDiv.classList.remove("color")
})

const formElem = document.querySelector(".form")

const handleChange = (input) => {
    formData[input.name] = input.value;
    formData[input.name] !== "" ? document.querySelector(`.${input.name}-error`).classList.remove("showError") : document.querySelector(`.${input.name}-error`).classList.add("showError")
    formData[input.name] !== "" ? document.querySelector(`.${input.name}-icon`).classList.remove("showError") : document.querySelector(`.${input.name}-icon`).classList.add("showError")
    formData[input.name] !== "" ? document.querySelector(`.${input.name}-wrapper`).classList.remove("border") : document.querySelector(`.${input.name}-wrapper`).classList.add("border")
}

formElem.onsubmit = (e) => {

    console.log(formData)
    for (let i in formData) {
        if (i === "agree") {
            if (formData[i] != true) {
                checkDiv.style.border = "1px solid red"
                e.preventDefault()
            }
        } else if (formData[i] === "" && i !== "location") {
            e.preventDefault()
            document.querySelector(`.${i}-error`).classList.add("showError")
            document.querySelector(`.${i}-icon`).classList.add("showError")
            document.querySelector(`.${i}-wrapper`).classList.add("border")
            document.querySelector(`.top-error`).classList.add("top")
            document.querySelector(`.top-error div p`).innerHTML = "We need you to complete all of the required fields before we can continue"
            document.querySelector(`.firstName-error p`).innerHTML = "We need your first name"
            document.querySelector(`.lastName-error p`).innerHTML = "We need your last name"
            document.querySelector(`.password-error p`).innerHTML = "Create a password so you can login to your new account"
            document.querySelector(`.email-error p`).innerHTML = "Enter the email address you want to use to create your new account"
            document.querySelector(`.confirmEmail-error p`).innerHTML = "Enter your email address twice to confirm it's correct"
        }
    }

    let email = document.querySelector("#email")
    let gmail = email.value.includes("@gmail.com") || email.value.includes("@yahoo.com") || email.value.includes("@outllok.com")
    if (gmail) {
        if (email.value === gmail) {
            document.querySelector(`.email-error`).classList.remove("showError")
            document.querySelector(`.email-error p`).innerHTML = ""
        } else {
            document.querySelector(`.email-error`).classList.add("showError")
            document.querySelector(`.email-error p`).innerHTML = "jkhjewgh3r"
        }
    }
}

let exit = document.querySelector(`.top-error div i`)

exit.addEventListener("click", () => {
    document.querySelector(`.top-error`).classList.remove("top")
})