document.getElementById("cakeOrderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    // Check browser built-in validation
    if (!form.checkValidity()) {
        form.reportValidity(); // Show native error messages
        return;
    }

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const event = document.getElementById("event").value;
    const date = document.getElementById("date").value;
    const cake = document.getElementById("cake").value;
    const location = document.getElementById("location").value.trim();
    const notes = document.getElementById("notes").value.trim();

    // The form data is valid at this point
    const rawMessage = `Hello Hussein Bakes! 👋 I would like to order a custom cake:

Name: ${name}
Phone: ${phone}
Event: ${event}
Event Date: ${date}
Cake Type: ${cake}
Delivery Location: ${location}
---
**REQUIRED SERVINGS:** (e.g., 20 people, 50 slices) - Please specify in your notes.
---
Design Notes: ${notes ? notes : 'No special notes provided.'}
---
Please confirm availability and provide a quote. Thank you! 🎂`;

    const phone_number = "254710975805";
    
    // Use encodeURIComponent on the whole message for proper formatting in WhatsApp
    const whatsappURL = `https://wa.me/${phone_number}?text=${encodeURIComponent(rawMessage)}`;

    window.open(whatsappURL, "_blank");
});
