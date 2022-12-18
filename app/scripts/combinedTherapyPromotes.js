document.querySelector('.switchBtn').onclick = function () {
    
    item1 = document.querySelector('.main-content-1'),
    item2 = document.querySelector('.main-content-2'); 

    item1.classList.toggle('active');
    item2.classList.toggle('active');


};