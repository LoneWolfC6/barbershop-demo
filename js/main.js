// ================================
// Booking Form Logic (booking.html)
// ================================

// Only runs on booking.html (checks for form existence)
if (document.querySelector('#booking-form')) {
  const bookingForm = document.querySelector('#booking-form');
  const confirmationMessage = document.querySelector('.confirmation-message');

  // Handle form submission
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission
    bookingForm.style.display = 'none'; // Hide form after submission
    confirmationMessage.style.display = 'block'; // Show confirmation message
  });
}