const footerDropdown = document.querySelector('.footer__dropdown');
const dropdownMenuFooter = document.querySelector('.dropdown-menu.bottom')


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

const MenuItems = document.querySelectorAll('.dropdown-menu.menu li');

MenuItems.forEach((MenuItem) => {
  MenuItem.addEventListener('click', () => {
    const dropdownLocation = document.querySelector('.dropdown__location.menu');
    dropdownLocation.textContent = MenuItem.textContent;
    footerDropdown.classList.remove('show');
    dropdownMenuFooter.classList.remove('show');
  })
})

const navbar = document.querySelector('.nav__wrapper');

// // Обработчик события прокрутки страницы
// window.addEventListener('scroll', function() {
//     // Получаем текущую позицию скролла
//     const scrollY = window.scrollY || window.pageYOffset;

//     // Если пользователь проскролил на 100vh, то показываем навигационную полоску
//     if (scrollY >= 100) {
//         navbar.style.height = '50px';
//     } else {
//         navbar.style.height = '0'; // В противном случае скрываем ее
//     }
// });


const minuteButtons = document.querySelectorAll('.minutes__btn');

minuteButtons.forEach(function(button) {
    button.addEventListener('click', () => {
        minuteButtons.forEach((btn) => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

// Получаем элементы
const dropdowns = document.querySelectorAll('.dropdown-content-sort');
const cosmetologyBtn = document.querySelector('.sort__btn.cosm');
const cosmetologyDropdown = cosmetologyBtn.nextElementSibling;

// Закрытие дропдауна при клике вне его области
document.addEventListener('click', (event) => {
    const target = event.target;

    dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(target)) {
            dropdown.style.display = 'none';
        }
    });
});

// Отображение дропдауна при клике на "Cosmetology"
cosmetologyBtn.addEventListener('click', () => {
    cosmetologyDropdown.style.display = 'block';
});



