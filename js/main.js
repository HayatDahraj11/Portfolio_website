// =================================
// Main JavaScript Functionality
// =================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initThemeToggle();
    initNavigation();
    initMobileMenu();
    initProjectFilters();
    initContactForm();
    initScrollEffects();
    initAnimations();
});

// =================================
// Theme Toggle (Dark/Light Mode)
// =================================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const theme = htmlElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add subtle animation
        document.body.style.transition = 'background-color 0.3s ease';
    });
}

// =================================
// Navigation Scroll Effects
// =================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Debounced scroll handler for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(function() {
            // Add shadow on scroll
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Update active nav link based on scroll position
            updateActiveNavLink(sections, navLinks);
        });
    }, { passive: true });
    
    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

function updateActiveNavLink(sections, navLinks) {
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// =================================
// Mobile Menu
// =================================

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    
    // Toggle menu on button click
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    // Close menu when overlay is clicked
    if (overlay) {
        overlay.addEventListener('click', function() {
            closeMobileMenu();
        });
    }
    
    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    if (overlay) {
        overlay.classList.toggle('active');
    }
    
    // Animate nav links when menu opens
    if (navMenu.classList.contains('active')) {
        navLinks.forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, index * 50);
        });
    } else {
        navLinks.forEach(link => {
            link.style.opacity = '';
            link.style.transform = '';
        });
    }
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    } else {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
}

function closeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    
    mobileMenuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    
    if (overlay) {
        overlay.classList.remove('active');
    }
    
    // Restore body scroll
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
}

