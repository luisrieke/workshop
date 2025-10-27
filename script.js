let cartCount = 0;
let cartTotal = 0;

function addToCart(productName, price) {
    cartCount++;
    cartTotal += price;
    
    // Update cart count display
    document.getElementById('cart-count').textContent = cartCount;
    
    // Show notification
    showNotification(`Added ${productName} to cart!`);
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b35, #8b4513);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(255, 107, 53, 0.5);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        font-weight: bold;
        border: 2px solid #ff8c52;
    `;
    
    document.body.appendChild(notification);
    
    // Add spooky emoji randomly
    const spookyEmojis = ['🎃', '💀', '👻', '🦇', '🕷️', '👹'];
    const randomEmoji = spookyEmojis[Math.floor(Math.random() * spookyEmojis.length)];
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function scrollToShop() {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

