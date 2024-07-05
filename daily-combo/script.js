function startCountdown(id, targetDateStr) {
     const targetDate = new Date(targetDateStr).getTime();
     
     function updateCountdown() {
         const now = new Date().getTime();
         const distance = targetDate - now;
         
         if (distance < 0) {
             document.getElementById(id).innerHTML = "Combo expired";
             clearInterval(interval);
             return;
         }
         
     //  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     //  ${days}d
         document.getElementById(id).innerHTML = `${hours}h ${minutes}m ${seconds}s`;
     }
 
     const interval = setInterval(updateCountdown, 1000);
     updateCountdown();
 }
 
 // Example usage:
 startCountdown('timer', 'July 6, 2024 17:30:00');
 startCountdown('second', 'August 1, 2024 12:00:00');
 