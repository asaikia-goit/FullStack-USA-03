(() => {
    
    // Actual menu that should show up
    const mobileMenu = document.querySelector('.mobile-nav-menu');
    
    // Grab hamburger icon element
    const openMenuBtn = document.querySelector('.hamburger-icon');

    // Grab close X element
    const closeMenuBtn = document.querySelector('.close-menu');

    // function to add class show-menu
    const showMobileMenu = () => {
        mobileMenu.classList.add('show-menu');
    }

    // function to remove class show-menu
    const closeMobileMenu = () => {
        mobileMenu.classList.remove('show-menu');
    }

    // capture click on openMenuBtn 
    openMenuBtn.addEventListener('click', showMobileMenu);

    // capture click on closeMenuBtn 
    closeMenuBtn.addEventListener('click', closeMobileMenu);
 })();