function op(){
    document.getElementById('menu').style.display = "flex";
    document.getElementById('div-menu').style.marginRight = "0px";
    document.getElementById('div-menu').style.animation = "ab 1s ease";
}
function cl(){
    document.getElementById('menu').style.display = "none";
    document.getElementById('div-menu').style.marginRight = "-2000px";
    document.getElementById('div-menu').style.animation = "aa 1s ease infinite";
}
function home(){
    document.getElementById('menu').style.display = "none";
    document.getElementById('section-1').style.display = "flex";
    document.getElementById('section-2').style.display = "none";
    document.getElementById('section-3').style.display = "none";
}
function tra(){
    document.getElementById('menu').style.display = "none";
    document.getElementById('section-2').style.display = "flex";
    document.getElementById('section-1').style.display = "none";
    document.getElementById('div-menu').style.marginRight = "-2000px";
    document.getElementById('section-3').style.display = "none";
}
function mons(){
    document.getElementById('section-3').style.display = "flex";
    document.getElementById('section-1').style.display = "none";
    document.getElementById('div-menu').style.marginRight = "-2000px";
    document.getElementById('section-2').style.display = "none";
    document.getElementById('menu').style.display = "none";
}