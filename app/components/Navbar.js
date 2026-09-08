'use client'

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key === "Escape") setServicesOpen(false);
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
      <Link className="pl-6" href="/">
        <Image
        src={"/images/vnnhc_logo.png"}
        alt="VN Home Health Care Logo"
        width={100}
        height={100}
        className="w-[40px] sm:w-[70px] md:w-[90px] lg:w-[100px]"
        />
      </Link>
      <div className="flex flex-1 justify-around font-bold">
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
    </nav>
    </>
  );
};
