const burger = document.querySelector('.header .navbar .navlist .burger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const menu_item = document.querySelectorAll('.header .navbar .navlist ul li a');
const header = document.querySelector('.header .container');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach(burger => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// Show Pass

function showpass() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}