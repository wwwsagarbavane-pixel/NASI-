window.initNSAI = function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksUpper = document.querySelector('.nav-links-upper');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    if (mobileMenuBtn && navLinksUpper) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksUpper.classList.toggle('active');
            
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinksUpper.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksUpper.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });

        // Mobile Dropdown Accordion
        const mobileDropBtns = document.querySelectorAll('.mobile-dropbtn');
        mobileDropBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Close others
                mobileDropBtns.forEach(otherBtn => {
                    if(otherBtn !== btn) {
                        otherBtn.classList.remove('active');
                        otherBtn.nextElementSibling.classList.remove('active');
                    }
                });
                
                // Toggle current
                btn.classList.toggle('active');
                btn.nextElementSibling.classList.toggle('active');
            });
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Simple Slider Logic
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (slides.length > 0) {
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            if (index >= slides.length) currentSlide = 0;
            if (index < 0) currentSlide = slides.length - 1;
            
            slides[currentSlide].classList.add('active');
            if(dots[currentSlide]) dots[currentSlide].classList.add('active');
        }

        if(nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide++;
                showSlide(currentSlide);
            });
        }
        
        if(prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide--;
                showSlide(currentSlide);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // Auto slide
        setInterval(() => {
            currentSlide++;
            showSlide(currentSlide);
        }, 6000);
    }
});

// Hero Slider Animation
window.initNSAI = function() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Change image every 5 seconds
    }
});

// Year Filter Logic for Reports Page
window.initNSAI = function() {
    const filterPills = document.querySelectorAll('.filter-pill');
    const reportCards = document.querySelectorAll('.report-card');

    if (filterPills.length > 0 && reportCards.length > 0) {
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                // Remove active class from all pills
                filterPills.forEach(p => p.classList.remove('active'));
                // Add active class to clicked pill
                pill.classList.add('active');

                const selectedYear = pill.getAttribute('data-filter');

                reportCards.forEach(card => {
                    if (selectedYear === 'all') {
                        card.classList.remove('hidden');
                    } else {
                        if (card.getAttribute('data-year') === selectedYear) {
                            card.classList.remove('hidden');
                        } else {
                            card.classList.add('hidden');
                        }
                    }
                });
            });
        });
    }
});

// Calendar Month Navigation Logic
window.initNSAI = function() {
    const monthPills = document.querySelectorAll('.month-pill');
    
    if (monthPills.length > 0) {
        monthPills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all
                monthPills.forEach(p => p.classList.remove('active'));
                
                // Add active to clicked
                pill.classList.add('active');
                
                // Scroll to target
                const targetId = pill.getAttribute('data-target');
                const targetEl = document.getElementById(targetId);
                
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Intersection Observer to update active pill on scroll
        const monthCards = document.querySelectorAll('.month-card');
        if(monthCards.length > 0 && 'IntersectionObserver' in window) {
            const observerOptions = {
                root: null,
                rootMargin: '-20% 0px -70% 0px',
                threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        // Update active pill
                        monthPills.forEach(p => {
                            if (p.getAttribute('data-target') === id) {
                                p.classList.add('active');
                                // Ensure pill is visible in scroll container
                                p.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                            } else {
                                p.classList.remove('active');
                            }
                        });
                    }
                });
            }, observerOptions);

            monthCards.forEach(card => observer.observe(card));
        }
    }
});

// Global Scroll Reveal Logic
window.initNSAI = function() {
    // 1. Auto-apply reveal class to major sections
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        // Don't apply to hero sections so they load immediately
        if (!sec.classList.contains('hero-full-bg') && 
            !sec.classList.contains('calendar-hero') && 
            !sec.classList.contains('reports-hero') &&
            !sec.classList.contains('about-hero')) {
            sec.classList.add('reveal-on-scroll');
        }
    });

    // 2. Apply to specific cards to make them slide up individually
    const monthCards = document.querySelectorAll('.month-card');
    monthCards.forEach((card, index) => {
        card.classList.add('reveal-on-scroll');
        // Add a slight transition delay based on column (0, 1, 2)
        card.style.transitionDelay = (index % 3) * 0.1 + 's';
    });

    const reportCards = document.querySelectorAll('.report-card');
    reportCards.forEach((card, index) => {
        card.classList.add('reveal-on-scroll');
        card.style.transitionDelay = (index % 3) * 0.1 + 's';
    });
    
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card, index) => {
        card.classList.add('reveal-on-scroll');
        card.style.transitionDelay = (index % 4) * 0.1 + 's';
    });

    // 3. Initialize Intersection Observer
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, {
            root: null,
            threshold: 0.05,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('is-visible'));
    }
}