let menu_burger = document.getElementById('btn_burger')
let wrapper_burger_menu = document.getElementById('wrapper_burger_menu')

menu_burger.addEventListener('click', function () {
    wrapper_burger_menu.classList.toggle('change');
});