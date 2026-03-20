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

const navMap = {
    'index.html': 'nav-home',
    '': 'nav-home',
    'contact.html': 'nav-contact',
    'kits.html': 'nav-kits',
    'vlab.html': 'nav-vlab',
    'labsetup.html': 'nav-labsetup'
};

if (navMap[currentPage]) {
    document.getElementById(navMap[currentPage])?.classList.add('text-cyan-400');
}
   