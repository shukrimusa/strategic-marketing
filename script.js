var bar = document.getElementById('bar');
var menu = document.querySelector('.menu-bar');

menu.style.right = "-360px";
bar.onclick = function () {
    if (menu.style.right == "-360px") {
        menu.style.right = "0"
    }
    else {
        menu.style.right = "-360px";
    }

}

window.onscroll = function () {
    menu.style.right = "-360px"
}
