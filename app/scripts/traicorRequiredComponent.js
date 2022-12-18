document.getElementById('switchBtn1').onclick = function () {
    console.log('sdfgsdfg');
    btn1 = document.getElementById('switchBtn1'),
    btn2 = document.getElementById('switchBtn2'),
    title1 = document.getElementById('slide-title-1'),
    title2 = document.getElementById('slide-title-2'),
    item1 = document.querySelector('.main-content-1'),
    item2 = document.querySelector('.main-content-2'); 

    btn1.classList.toggle('active');
    btn2.classList.toggle('active');
    title1.classList.toggle('active');
    title2.classList.toggle('active');
    item1.classList.toggle('active');
    item2.classList.toggle('active');


};
document.getElementById('switchBtn2').onclick = function () {
    btn1 = document.getElementById('switchBtn1'),
    btn2 = document.getElementById('switchBtn2'),
    title1 = document.getElementById('slide-title-1'),
    title2 = document.getElementById('slide-title-2'),
    item1 = document.querySelector('.main-content-1'),
    item2 = document.querySelector('.main-content-2'); 

    btn1.classList.toggle('active');
    btn2.classList.toggle('active');
    title1.classList.toggle('active');
    title2.classList.toggle('active');
    item1.classList.toggle('active');
    item2.classList.toggle('active');


};