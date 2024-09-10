let menu_burger = document.getElementById('btn_burger')
let wrapper_burger_menu = document.getElementById('wrapper_burger_menu')
let button = document.getElementById("alertButton");

menu_burger.addEventListener('click', function () {
    wrapper_burger_menu.classList.toggle('change');
});

button.addEventListener("click", function () {
    alert("Bouton cliqué !");
});