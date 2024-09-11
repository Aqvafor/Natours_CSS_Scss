"use strict";

//Set current year
var yearEl = document.querySelector('.year');
var currentYear = new Date().getFullYear();
yearEl.textContent = currentYear; //

".nav - open"; 

var btnNavEl = document.querySelector(".navigation__checkbox");
var inputNavEl = document.querySelector(".header"); // toggle - переключать 
// Если у headerEl убдет класс nav-open то он его удалит, а нету то добавит

btnNavEl.addEventListener('change', function () {
  // КОгда взаимодействуем с самим классом однако точка не нужна
  document.getElementById('navi-toggle').checked = true;
}); // /////////////////////////////
// Smooth (гладкий) scrolling animation
// Выбирем якорные элементы содержащие псевдокласс  link

var allLinks = document.querySelectorAll('a:link'); // console.log(allLinks)
//link любое название можем потсавить 
//Пробегаемся по всем ссылкам с помощью forEach и на каждую ставим обработчик событий

allLinks.forEach(function (link) {
  //e это наше событие 
  link.addEventListener('click', function (e) {
    //Мы прерываем обычное обращение
    e.preventDefault(); // в переменную href  добавляем значение атрибута href

    var href = link.getAttribute("href"); // console.log(href);
    //Scroll back to top

    if (href === "#") window.scrollTo({
      top: 0,
      behavior: "smooth"
    }); //Scroll to other links
    // if (href !== "#" && href.startsWith('#')) console.log(href)

    if (href !== "#" && href.startsWith('#')) {}

    var sectionEl = document.querySelector(href); // Насстраиваем прокрутку гладкую 

    sectionEl.scrollIntoView({
      behavior: "smooth"
    }); //Close mobile navigation

    if (link.classList.contains("navigation__link")) {
      document.getElementById('navi-toggle').checked = false;
  
    }
  });
});
