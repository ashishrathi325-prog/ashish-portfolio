
const whatsappNumber = "7906845188";

const message = "Hi Ashish, I visited your portfolio and would like to connect.";

const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

document.getElementById("whatsapp").href = whatsappLink;
