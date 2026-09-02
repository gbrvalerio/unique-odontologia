/* Unique Odontologia — interações leves, sem dependências */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var body = document.body;
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  var hero = document.querySelector('.hero');
  var waFloat = document.querySelector('.wa-float');

  /* Header sólido ao rolar */
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Menu mobile */
  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    body.style.overflow = open ? 'hidden' : '';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  toggle.addEventListener('click', function () {
    setMenu(!body.classList.contains('menu-open'));
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) setMenu(false);
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', function (e) {
    if (e.matches) setMenu(false);
  });

  /* Revelar seções ao rolar */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });

    /* Botão flutuante aparece só depois do hero */
    new IntersectionObserver(function (entries) {
      waFloat.classList.toggle('is-visible', !entries[0].isIntersecting);
    }, { threshold: 0.15 }).observe(hero);
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
    waFloat.classList.add('is-visible');
  }
})();
