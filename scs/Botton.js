function createWhatsAppLink(number, message) {
  let url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
  return url;
}

const phoneNumber = '6281234567890';
const message = 'Hello, how can I help you?';

const link = createWhatsAppLink(phoneNumber, message);
console.log(link);
 
