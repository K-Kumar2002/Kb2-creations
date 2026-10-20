// Studio Direct Contact Configuration - A.K. Creation
export const contactConfig = {
  // Verified studio phone number with +91 country code (India)
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  
  // WhatsApp direct number (digits only with 91 country code for wa.me)
  whatsappNumber: "919876543210",
  whatsappDisplay: "+91 98765 43210",
  whatsappDefaultMessage: "Hello A.K. Creation! I would like to discuss a project with your team.",

  email: "contact@akcreation.dev"
};

export function getTelUrl() {
  return `tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`;
}

export function getWhatsAppUrl(customMessage = null) {
  const msg = customMessage || contactConfig.whatsappDefaultMessage;
  const cleanNumber = contactConfig.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
}
