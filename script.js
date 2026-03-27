function sayHello() {
    const messages = [
        "Hello from Cloudflare! 🌐",
        "Nice to meet you! 👋",
        "This is running on the edge! ⚡",
        "GitHub + Cloudflare = Magic ✨"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '30px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.background = 'rgba(0, 0, 0, 0.8)';
    notification.style.color = 'white';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '50px';
    notification.style.fontSize = '1.1rem';
    notification.style.opacity = '0';
    notification.style.transition = 'all 0.4s ease';
    notification.textContent = randomMessage;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.bottom = '50px';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.bottom = '30px';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// Bonus: Press 'h' key for hello
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'h') {
        sayHello();
    }
});