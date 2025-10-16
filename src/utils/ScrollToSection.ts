export const scrollToSection = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  sectionId: string
) => {
  event.preventDefault();

  const section = document.querySelector(sectionId);
  if (section) {
    const yOffset = -128; // Ajusta este valor según la altura de tu header
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
