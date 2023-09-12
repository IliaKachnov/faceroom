var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.classList.toggle('active')
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

const footerDropdown = document.querySelector('.footer__dropdown');
const dropdownMenuFooter = document.querySelector('.dropdown-menu.bottom')

footerDropdown.addEventListener('click', () => {
  footerDropdown.classList.toggle('show');
  dropdownMenuFooter.classList.toggle('show');
})

const dropdownMenuItems = document.querySelectorAll('.dropdown-menu.bottom li');

dropdownMenuItems.forEach((dropdownMenuItem) => {
  dropdownMenuItem.addEventListener('click', () => {
    const dropdownLocation = document.querySelector('.dropdown__location.bottom');
    dropdownLocation.textContent = dropdownMenuItem.textContent;
    footerDropdown.classList.remove('show');
    dropdownMenuFooter.classList.remove('show');
  })
})

const founders = document.querySelectorAll('.founder');

founders.forEach(function(founder) {
    founder.addEventListener('click', function() {
        const bioWrapper = founder.querySelector('.founder__bio-wrapper');
        if (bioWrapper) {
            if (bioWrapper.classList.contains('active')) {
                bioWrapper.classList.remove('active');
            } else {
                bioWrapper.classList.add('active');
            }
        }
    });
});


const dropdownNav = document.querySelector('.nav__dropdown');
const dropdownMenuNav = document.querySelector('.dropdown-menu.top');

dropdownNav.addEventListener('click', () => {
  dropdownNav.classList.toggle('show');
  dropdownMenuNav.classList.toggle('show');
})

const dropdownMenuNavItems = document.querySelectorAll('.dropdown-menu.top li');

dropdownMenuNavItems.forEach((dropdownMenuNavItem) => {
  dropdownMenuNavItem.addEventListener('click', () => {
    const dropdownLocation = document.querySelector('.dropdown__location.top');
    dropdownLocation.textContent = dropdownMenuNavItem.textContent;
    footerDropdown.classList.remove('show');
    dropdownMenuFooter.classList.remove('show');
  })
})

const openDeleteModal = document.querySelector('.nav__section-menu');
const closeDeleteModal = document.getElementById('close');
const modalDelete = document.querySelector('.popup__delete');  
const modalDeleteCancelBtns = document.querySelectorAll('.text-wrapper__btn');


openDeleteModal.addEventListener('click', () => {
  modalDelete.classList.add('open');
  document.body.style.overflow = 'hidden';
});
closeDeleteModal.addEventListener('click', () => {
  modalDelete.classList.remove('open')
  document.body.style.overflow = 'visible';
});

modalDeleteCancelBtns.forEach((modalDeleteCancelBtn) => {
  modalDeleteCancelBtn.addEventListener('click', () => {
    modalDelete.classList.remove('open')
    document.body.style.overflow = 'visible';
  })
})

const dropdownMenu = document.querySelector('.menu__dropdown');
const dropdownMenuShow = document.querySelector('.dropdown-menu.menu');

dropdownMenu.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
  dropdownMenuShow.classList.toggle('show');
})


const swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

const scrollLeftButton = document.querySelector('#scroll-left');
const scrollRightButton = document.querySelector('#scroll-right');
const block2 = document.querySelector('.values__items');

scrollLeftButton.addEventListener('click', () => {
  block2.scrollLeft -= 150;
});

scrollRightButton.addEventListener('click', () => {
  block2.scrollLeft += 150;
});
