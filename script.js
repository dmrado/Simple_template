document.addEventListener('DOMContentLoaded', () =>{
//  todo написать функции завершения работы менбшек при нажатии esc и нажатии вне менюшки
  document.addEventListener('click', (e) => {
    if(e.key === escape){
    //  логика удаления class выдвигавшего боковое меню
    //   document.querySelector("").classList.toggle("class")
    }
  })
})


// for slider.js
  const wrapper = document.querySelector(".wrapper")
  const carousel = document.querySelector(".carousel")
  const arrowBtns = document.querySelectorAll(".wrapper i")
  const firstCardWidth = carousel.querySelector(".card").offsetWidth
  const carouselChildrens = [...carousel.children]

  let isDragging = false,
      startX,
      startScrollLeft,
      timeoutId
//Get the number of cards that can fit in the carousel at once
  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

//Insert copies of the last few cards to beginning of carousel for infinite scrolling
  carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
      })

//Insert copies of the last few cards to end of carousel for infinite scrolling
  carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
  })

//Add event listeners for the arrow buttons to scroll carousel left and right
  arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth
    })
  })

  const dragStart = e => {
    isDragging = true
    carousel.classList.add("dragging")
    //Records the initial cursor and scroll position of the carousel
    startX = e.pageX
    startScrollLeft = carousel.scrollLeft
  }

  const dragging = e => {
    if (!isDragging) return
    //Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
  }

  const dragStop = () => {
    isDragging = false
    carousel.classList.remove("dragging")
  }

//обработка автопрокрутки
  const autoPlay = () => {
    if (window.innerWidth < 800) return //выходим если экран меньшн 800px
    timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2000)
  }
  autoPlay()

  const infiniteScroll = () => {
    //If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition")
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth
      carousel.classList.remove("no-transition")
    }
    //If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
      carousel.classList.add("no-transition")
      carousel.scrollLeft = carousel.offsetWidth
      carousel.classList.remove("no-transition")
    }
    //Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId)
    if (wrapper.matches(":hover")) autoPlay()
  }

  carousel.addEventListener("mousedown", dragStart)
  carousel.addEventListener("mousemove", dragging)
  document.addEventListener("mouseup", dragStop)
  document.addEventListener("scroll", infiniteScroll)
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId))
  wrapper.addEventListener("mouseleave", autoPlay())

// Tabs

