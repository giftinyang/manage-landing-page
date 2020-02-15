// My Hamburger toggle

const hamburger = document.querySelector('.hamburger-icon')
const closeHamburger = document.querySelector('.icon-close')
const Menu = document.querySelector('.nav-menu')



hamburger.addEventListener('click', openMenu)

function openMenu() {
    Menu.classList.add('open-menu')
    hamburger.style.display = 'none'
    closeHamburger.style.display = 'block'
}

closeHamburger.addEventListener('click', closeMenu)

function closeMenu() {
    Menu.classList.remove('open-menu')
    closeHamburger.style.display = 'none'
    hamburger.style.display = 'block'

}
