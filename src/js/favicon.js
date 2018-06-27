export default () => {
  const $favicon = document.querySelector(`#favicon`);
  document.addEventListener(`visibilitychange`, function() {
    // document.title = document.hidden ? newTitle : title;
    document.hidden ? $favicon.href = `./assets/img/favicon-costanza-gray.png` : $favicon.href = `./assets/img/favicon-costanza.png`;
  });
}
