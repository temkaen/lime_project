///responsive header contacts///

const headerPhonesResponsive = document.getElementsByClassName('header__contacts_responsive')[0];

headerPhonesResponsive.addEventListener('click' , () => {
    const phonesMenu = document.getElementsByClassName('header__contacts')[0];
    phonesMenu.classList.toggle('header__contacts_active');
} );

