var dots = document.getElementsByClassName('dots-item'),
  dotsArea = document.getElementsByClassName('dots-block')[0],
  slides = document.getElementsByClassName('slides-item'),
  prevBtn = document.getElementById('left-button'),
  nextBtn = document.getElementById('right-button'),
  slideIndex = 1

showSlides(slideIndex)

function showSlides(n) {
  if(n < 1) {
    slideIndex = slides.length
  } else if(n > slides.length) {
    slideIndex = 1 
  }
  for(var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'; 
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active')
  }
  slides[slideIndex - 1].style.display = 'flex'
  dots[slideIndex - 1].classList.add('active')
}

function plussSlide(n) {
  showSlides(slideIndex += n)
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

prevBtn.onclick = function() {
  plussSlide(-1)
}

nextBtn.onclick = function () {
  plussSlide(1)
}

dotsArea.onclick = function(e) {
  for(var i = 0; i < dots.length + 1; i++) {
    if(e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
      currentSlide(i)
    }
  }
}

menu.onclick = function menuResponsive() {
  var x = document.getElementById('menu-responsive')

  if (x.className === "navbar-nav") {
    x.className += " responsive"
  } else {
    x.className = 'navbar-nav'
  }
}

var tab
var tabContent

function tabs() {
  tab = document.querySelectorAll('.content-item')
  tabContent = document.getElementsByClassName('description')
  hideTabsContent(1)
}

function hideTabsContent(a) {
  for(var i = a; i < tabContent.length; i++) {
    tabContent[i].classList.add('hide')
    tabContent[i].classList.remove('show')
    tab[i].classList.remove('border')
  }
}

const modal = document.getElementById('content');

modal.addEventListener('click', function(event) {
  var target = event.target;
  const content = target.closest('.content-item');
  if(content) {
    for(var i = 0; i < tab.length; i++) {
      if (content.contains(tab[i])) {
        showTabsContent(i)
      }
    }
  }
});

function showTabsContent(b) {
  if(tabContent[b].classList.contains('hide')) {
    hideTabsContent(0)
    tabContent[b].classList.remove('hide')
    tabContent[b].classList.add('show')
    tab[b].classList.add('border')
  }
}

tabs()

