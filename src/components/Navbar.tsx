import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      } bg-white/80 backdrop-blur-sm`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={closeMenu}
        >
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczO0v25v5O2BUGtjMD2OhjsetcJp5wVldnW0ryH04CpG0KzmXAgXx-8rfIptUaWVyRk5cS_2NfLITcHK1pPEFaLaxPBF87AzwHjFxWOE8yC37jj2K-L0kuXVtg775nOg0KKqvlpwKkMavExnTfc6drRz=w1800-h441-s-no-gm"
            alt="ADD EDIT"
            className="h-12 w-auto"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-primary font-semibold" : "text-dark"
              } hover:text-primary transition-colors`
            }
          >
            {t("nav.home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-primary font-semibold" : "text-dark"
              } hover:text-primary transition-colors`
            }
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${
                isActive ? "text-primary font-semibold" : "text-dark"
              } hover:text-primary transition-colors`
            }
          >
            {t("nav.services")}
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `${
                isActive ? "text-primary font-semibold" : "text-dark"
              } hover:text-primary transition-colors`
            }
          >
            {t("nav.portfolio")}
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${
                isActive ? "text-primary font-semibold" : "text-dark"
              } hover:text-primary transition-colors`
            }
          >
            {t("nav.blog")}
          </NavLink>
          <NavLink to="/contact" className="btn btn-primary">
            {isEnglish ? "Contact Us" : "Nous contacter"}
          </NavLink>
          <LanguageSwitch />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSwitch />
          <button
            type="button"
            className="text-dark hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute left-0 right-0 z-20 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container flex flex-col space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-primary font-semibold" : "text-dark"
              } hover:text-primary transition-colors py-2`
            }
            onClick={closeMenu}
          >
            {t("nav.home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-primary font-semibold" : "text-dark"
              } hover:text-primary transition-colors py-2`
            }
            onClick={closeMenu}
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${
                isActive ? "text-primary font-semibold" : "text-dark"
              } hover:text-primary transition-colors py-2`
            }
            onClick={closeMenu}
          >
            {t("nav.services")}
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `${
                isActive ? "text-primary font-semibold" : "text-dark"
              } hover:text-primary transition-colors py-2`
            }
            onClick={closeMenu}
          >
            {t("nav.portfolio")}
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${
                isActive ? "text-primary font-semibold" : "text-dark"
              } hover:text-primary transition-colors py-2`
            }
            onClick={closeMenu}
          >
            {t("nav.blog")}
          </NavLink>
          <NavLink
            to="/contact"
            className="btn btn-primary text-center"
            onClick={closeMenu}
          >
            {isEnglish ? "Contact Us" : "Nous contacter"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
