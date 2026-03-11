const fab = document.querySelector('.fab');
  const drawer = document.querySelector('.drawer');
  const main = document.querySelector('.main');

  fab.addEventListener('click', () => {
    drawer.classList.toggle('open');
    main.classList.toggle('drawer-open');
  });
