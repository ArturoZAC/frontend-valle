import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { logo } from "../../shared/images";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="hidden px-4 py-2 text-white bg-primary-main md:block">
        <div className="flex items-center justify-between mx-auto text-sm max-w-7xl">
          <div className="flex gap-6">
            {/* <a
              href="tel:+51999999999"
              className="flex items-center gap-2 transition hover:text-gray-300"
            >
              <Phone size={16} />
              <span>(+51) 997 125 302 </span>
            </a> */}
            <a
              href="mailto:consultas@dominio.com"
              className="flex items-center gap-2 transition hover:text-gray-300"
            >
              <Mail size={16} />
              <span>consultas@dominio.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-3 text-secondary-main">
              <a href="#" className="transition hover:text-gray-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="transition hover:text-gray-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="transition hover:text-gray-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="transition hover:text-gray-300">
                <Youtube size={18} />
              </a>
            </div>

            <a
              href="#"
              className="flex items-center gap-2 bg-amarillo hover:bg-secondary-600 text-gray-800 hover:text-white px-4 py-1.5 rounded transition"
            >
              <Phone size={16} />
              <span className="font-medium">Contáctanos </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-4 py-4 bg-white shadow-md">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="block w-[150px] md:w-[200px]" />
            </div>
          </div>

          {/* Navigation menu */}
          <nav className="items-center hidden gap-8 md:flex">
            <a
              href="#inicio"
              className="font-medium text-gray-700 transition hover:text-green-600"
            >
              INICIO
            </a>
            <a
              href="#nosotros"
              className="font-medium text-gray-700 transition hover:text-green-600"
            >
              NOSOTROS
            </a>

            <a
              href="#servicios"
              className="font-medium text-gray-700 transition hover:text-green-600"
            >
              SERVICIOS
            </a>
            <a
              href="#contacto"
              className="font-medium text-gray-700 transition hover:text-green-600"
            >
              CONTACTO
            </a>
          </nav>

          {/* Brochure button */}
          <button className="items-center hidden gap-2 bg-secondary-main rounded-main text-white px-6 py-2.5 hover:bg-primary-main transition md:flex">
            <FileText size={18} />
            <span className="font-medium">Brochure</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-700 transition hover:text-green-600 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 border-t border-gray-200 md:hidden">
            <nav className="flex flex-col py-4 space-y-4">
              <a
                href="#"
                className="font-medium text-gray-700 transition hover:text-green-600"
              >
                INICIO
              </a>
              <a
                href="#"
                className="font-medium text-gray-700 transition hover:text-green-600"
              >
                NOSOTROS
              </a>
              <a
                href="#"
                className="font-medium text-gray-700 transition hover:text-green-600"
              >
                SERVICIOS
              </a>
              <a
                href="#"
                className="font-medium text-gray-700 transition hover:text-green-600"
              >
                CONTACTO
              </a>

              {/* Mobile contact info */}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <a
                  href="tel:+51999999999"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Phone size={16} />
                  <span>(+51) 997 125 302 </span>
                </a>
                <a
                  href="mailto:consultas@dominio.com"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Mail size={16} />
                  <span>consultas@dominio.com</span>
                </a>
              </div>

              {/* Mobile social media */}
              <div className="flex gap-4 pt-4 border-t border-gray-200 text-secondary-main">
                <a href="#" className="transition hover:text-gray-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="transition hover:text-gray-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="transition hover:text-gray-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="transition hover:text-gray-300">
                  <Youtube size={20} />
                </a>
              </div>

              {/* Mobile brochure button */}
              <button className="flex items-center justify-center gap-2 bg-secondary-main rounded-main text-white px-6 py-2.5 hover:bg-primary-main transition mt-4">
                <FileText size={18} />
                <span className="font-medium">Brochure</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
