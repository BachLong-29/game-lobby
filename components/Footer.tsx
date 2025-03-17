"use client";

import "@/styles/footer.scss";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useGetInitInfo } from "@/context/HomeContext";

const Footer = () => {
  const { footerContent } = useGetInitInfo();
  const currentYear = new Date().getFullYear();
  const copyright = footerContent.copyright.replace(
    "{{year}}",
    currentYear.toString()
  );
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="license">
          <Image
            width={120}
            height={40}
            src={footerContent.logoUrl}
            alt="License Logo"
            className="license-logo"
          />
        </div>
        <p className="copyright">{copyright}</p>
      </div>

      <ul className="footer-links">
        {footerContent.links.map((link, index) => (
          <Link key={index} href={link.pagePath}>
            {link.text}
          </Link>
        ))}
      </ul>

      <div className="footer-providers">
        {footerContent.providerLogos.map((logo, index) => {
          return (
            <div className="flex" key={index}>
              <Image
                alt={logo.name}
                src={logo.imageUrl}
                width={40}
                height={40}
              />
              {logo.name}
            </div>
          );
        })}
      </div>
      <div
        className="license-description"
        dangerouslySetInnerHTML={{ __html: footerContent.licenseText }}
      />
    </footer>
  );
};

export default Footer;
