document.getElementById("cakeOrderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim(); // New field
  const event = document.getElementById("event").value;
  const date = document.getElementById("date").value;
  const cake = document.getElementById("cake").value;
  const location = document.getElementById("location").value.trim(); // New field
  const notes = document.getElementById("notes").value.trim();

  // Basic validation to prevent sending if required fields are missing
  if (!name || !phone || !event || !date || !cake || !location) {
    alert("Please fill out all required fields marked with *.");
    return;
  }

  // Use backticks for easier multi-line string creation
  const rawMessage = `Hello Hussein Bakes! 👋 I would like to order a custom cake:

Name: ${name}
Phone: ${phone}
Event: ${event}
Event Date: ${date}
Cake Type: ${cake}
Delivery Location: ${location}
---
Design Notes: ${notes ? notes : 'No special notes provided.'}
---
Please confirm availability and provide a quote. Thank you! 🎂`;

  const phone_number = "254710975805";
  
  // Use encodeURIComponent on the whole message for proper formatting in WhatsApp
  const whatsappURL = `https://wa.me/${phone_number}?text=${encodeURIComponent(rawMessage)}`;

  window.open(whatsappURL, "_blank");
});
