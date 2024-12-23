import { setupHomePage } from './components/homePage.js';
import { setupModal } from './components/modal.js';

// Initialize Home Page
setupHomePage();

// Setup Modal
setupModal();

// Show Login Modal on Load
function showLoginModal() {
  const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
  loginModal.show();
}
window.showLoginModal = showLoginModal;