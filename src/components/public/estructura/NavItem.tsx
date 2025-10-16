import { scrollToSection } from "../../../utils/ScrollToSection";

export const NavItem = ({
  enlace,
  texto,
  submenu,
}: {
  enlace: string;
  texto: string;
  submenu?: boolean;
}) => {
  return (
    <a
      href={`${enlace}`}
      onClick={(e) => {
        scrollToSection(e, enlace);
      }}
      className={`relative flex py-3 text-base font-medium transition-all duration-200 px-9 text-white md:text-xl te font-futuroNormal before:absolute before:bg-primary-main before:left-0 before:right-0 before:bottom-0 hover:text-verde ${
        submenu ? "group " : ""
      }`}
    >
      {texto}

      <ul className="absolute left-0 hidden w-full border-t bg-secondary-main top-full group-hover:block">
        <li>
          <a
            onClick={(e) => {
              scrollToSection(e, "#para-familia");
            }}
            href="#para-familia"
            className="block px-6 py-3 hover:bg-secondary-dark"
          >
            Para ti y tu familia
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              scrollToSection(e, "#para-empresa");
            }}
            href="#para-empresa"
            className="block px-6 py-3 hover:bg-secondary-dark"
          >
            Para tu empresa
          </a>
        </li>
      </ul>
    </a>
  );
};
