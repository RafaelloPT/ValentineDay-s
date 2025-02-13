function updateCountdown() {
    const targetDate = new Date();
    targetDate.setDate(14);
    targetDate.setHours(0, 0, 0, 0);
    
    if (targetDate - new Date() < 0) {
        targetDate.setMonth(targetDate.getMonth() + 1);
    }
    
    const currentDate = new Date();
    const difference = targetDate - currentDate;
    
    // Se a diferença for menor ou igual a zero, redireciona
    if (difference <= 0) {
        window.location.href = 'carta.html';
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = 
        `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);