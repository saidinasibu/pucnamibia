document.addEventListener('DOMContentLoaded', function() {
    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        // Show/hide scroll to top button
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
        
        // Add scrolled class to navbar
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
        
        // Reveal animations
        const reveals = document.querySelectorAll('.reveal-up');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll to top function
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initialize reveal animations on page load
    const reveals = document.querySelectorAll('.reveal-up');
    const windowHeight = window.innerHeight;
    
    // Check elements on page load
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
    
    // Smooth scroll for all links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is not an anchor link and not external
            if (!this.getAttribute('href').startsWith('#') && 
                !this.getAttribute('href').startsWith('http') && 
                !this.getAttribute('href').startsWith('mailto') && 
                !this.getAttribute('href').startsWith('tel')) {
                e.preventDefault();
                
                // Add a small delay to allow the click animation to show
                setTimeout(() => {
                    window.location.href = this.getAttribute('href');
                }, 300);
            }
        });
    });
});