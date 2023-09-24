document.addEventListener("DOMContentLoaded", function () {
  const stateLinks = document.querySelectorAll("[data-state]");
  const lawyerInfo = document.getElementById("state-lawyer-info");

  // Sample lawyer data for different states
  const lawyers = {
    "Andhra Pradesh": {
      name: "John Doe (Andhra Pradesh Lawyer)",
      email: "john.andhra@example.com",
      phone: "+91 9876543210",
    },
    "Arunachal Pradesh": {
      name: "Jane Smith (Arunachal Pradesh Lawyer)",
      email: "jane.arunachal@example.com",
      phone: "+91 8765432109",
    },
    // Add more state-specific lawyer data here
  };

  // Function to display lawyer information based on the selected state
  function displayLawyerInfo(state) {
    if (lawyers[state]) {
      const lawyer = lawyers[state];
      lawyerInfo.innerHTML = `
                <p>Name: ${lawyer.name}</p>
                <p>Email: <a href="mailto:${lawyer.email}">${lawyer.email}</a></p>
                <p>Phone: <a href="tel:${lawyer.phone}">${lawyer.phone}</a></p>
            `;
    } else {
      lawyerInfo.innerHTML =
        "<p>No lawyer information available for this state.</p>";
    }
  }

  // Event listener to handle state selection
  stateLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedState = event.target.getAttribute("data-state");
      displayLawyerInfo(selectedState);
    });
  });
});
