 let toggleBtn = document.getElementById('menu-btn');
    let closeBtn = document.getElementById('menu-close');
let menu = document.getElementById('mobile-menu');

    if (toggleBtn && closeBtn && menu) {
        toggleBtn.addEventListener('click', () => {
            menu.classList.remove('translate-x-full');
});
        closeBtn.addEventListener('click', () => {
            menu.classList.add('translate-x-full');
   });

   menu.addEventListener('click', (e) => {
            if (e.target === menu) {
                menu.classList.add('translate-x-full');
            }
    });
    }

const currentPage = window.location.pathname.split('/').pop();
    
 if (currentPage === 'index.html' || currentPage === '') {
        document.getElementById('nav-home').classList.add('text-cyan-400');
    } else if (currentPage === 'contact.html') {
        document.getElementById('nav-contact').classList.add('text-cyan-400');
    }