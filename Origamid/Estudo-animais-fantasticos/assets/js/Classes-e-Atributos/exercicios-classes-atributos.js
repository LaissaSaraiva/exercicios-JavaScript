// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
console.log(itensMenu);

itensMenu.forEach(function (item) {
  item.classList.add("ativo");
});

console.log(itensMenu);
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach(function (item) {
  item.classList.remove("ativo");
});

itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll("img");
console.log(imagens);

imagens.forEach(function (img) {
  const possuiAlt = img.hasAttribute("alt");
  console.log(img, possuiAlt);
});

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]');

console.log(linkExterno);

linkExterno.setAttribute("href", "https://www.google.com");
console.log(linkExterno);
