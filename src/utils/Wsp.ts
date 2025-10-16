export function redirectToWhatsApp(phone: string, message: string) {
  // Codifica el mensaje para que funcione correctamente en la URL
  const encodedMessage = encodeURIComponent(message);

  // Detecta si el usuario está en un dispositivo móvil
  const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(
    navigator.userAgent
  );

  // Define la URL según el dispositivo
  const whatsappURL = isMobile
    ? `https://wa.me/${phone}?text=${encodedMessage}` // móvil
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`; // escritorio

  // Redirecciona al usuario
  window.open(whatsappURL, "_blank");
}
