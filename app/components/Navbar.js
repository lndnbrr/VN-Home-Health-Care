'use client'

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const servicesLinks = [
    { href: "/pages/skilledservices/skilledNursing", label: "Skilled Nursing" },
    { href: "/pages/skilledservices/rehabilitation", label: "Rehabilitation Services" },
    { href: "/pages/skilledservices/homeHealthAide", label: "Home Health Aides" },
    { href: "/pages/skilledservices/medicalSocialServices", label: "Medical Social Services" },
  ];

  return (
    <>
    <nav className="sticky top-0 z-50 py-2 flex items-center bg-secondary border-b-6 border-primary text-primary text-[9px] sm:text-[12px] md:text-[15px] lg:text-[20px]">
      <Link className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:top-auto md:translate-x-0 md:translate-y-0 md:pl-6" href="/">
        <Image
        src={"/images/vnnhc_logo.png"}
        alt="VN Home Health Care Logo"
        width={100}
        height={100}
        className="w-[60px] md:w-[90px] lg:w-[100px] pt-2 pb-2"
        />
      </Link>
      <div className="hidden md:flex flex-1 justify-around font-bold">
        <Link href="/" className="ml-2 text-center">Home</Link>
        <Link href="/pages/about" className="text-center">About</Link>

        <div
          ref={servicesRef}
          className="relative text-center pb-2"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((open) => !open)}
            className="inline-flex items-center gap-1 cursor-pointer"
          >
            Skilled Services
            <span aria-hidden="true" className="text-[0.7em]">
              {servicesOpen ? "▲" : "▼"}
            </span>
          </button>

          {servicesOpen && (
            <ul role="menu" className="absolute left-1/2 top-full z-50 flex w-max min-w-[140px] -translate-x-1/2 flex-col overflow-hidden rounded-lg border-2 border-primary bg-secondary text-left shadow-lg">
              {servicesLinks.map((link) => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    onClick={() => setServicesOpen(false)}
                    className="block whitespace-nowrap px-4 py-2 hover:bg-hover-c focus-visible:bg-hover-c"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link href="/pages/insurance" className="text-center">Insurance Information</Link>
        <Link href="/pages/contact" className="text-center">Contact Form</Link>
        <Link href="/pages/faq" className="text-center">Frequently Asked Questions</Link>
      </div>

      <div ref={mobileMenuRef} className="relative flex md:hidden ml-auto pr-6">
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="cursor-pointer text-xl leading-none"
        >
          <span aria-hidden="true" className="text-3xl">{mobileMenuOpen ? "✕" : "☰"}</span>
        </button>

        {mobileMenuOpen && (
          <ul role="menu" className="absolute right-0 mt-3 mr-1 top-full z-50 flex w-max min-w-[220px] flex-col overflow-hidden rounded-lg border-2 border-primary bg-secondary text-left font-bold shadow-lg text-lg">
            <li role="none">
              <Link
                href="/"
                role="menuitem"
                onClick={() => setMobileMenuOpen(false)}
                className="block whitespace-nowrap px-4 py-2 hover:bg-hover-c focus-visible:bg-hover-c"
              >
                Home
              </Link>
            </li>
            <li role="none">
              <Link
                href="/pages/about"
                role="menuitem"
                onClick={() => setMobileMenuOpen(false)}
                className="block whitespace-nowrap px-4 py-2 hover:bg-hover-c focus-visible:bg-hover-c"
              >
                About
              </Link>
            </li>

            <li role="none">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((open) => !open)}
                className="flex w-full items-center justify-between gap-1 px-4 py-2 cursor-pointer hover:bg-hover-c focus-visible:bg-hover-c"
              >
                Skilled Services
                <span aria-hidden="true" className="text-[0.7em]">
                  {mobileServicesOpen ? "▲" : "▼"}
                </span>
              </button>
              {mobileServicesOpen && (
                <ul role="menu" className="flex flex-col border-y-2 border-primary text-xs">
                  {servicesLinks.map((link) => (
                    <li key={link.href} role="none">
                      <Link
                        href={link.href}
                        role="menuitem"
                        onClick={() => {
                          setMobileServicesOpen(false);
                          setMobileMenuOpen(false);
                        }}
                        className="block whitespace-nowrap px-6 py-2 hover:bg-hover-c focus-visible:bg-hover-c border-[0.5px] opacity-90"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li role="none">
              <Link
                href="/pages/insurance"
                role="menuitem"
                onClick={() => setMobileMenuOpen(false)}
                className="block whitespace-nowrap px-4 py-2 hover:bg-hover-c focus-visible:bg-hover-c"
              >
                Insurance Information
              </Link>
            </li>
            <li role="none">
              <Link
                href="/pages/contact"
                role="menuitem"
                onClick={() => setMobileMenuOpen(false)}
                className="block whitespace-nowrap px-4 py-2 hover:bg-hover-c focus-visible:bg-hover-c"
              >
                Contact Form
              </Link>
            </li>
            <li role="none">
              <Link
                href="/pages/faq"
                role="menuitem"
                onClick={() => setMobileMenuOpen(false)}
                className="block whitespace-nowrap px-4 py-2 hover:bg-hover-c focus-visible:bg-hover-c"
              >
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
    </>
  );
};
