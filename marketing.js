const navBar = document.getElementById("navbar")
const More = document.querySelector(".navmore")
const dropDown = document.querySelector(".dropdown")

const green = document.querySelector(".green-image")

const Promo = document.querySelector(".promo1")
const proMo = document.querySelector(".promo2")

const country = document.querySelector(".countries")
const everY = document.querySelector(".every")
const Two = document.querySelector(".two")
const All = document.getElementsByClassName("every-all")
const p = document.querySelector(".p")

const Later = document.getElementsByClassName("later")
const Upper = document.getElementsByClassName("upper")
const Rotate = document.getElementsByClassName("rotate")

const Dropping = document.querySelector(".dropping")

const Hamburger = document.querySelector(".hamburger")
const Info = document.querySelector(".navIfo")

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        navBar.classList.add("navbg")
        dropDown.classList.remove("point")
        green.style.transform = "translateY(-20px)"
    } else {
        navBar.classList.remove("navbg")
        green.style.transform = "none"
    }
    Animate()
})

window.addEventListener("load", () => {
    if (window.scrollY > 1) {
        navBar.classList.add("navbg")
    } else {
        navBar.classList.remove("navbg")
    }
})

More.addEventListener("click", () => {
    dropDown.classList.toggle("point")
})

function Animate() {
    if (window.scrollY > 1000) {
        Promo.style.transform = "translateX(-70px)"
        proMo.style.transform = "translateX(70px)"
    } else {
        Promo.style.transform = "translateX(+5px)"
        proMo.style.transform = "translateX(+5px)"
    }
}

country.addEventListener("click", () => {
    everY.classList.toggle("disp")
    Two.classList.toggle("disp")
})

for (let i = 0; i < All.length; i++) {
    const element = All[i];
    element.addEventListener("click", () => {
        p.innerText = element.innerText
    })
}

for (let j = 0; j < Later.length; j++) {
    const element = Later[j];
    element.addEventListener("click", () => {
        Upper[j].classList.toggle("overflow")
        Rotate[j].classList.toggle("easy")
        for (let a = 0; a < Upper.length; a++) {
            const Clean = Upper[a];
            if (a != j) {
                Clean.classList.remove("overflow")
                Rotate[a].classList.remove("easy")
            }
        }
    })
}

Dropping.addEventListener("click", () => {
    Dropping.classList.toggle("height")
})

Hamburger.addEventListener('click', () => {
    Info.classList.toggle("left")
    window.addEventListener("scroll", () => {
        if (window.scrollY < 1) {
            navBar.classList.add("navbg")
        } else {
            navBar.classList.remove("navbg")
        }
    })
})