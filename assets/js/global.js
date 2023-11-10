function checkLS() {
  if (localStorage.getItem("cookies") === null) {
    localStorage.setItem("cookies", 0);
  }
}

function res() {
  // let sum = parseInt(localStorage.getItem('cookies'))

  // if (sum == 0) {
  //     window.open('https://www.effectivecpmgate.com/swqh6tcn3k?key=163b8eee7c2fbbbdae754cb90a81d9f7', '_blank');
  // } else {
  validation();
  // }
  // localStorage.setItem('cookies', 1);
}

function welcomeMsg() {
  const welcomeMsgEl = document.querySelector("#welcomeMsg");
  let array = 0;

  const scriptmlbb = `<a href="https://www.scriptmlbb.com/search/label/Script" target="_blank">Script MLBB</a>`;

  let arrayEl = [
    `<p class="animation mb-0 text-truncate">Download Script Skin ${scriptmlbb}</p>`,
  ];
  setInterval(() => {
    welcomeMsgEl.innerHTML = arrayEl[array];

    array++;
    if (array >= arrayEl.length) {
      array = 0;
    }
  }, 5000);
}

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-206846692-3");
