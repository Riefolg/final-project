const menuToggle = document.querySelector('.menu-toggle');

const nav = document.querySelector('nav ul');

const menu = document.querySelector('.material-symbols-outlined');

const closeIcon = document.querySelector('.close');


let isCloseIconRemoved = false;

        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('slide');
            menu.classList.toggle('menu');
            
            if (isCloseIconRemoved) {
                closeIcon.classList.add('close'); // Menambahkan kembali class 'close'
            } else {
                closeIcon.classList.remove('close'); // Menghapus class 'close'
            }

            isCloseIconRemoved = !isCloseIconRemoved; // Mengganti status class
        });