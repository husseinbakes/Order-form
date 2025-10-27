document.getElementById("cakeOrderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    // Use browser's built-in validation (e.g., required fields, number min/max)
    if (!form.checkValidity()) {
        form.reportValidity(); // Show native error messages
        return;
    }

    // --- 1. Fetch Form Data ---
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const event = document.getElementById("event").value;
    const date = document.getElementById("date").value;
    const cake = document.getElementById("cake").value;
    const servings = document.getElementById("servings").value.trim(); // NEW
    const region = document.getElementById("region").value;           // NEW
    const location = document.getElementById("location").value.trim();
    const notes = document.getElementById("notes").value.trim();

    // --- 2. Create WhatsApp Message ---
    // Use clear, structured formatting for easy reading on WhatsApp
    const rawMessage = `Hello Hussein Bakes! 👋 I would like to order a custom cake:

*Name:* ${name}
*Phone:* ${phone}
*Event:* ${event}
*Event Date:* ${date}
*Cake Type:* ${cake}
---
*Servings Required:* ${servings} slices
*Delivery Region:* ${region}
*Specific Location:* ${location}
---
*Design Notes:* ${notes ? notes : 'No special notes provided.'}
---
Please confirm availability and provide a quote. Thank you! 🎂`;

    // --- 3. Send to WhatsApp ---
    const phone_number = "254710975805";
    
    // Encode the entire message to ensure special characters (like *) are transmitted correctly
    const whatsappURL = `https://wa.me/${phone_number}?text=${encodeURIComponent(rawMessage)}`;

    window.open(whatsappURL, "_blank");
});
