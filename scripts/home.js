const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
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
  },
});
const openMenu = document.querySelector('#menu-open');
openMenu.addEventListener('click', () => {
  modalDelete.classList.add('open');
  document.body.style.overflow = 'hidden';
});

const navbar = document.querySelector('.nav__wrapper');

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY || window.pageYOffset;


    if (scrollY >= 300) {
        navbar.classList.add('active')
        navbar.style.height = '50px';
    } else {
        navbar.classList.remove('active')
        navbar.style.height = '0'; 
    }
});


const verticalTexts = document.querySelectorAll('.vertical-text');
const serviceItems = document.querySelectorAll('.service__item-full');

let previousVerticalText = null;

verticalTexts.forEach(function(verticalText, index) {
    verticalText.addEventListener('click', function() {
        serviceItems.forEach(function(item) {
            item.classList.remove('show');
        });
        if (previousVerticalText !== null) {
            previousVerticalText.classList.remove('hide');
        }
        serviceItems[index].classList.add('show');

        verticalText.classList.add('hide');


        previousVerticalText = verticalText;
    });
});

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
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

const minutesBtns = document.querySelectorAll('.minutes__btn');

minutesBtns.forEach((minutesBtn) => {
  minutesBtn.addEventListener('click', () => {
    minutesBtn.classList.toggle('active');
  })
})
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


const openMenuNav = document.querySelector('#open-menu-nav')




closeDeleteModal.addEventListener('click', () => {
  modalDelete.classList.remove('open')
  document.body.style.overflow = 'visible';
});

openDeleteModal.addEventListener('click', () => {
  modalDelete.classList.add('open');
  document.body.style.overflow = 'hidden';
});
closeDeleteModal.addEventListener('click', () => {
  modalDelete.classList.remove('open')
  document.body.style.overflow = 'visible';
});


const dropdownMenu = document.querySelector('.menu__dropdown');
const dropdownMenuShow = document.querySelector('.dropdown-menu.menu');

dropdownMenu.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
  dropdownMenuShow.classList.toggle('show');
})

const MenuItems = document.querySelectorAll('.dropdown-menu.menu li');

MenuItems.forEach((MenuItem) => {
  MenuItem.addEventListener('click', () => {
    const dropdownLocation = document.querySelector('.dropdown__location.menu');
    dropdownLocation.textContent = MenuItem.textContent;
    footerDropdown.classList.remove('show');
    dropdownMenuFooter.classList.remove('show');
  })
})

const dropdownMenuHome = document.querySelector('.nav__dropdown.home');
const dropdownMenuHomeShow = document.querySelector('.dropdown-menu.home');
console.log(dropdownMenuHome);

dropdownMenuHome.addEventListener('click', () => {
  dropdownMenuHome.classList.toggle('show');
  dropdownMenuHomeShow.classList.toggle('show');
})

const MenuHomeItems = document.querySelectorAll('.home__li');

MenuHomeItems.forEach((MenuHomeItem) => {
  MenuHomeItem.addEventListener('click', () => {
    const dropdownLocation = document.querySelector('.dropdown__location.home');
    dropdownLocation.textContent = MenuHomeItem.textContent;
    footerDropdown.classList.remove('show');
    dropdownMenuFooter.classList.remove('show');
  })
})




const minuteButtons = document.querySelectorAll('.minutes__btn');

minuteButtons.forEach(function(button) {
    button.addEventListener('click', () => {
        minuteButtons.forEach((btn) => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

const dropdowns = document.querySelectorAll('.dropdown-content-sort');
const cosmetologyBtn = document.querySelector('.sort__btn.cosm');


document.addEventListener('click', (event) => {
    const target = event.target;

    dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(target)) {
            dropdown.style.display = 'none';
        }
    });
});


