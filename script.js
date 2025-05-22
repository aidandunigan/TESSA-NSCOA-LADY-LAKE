document.addEventListener('DOMContentLoaded', () => {
  console.log('TESSA website loaded successfully.');

  // Smooth scroll to sections
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Placeholder interaction feature for future expansion
  const chatbot = document.querySelector('zapier-interfaces-chatbot-embed');
  if (chatbot) {
    chatbot.addEventListener('load', () => {
      console.log('Chatbot loaded and ready.');
    });
  }
});
