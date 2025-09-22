
// Small script for interactions
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('شكرًا! هذه نسخة تجريبية من النموذج — لوضع نموذج يعمل فعليًا، اتبع تعليمات README.');
});
// If user later updates GitHub username, update the link automatically by setting localStorage
const gh = localStorage.getItem('github') || '';
if(gh) document.getElementById('github-link').href = gh;
