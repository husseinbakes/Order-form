document.getElementById("cakeOrderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const event = document.getElementById("event").value;
  const date = document.getElementById("date").value;
  const cake = document.getElementById("cake").value;
  const notes = document.getElementById("notes").value.trim();

  const message = `Hello Hussein Bakes! 👋%0A%0AI would like to order a custom cake:%0A
Name: ${name}%0A
Event: ${event}%0A
Event Date: ${date}%0A
Cake Type: ${cake}%0A
Notes: ${notes ? notes : 'N/A'}%0A%0A
Please confirm availability. Thank you! 🎂`;

  const phone = "254710975805";
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURI(message)}`;

  window.open(whatsappURL, "_blank");
});
