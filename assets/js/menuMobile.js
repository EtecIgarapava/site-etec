const btn_menu = document.getElementById('btn-menu');
const icon = document.querySelector('.btn-menu i');
const menu = document.getElementById("menu");

btn_menu.addEventListener('click', () => {
  menu.classList.toggle("ativo");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }

});
