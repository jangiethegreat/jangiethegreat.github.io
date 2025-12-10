// Navigation hover effect
let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach(item=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item)=> item.addEventListener("mouseover",activeLink));

// Menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function() {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            if (!navigation.classList.contains('active')) {
                navigation.classList.add("active");
                main.classList.add("active");
            }
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active section highlighting in navigation
const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('.navigation a[data-nav]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.parentElement.classList.remove('hovered');
                if (link.getAttribute('data-nav') === sectionId) {
                    link.parentElement.classList.add('hovered');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('span');
        const originalText = btnText.textContent;
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Disable button and show loading
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        submitBtn.style.opacity = '0.7';
        
        try {
            // Option 1: Using FormSubmit (free service)
            const response = await fetch('https://formsubmit.co/ajax/' + PERSONAL_INFO.email, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Contact from ${formData.name}`,
                    _captcha: 'false'
                })
            });
            
            if (response.ok) {
                // Success
                showNotification('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            // Fallback: Open email client
            const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
            window.location.href = mailtoLink;
            showNotification('📧 Opening your email client...', 'info');
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            btnText.textContent = originalText;
            submitBtn.style.opacity = '1';
        }
    });
}

// Notification function
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <p>${message}</p>
        <button class="notification-close">&times;</button>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto-hide after 5 seconds
    const autoHide = setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Close button handler
    notification.querySelector('.notification-close').addEventListener('click', () => {
        clearTimeout(autoHide);
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
}

// Add typing effect to title
const typingText = document.querySelector('.gradient-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    
    // Start typing after page load
    setTimeout(typeWriter, 500);
}

// Animate stats counter
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
};

// Trigger counter animation on scroll
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsRow = document.querySelector('.stats-row');
if (statsRow) {
    statsObserver.observe(statsRow);
}