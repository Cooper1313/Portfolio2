// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Initialize Typed.js for typing effect
document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.getElementById('typed');
    if (typedElement) {
        new Typed('#typed', {
            strings: ['Kaiya Cooper', 'an Information Systems Student', 'a Creative Developer', 'a Tech Enthusiast', 'an Innovation Advocate'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect - Fixed to maintain dark background
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate skill bars when they come into view
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillFill = entry.target;
                const width = skillFill.getAttribute('data-width');
                skillFill.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize skill bar animations
document.addEventListener('DOMContentLoaded', animateSkillBars);

// Mind map interaction effects
document.addEventListener('DOMContentLoaded', function() {
    const categoryNodes = document.querySelectorAll('.category-node');
    
    categoryNodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            // Add pulse effect to connected lines
            const connections = document.querySelectorAll('.connection');
            connections.forEach(connection => {
                connection.style.strokeWidth = '3px';
                connection.style.opacity = '1';
            });
        });
        
        node.addEventListener('mouseleave', function() {
            // Reset connection lines
            const connections = document.querySelectorAll('.connection');
            connections.forEach(connection => {
                connection.style.strokeWidth = '2px';
                connection.style.opacity = '0.6';
            });
        });
    });
});

// Contact form handling with mailto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
            const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
            const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
            const message = contactForm.querySelector('textarea[placeholder="Your Message"]').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill out all required fields (Name, Email, and Message).');
                return;
            }
            
            // Create mailto link
            const mailtoSubject = subject || 'Portfolio Contact';
            const mailtoBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoLink = `mailto:kaiyacooper@ufl.edu?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
            
            // Show feedback to user
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-envelope-open"></i> Opening Email Client...';
            submitBtn.disabled = true;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Reset form and button after a delay
            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                alert('Your email client should now be open with a pre-filled message. Please send the email to complete your message.');
            }, 2000);
        });
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Parallax effect for sections
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const lavaLamp = document.querySelector('.lava-lamp');
    if (lavaLamp) {
        lavaLamp.style.transform = `translateY(${rate}px)`;
    }
});
