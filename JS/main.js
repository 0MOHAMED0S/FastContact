function updateWhatsAppLink() {
    var input = document.getElementById('phoneNumber').value;
    var link = document.getElementById('whatsAppLink');
    link.href = "https://wa.me/+20" + input;
}