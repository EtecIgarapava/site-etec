let btn_links = document.getElementById('btn-links');
let menu_links = document.getElementById('menu-links');

btn_links.addEventListener('click', (event) => {
    event.stopPropagation();
    btn_links.classList.toggle('ativo');
    menu_links.classList.toggle('ativo');
});

menu_links.addEventListener('click', (event) => {
    event.stopPropagation();
});

document.addEventListener('click', () => {
    btn_links.classList.remove('ativo');
    menu_links.classList.remove('ativo');
});
