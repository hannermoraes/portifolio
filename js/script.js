// menu show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

// active and remove menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  // active link
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  // remove menu *mobile*
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Reveall Animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
})

// all

sr.reveal('.section-title', { delay: 300 })


// scroll home
sr.reveal('.home__social-icon', { delay: 300, interval: 370 })

// scroll about
sr.reveal('.about__img', { interval: 200 })
sr.reveal('.about__subtitle', { interval: 200 })
sr.reveal('.about__text', { interval: 200 })
sr.reveal('.about, .section__title', { delay: 200 })


// scroll works
sr.reveal('.work__img', { delay: 200 })
sr.reveal('.work__button', { delay: 300 })

// scroll contact
sr.reveal('.contact__input', { delay: 300 })
sr.reveal('.contact__button', { delay: 300 })


const ls = ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 1000,
  reset: true
})

// scroll home
ls.reveal('.home__title', { delay: 300 })
ls.reveal('.home__button', { delay: 300 })

// scroll qualification

ls.reveal('#qualification1', { delay: 600, interval: 300 })
ls.reveal('#qualification2', { delay: 500, interval: 300 })
ls.reveal('#qualification3', { delay: 400, interval: 300 })


// Intersection Observer - Progress Bar

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show-bar')
    } else {
      entry.target.classList.remove('show-bar')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))