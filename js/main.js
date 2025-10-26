// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
    });
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

// Copy contract address to clipboard
const contractAddresses = document.querySelectorAll('.contract-address');
contractAddresses.forEach(element => {
    element.addEventListener('click', async () => {
        const address = '0x2987D36a348F5D9b94B1A21B956D7E936Bd5Ba13';
        try {
            await navigator.clipboard.writeText(address);
            
            // Show feedback
            const originalText = element.textContent;
            element.style.color = '#4ecdc4';
            element.innerHTML = 'Copied! <span class="icon icon-check"></span>';
            
            setTimeout(() => {
                element.style.color = '';
                element.innerHTML = address + ' <span class="icon icon-copy"></span>';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = address;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            // Show feedback
            element.style.color = '#4ecdc4';
            element.innerHTML = 'Copied! <span class="icon icon-check"></span>';
            setTimeout(() => {
                element.style.color = '';
                element.innerHTML = address + ' <span class="icon icon-copy"></span>';
            }, 2000);
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animations
const animateElements = document.querySelectorAll('.about__card, .team__member, .link__card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 46, 0.98)';
    } else {
        header.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Simple SVG Pie Chart Implementation
function createTokenomicsChart() {
    const chartContainer = document.getElementById('tokenomicsChart');
    if (!chartContainer) return;

    const data = [
        { label: 'Pre Sales', value: 10, color: '#f9ca24' },
        { label: 'Founders', value: 30, color: '#ff6b6b' },
        { label: 'Treasury', value: 20, color: '#4ecdc4' },
        { label: 'Staking Reserve', value: 10, color: '#45b7d1' },
        { label: 'Liquidity Pool', value: 20, color: '#6c5ce7' },
        { label: 'Partnerships', value: 5, color: '#a29bfe' },
        { label: 'Listings', value: 5, color: '#fd79a8' }
    ];

    const size = 300;
    const radius = size / 2 - 20;
    const centerX = size / 2;
    const centerY = size / 2;

    // Create SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('viewBox', `0 0 ${size} ${size}`);

    let currentAngle = 0;
    
    data.forEach((segment, index) => {
        const angle = (segment.value / 100) * 2 * Math.PI;
        const endAngle = currentAngle + angle;
        
        const x1 = centerX + radius * Math.cos(currentAngle);
        const y1 = centerY + radius * Math.sin(currentAngle);
        const x2 = centerX + radius * Math.cos(endAngle);
        const y2 = centerY + radius * Math.sin(endAngle);
        
        const largeArcFlag = angle > Math.PI ? 1 : 0;
        
        const pathData = [
            `M ${centerX} ${centerY}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            'Z'
        ].join(' ');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('fill', segment.color);
        path.setAttribute('stroke', '#1a1a2e');
        path.setAttribute('stroke-width', '2');
        path.style.cursor = 'pointer';
        path.style.transition = 'transform 0.2s ease';
        
        // Add hover effects
        path.addEventListener('mouseenter', () => {
            path.style.transform = 'scale(1.05)';
            path.style.transformOrigin = `${centerX}px ${centerY}px`;
        });
        
        path.addEventListener('mouseleave', () => {
            path.style.transform = 'scale(1)';
        });
        
        // Add tooltip
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = `${segment.label}: ${segment.value}%`;
        path.appendChild(title);
        
        svg.appendChild(path);
        currentAngle = endAngle;
    });

    // Clear container and add SVG
    chartContainer.innerHTML = '';
    chartContainer.appendChild(svg);
}

// Initialize chart when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createTokenomicsChart();
});

// Add floating animation to manga character
function addFloatingAnimation() {
    const character = document.querySelector('.manga-character');
    if (character) {
        let isFloating = false;
        
        character.addEventListener('mouseenter', () => {
            if (!isFloating) {
                character.style.animation = 'float 1s ease-in-out infinite';
                isFloating = true;
            }
        });
        
        character.addEventListener('mouseleave', () => {
            setTimeout(() => {
                character.style.animation = 'float 3s ease-in-out infinite';
                isFloating = false;
            }, 1000);
        });
    }
}

// Add click effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize animations
addFloatingAnimation();

// Add some random sparkle effects
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #fff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: sparkle 1.5s ease-out forwards;
    `;
    
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}

// Add sparkle CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Create sparkles periodically
setInterval(createSparkle, 3000);

// Console easter egg
console.log(`
🎌 MANGA COIN 🎌
┌─────────────────────────────────────┐
│  Welcome to the MANGA COIN website! │
│  Contract: 0x2987D36a348...Bd5Ba13  │
│  Total Supply: 69,000,000,000 MANGA │
│  Made with ❤️ by the community      │
└─────────────────────────────────────┘

🚀 To the moon! 🌙
`);

// Countdown Timer
function initCountdownTimer() {
    const targetDate = new Date('2025-10-27T20:00:00+02:00'); // 27.10.2025 20:00 MEZ (UTC+2)
    const countdownElement = document.getElementById('countdown-timer');
    
    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;
        
        if (timeDifference <= 0) {
            countdownElement.textContent = 'LAUNCHED! 🚀';
            countdownElement.style.color = '#4ecdc4';
            return;
        }
        
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        // Calculate total hours (including days)
        const totalHours = days * 24 + hours;
        
        countdownElement.textContent = `${totalHours}h ${minutes}m ${seconds}s`;
    }
    
    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize countdown when DOM is loaded
document.addEventListener('DOMContentLoaded', initCountdownTimer);

// Add performance monitoring
let startTime = performance.now();
window.addEventListener('load', () => {
    const loadTime = performance.now() - startTime;
    console.log(`⚡ Page loaded in ${loadTime.toFixed(2)}ms`);
});