// =================================
// Project Filtering
// =================================

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden');
                    // Animate in
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// =================================
// Contact Form Validation & Submission
// =================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset errors
        clearFormErrors();
        
        // Validate form
        let isValid = true;
        
        if (!nameInput.value.trim()) {
            showError('name', 'Please enter your name');
            isValid = false;
        }
        
        if (!isValidEmail(emailInput.value.trim())) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
            showError('message', 'Please enter a message (at least 10 characters)');
            isValid = false;
        }
        
        if (isValid) {
            // Simulate form submission
            submitForm(contactForm);
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}Error`);
    
    input.classList.add('error');
    error.textContent = message;
    error.classList.add('visible');
}

function clearFormErrors() {
    const inputs = document.querySelectorAll('.form-input');
    const errors = document.querySelectorAll('.form-error');
    
    inputs.forEach(input => input.classList.remove('error'));
    errors.forEach(error => {
        error.classList.remove('visible');
        error.textContent = '';
    });
}

function submitForm(form) {
    // In a real application, you would send this to a server
    // For demo purposes, we'll just show a success message
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // Show success message
    const successMessage = document.getElementById('formSuccess');
    successMessage.classList.add('visible');
    
    // Reset form
    form.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('visible');
    }, 5000);
    
    // In production, integrate with a service like:
    // - Formspree: https://formspree.io/
    // - Netlify Forms: https://www.netlify.com/products/forms/
    // - EmailJS: https://www.emailjs.com/
    // - Your own backend API
}

// =================================
// Scroll Effects & Animations
// =================================

function initScrollEffects() {
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    
    // Debounced scroll handler for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(function() {
            if (window.scrollY > 500) {
                backToTop.style.display = 'flex';
                // Add smooth fade-in
                setTimeout(() => backToTop.style.opacity = '1', 10);
            } else {
                backToTop.style.opacity = '0';
                setTimeout(() => backToTop.style.display = 'none', 300);
            }
        });
    }, { passive: true });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Reveal elements on scroll
    observeElements();
}

function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars when they come into view
                if (entry.target.classList.contains('skill-category')) {
                    animateSkillBars(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe project cards, skill categories, testimonials
    const elementsToObserve = document.querySelectorAll('.project-card, .skill-category, .testimonial-card');
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });
}

function animateSkillBars(skillCategory) {
    const skillBars = skillCategory.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// =================================
// Project Modal
// =================================

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    // Project details (in a real app, this would come from a database or API)
    const projectDetails = {
        project1: {
            title: 'AI Customer Support Chatbot',
            image: 'assets/images/project-chatbot.jpg',
            description: 'A sophisticated AI-powered customer support chatbot that leverages natural language processing to understand customer queries and provide accurate, contextual responses.',
            problem: 'The client was experiencing high support ticket volumes and long response times, leading to customer dissatisfaction.',
            solution: 'Developed an intelligent chatbot using TensorFlow and NLP techniques that can handle common customer inquiries, escalate complex issues to human agents, and learn from interactions.',
            technologies: ['Python', 'TensorFlow', 'NLP', 'Flask', 'MongoDB', 'WebSocket'],
            results: [
                '40% reduction in support ticket volume',
                '60% faster average response time',
                '85% customer satisfaction rating',
                '24/7 availability without additional staffing costs'
            ],
            links: {
                demo: 'https://demo.example.com',
                github: 'https://github.com/hayatsikandar/chatbot'
            }
        },
        project2: {
            title: 'Modern E-commerce Platform',
            image: 'assets/images/project-ecommerce.jpg',
            description: 'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and AI-powered product recommendations.',
            problem: 'Small businesses needed an affordable, scalable e-commerce solution with modern features.',
            solution: 'Built a comprehensive platform using the MERN stack with Stripe integration for payments and machine learning for personalized recommendations.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redis', 'AWS S3'],
            results: [
                '45% increase in sales within first quarter',
                '3x faster page load times',
                '25% higher conversion rate',
                'Successfully handling 10,000+ daily visitors'
            ],
            links: {
                demo: 'https://demo.example.com',
                github: 'https://github.com/hayatsikandar/ecommerce'
            }
        },
        project3: {
            title: 'Predictive Analytics Dashboard',
            image: 'assets/images/project-analytics.jpg',
            description: 'An advanced analytics platform that uses machine learning to forecast sales trends and provide actionable business insights.',
            problem: 'Business leaders lacked data-driven insights for strategic planning and resource allocation.',
            solution: 'Created a predictive analytics dashboard using PyTorch for forecasting models and React for an intuitive data visualization interface.',
            technologies: ['Python', 'PyTorch', 'Pandas', 'React', 'D3.js', 'PostgreSQL', 'Docker'],
            results: [
                '85% prediction accuracy',
                'Enabled 3-month advance planning',
                '20% cost reduction through optimization',
                'Improved inventory management by 35%'
            ],
            links: {
                demo: 'https://demo.example.com',
                github: 'https://github.com/hayatsikandar/analytics'
            }
        }
    };
    
    const project = projectDetails[projectId];
    
    if (project) {
        modalBody.innerHTML = `
            <h2 id="modalTitle" style="font-size: 2rem; margin-bottom: 1.5rem; color: var(--text-primary);">${project.title}</h2>
            <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: var(--radius-lg); margin-bottom: 2rem;">
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Overview</h3>
                <p style="color: var(--text-secondary); line-height: 1.7;">${project.description}</p>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Problem Statement</h3>
                <p style="color: var(--text-secondary); line-height: 1.7;">${project.problem}</p>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Solution</h3>
                <p style="color: var(--text-secondary); line-height: 1.7;">${project.solution}</p>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Technologies Used</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${project.technologies.map(tech => `
                        <span style="padding: 8px 16px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.875rem; color: var(--text-secondary);">${tech}</span>
                    `).join('')}
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Results & Impact</h3>
                <ul style="list-style: none; padding: 0;">
                    ${project.results.map(result => `
                        <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--border-color); color: var(--text-secondary); display: flex; align-items: center; gap: 0.75rem;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            ${result}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View Live Demo</a>
                <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">View on GitHub</a>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// =================================
// Animations
// =================================

function initAnimations() {
    // Add CSS animation keyframes dynamically if needed
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.7;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add staggered animation to nav menu items on mobile
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.style.animation = `slideDown 0.3s ease forwards ${index * 0.1}s`;
        link.style.opacity = '0';
    });
}

// =================================
// Utility Functions
// =================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// =================================
// Performance Optimization
// =================================

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// =================================
// Console Easter Egg
// =================================

console.log('%c👋 Hello there, curious developer!', 'color: #00A8A8; font-size: 20px; font-weight: bold;');
console.log('%cInterested in how this portfolio was built?', 'color: #666; font-size: 14px;');
console.log('%cCheck out the source code on GitHub!', 'color: #00A8A8; font-size: 14px;');
console.log('%chttps://github.com/hayatsikandar', 'color: #00A8A8; font-size: 14px; text-decoration: underline;');
