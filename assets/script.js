document.addEventListener("DOMContentLoaded", function () {
  // Get all the "Book Now" links on the lawyer profile pages
  const bookLinks = document.querySelectorAll(".book-video-call-link");

  // Function to handle the click event when booking a video call
  function handleBookingClick(event) {
    // Prevent the default behavior of the link (e.g., navigating to a new page)
    event.preventDefault();

    // Get the lawyer's name from the link or any relevant data attribute
    const lawyerName = event.target.getAttribute("data-lawyer-name");

    // You can implement your logic here to initiate a video call with the lawyer.
    // For example, you can open a modal with a booking form or integrate with a video conferencing API.

    // For demonstration purposes, we'll show an alert with the lawyer's name.
    alert(`Booking a video call with ${lawyerName}`);
  }

  // Attach the click event handler to each "Book Now" link
  bookLinks.forEach((link) => {
    link.addEventListener("click", handleBookingClick);
  });
});
