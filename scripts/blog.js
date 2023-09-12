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

openMenuNav.addEventListener('click', () => {
  modalDelete.classList.add('open');
  document.body.style.overflow = 'hidden';
});


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


const scrollLeftButton = document.querySelector('#scroll-left');
const scrollRightButton = document.querySelector('#scroll-right');
const block2 = document.querySelector('.blog__items');

scrollLeftButton.addEventListener('click', () => {
  block2.scrollLeft -= 150;
});

scrollRightButton.addEventListener('click', () => {
  block2.scrollLeft += 150;
});


const scrollLeftButtonIntresting = document.querySelector('#scroll-intresting-left');
const scrollRightButtonIntresting = document.querySelector('#scroll-intresting-right');
const intresting = document.querySelector('#blog__items');

scrollLeftButtonIntresting.addEventListener('click', () => {
  intresting.scrollLeft -= 200;
});

scrollRightButtonIntresting.addEventListener('click', () => {
  intresting.scrollLeft += 200;
});
