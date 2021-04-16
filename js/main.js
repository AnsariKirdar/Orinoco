document.getElementById('nav_button').addEventListener('click', displayNav);
var nav_status = 1;

function displayNav() {
    if (nav_status == 1) {
        document.getElementById('nav_box').style.display = '';
        nav_status = 0;
    } else {
        document.getElementById('nav_box').style.display = 'None';
        nav_status = 1;
    }
}