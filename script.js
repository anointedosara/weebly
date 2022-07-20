let navDropdown = document.querySelector(".nav-dropdown")
let drop = document.querySelector(".drop")

navDropdown.addEventListener("click", () => {
    drop.classList.toggle("display")
})

let select = document.querySelector(".select")
let option = document.querySelector(".option")
let selectArrow = document.querySelector(".select-arrow")

select.addEventListener("click", () => {
    option.classList.toggle("display")
    selectArrow.classList.toggle("display")
})

let optionP = document.querySelectorAll(".option p")
let lang = document.querySelector(".lang")

for (let i = 0; i < optionP.length; i++) {
    optionP[i].addEventListener("click", () => {
        setTimeout(() => {
            lang.innerHTML = optionP[i].innerHTML
        }, 1000);
    })
}

let selects = document.querySelector(".selects")
let options = document.querySelector(".options")
let selectArrows = document.querySelector(".select-arrows")

selects.addEventListener("click", () => {
    options.classList.toggle("display")
    selectArrows.classList.toggle("display")
})

let optionsP = document.querySelectorAll(".options p")
let langs = document.querySelector(".langs")

for (let i = 0; i < optionP.length; i++) {
    optionsP[i].addEventListener("click", () => {
        setTimeout(() => {
            langs.innerHTML = optionsP[i].innerHTML
        }, 1000);
    })
}

let blair = document.querySelector(".blair")
let dios = document.querySelector(".dios")
let change = false

setInterval(() => {
    if (change != true) {
        dios.style.opacity = 1
        blair.style.opacity = 0
        change = !change
    } else {
        dios.style.opacity = 0
        blair.style.opacity = 1
        change = !change
    }
}, 5000);

let blairMobile = document.querySelector(".blair-mobile")
let diosMobile = document.querySelector(".dios-mobile")
let unchange = false

setInterval(() => {
    if (unchange != true) {
        diosMobile.style.opacity = 1
        blairMobile.style.opacity = 0
        unchange = !unchange
    } else {
        diosMobile.style.opacity = 0
        blairMobile.style.opacity = 1
        unchange = !unchange
    }
}, 5000);

let navbar = document.querySelector(".nav")

window.addEventListener('scroll', () => {
    if (window.scrollY < 1) {
        navbar.style.backgroundColor = "#F4F4F4";
        navbar.style.borderBottom = ""
    } else {
        navbar.style.backgroundColor = 'white';
        navbar.style.borderBottom = "1px solid rgb(227, 235, 251)"
        drop.classList.remove("display")
    }
});

navbar.style.backgroundColor = "#F4F4F4";

let btn = document.getElementsByClassName("btn")

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        let footer = document.getElementsByClassName("footer-dropdown-navigations")
        for (let i = 0; i < footer.length; i++) {
            footer[i].querySelector(".down").classList.toggle("transit")
            btn[i].querySelector(".chevron").classList.toggle("rotate")
        }

        for (let j = 0; j < footer.length; j++) {
            if (j != i) {
                footer[j].querySelector(".down").classList.remove("transit")
                btn[j].querySelector(".chevron").classList.remove("rotate")
            }
        }
    })
}


let mobileNavDropdown = document.querySelector(".mobile-nav-dropdown")
let mobileDropdownDrop = document.querySelector(".mobile-dropdown-drop")
let mobileDropdownWrap = document.querySelector(".mobile-dropdown-wrap")
let navigate = document.querySelector(".navigate")

mobileNavDropdown.addEventListener("click", () => {
    mobileDropdownDrop.classList.toggle("mobile-drop")
    mobileDropdownWrap.classList.toggle("mobile-to-top")
    navigate.classList.toggle("navig")
})

let open = document.querySelector(".open")
let mobileDropdown = document.querySelector(".mobile-dropdown")

open.addEventListener("click", () => {
    mobileDropdown.classList.toggle("drop-div")
    navbar.classList.toggle("white")
})

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,
    paginationClickable: true,
    loop: false,
    spaceBetween: 30,
    slideToClickedSlide: true
});