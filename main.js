// JavaScript to toggle the show class on click
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menubtn');
    const navList = document.querySelector('nav ul');

    
    menuButton.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});

