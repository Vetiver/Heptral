
let item = document.querySelectorAll('.main-content-item'),
openBtn = document.querySelectorAll('.plus'),
closeBtn = document.querySelectorAll('.closeBtn'),
info = document.querySelectorAll('.info-bars'),
info1 = document.querySelector('.info1'),
info2 = document.querySelector('.info2'),
info3 = document.querySelector('.info3'),
info4 = document.querySelector('.info4');

for (let i = 0; i < item.length; i++) {
    openBtn[i].addEventListener('click', function () {
        n=i+1;
        openBtn[i].classList.remove('active');
        closeBtn[i].classList.add('active');
        item.forEach(element => {
            element.classList.add('inactive');
        });
        item[i].classList.remove('inactive');
        info1.classList.remove('active');
        info[n].classList.add('active');
    })
    
}
for (let i = 0; i < item.length; i++) {
    closeBtn[i].addEventListener('click', function () {
        n=i+1;
        closeBtn[i].classList.remove('active');
        openBtn[i].classList.add('active');
        item.forEach(element => {
            element.classList.remove('inactive');
        });
        info1.classList.add('active');
        info[n].classList.remove('active');
         
    })
    
}

