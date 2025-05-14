// Load saved theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light-theme';
  document.body.className = savedTheme;
});

// Toggle theme and save to localStorage
document.getElementById('themeToggle').addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
  
  // Save preference
  const theme = body.className;
  localStorage.setItem('theme', theme);

  // Trigger box animation
  const box = document.getElementById('animatedBox');
  box.classList.remove('bounce');
  void box.offsetWidth; // Trigger reflow to restart animation
  box.classList.add('bounce');
});
