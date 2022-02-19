'use strict'

document.addEventListener('DOMContentLoaded', () => {
  /* Mobile Menu */
  function burgerMenu(selector) {
    const menu = document.querySelector(selector),
      button = menu.querySelector('.burger-menu__button'),
      links = menu.querySelector('.burger__link');

    button.addEventListener('click', (event) => {
      event.preventDefault();
      toggleMenu();
    });

    links.addEventListener('click', () => toggleMenu());

    function toggleMenu() {
      menu.classList.toggle('burger-menu__active');

      if (menu.classList.contains('burger-menu__active')) {
        document.querySelector('html').style.overflowY = "hidden";
      } else {
        document.querySelector('html').style.overflowY = "visible";
      }
    }
  }

  /* Tabs */
  function tabs() {
    let tabs = document.querySelectorAll('.tab-header__item'),
        tabsContent = document.querySelectorAll('.tab-content'),
        tabsParent = document.querySelector('.tab-header__items');

    function hideTabContent() {
      tabsContent.forEach(item => {
      item.classList.add('tab-hide');
      item.classList.remove('tab-show', 'tab-fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tab-header__item--active');
    });
    }

    function showTabContent(i = 0) {
      tabsContent[i].classList.add('tab-show', 'tab-fade');
      tabsContent[i].classList.remove('tab-hide');
      tabs[i].classList.add('tab-header__item--active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function (event) {
      const target = event.target;
      if (target && target.classList.contains('tab-header__item')) {
        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }

  burgerMenu('.burger-menu');
  tabs();

});