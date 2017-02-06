const $favicon = document.querySelector(`#favicon`);
document.addEventListener(`visibilitychange`, function() {
  // document.title = document.hidden ? newTitle : title;
  document.hidden ? $favicon.href = `./img/favicon-costanza-gray.png` : $favicon.href = `./img/favicon-costanza.png`;
});
