//untuk navbar (hamburger menu) jika layar mengecil 
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// untuk hamburger menu agar membuka jika di klik
if (bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

// untuk close button agar menutup jika di klik
if (close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}