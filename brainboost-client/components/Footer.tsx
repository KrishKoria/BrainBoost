import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Krish Koria. All rights Reserved.</p>
      <div className="footer__links">
        {[
          "About Us",
          "Privacy Policy",
          "Terms of Service",
          "Cookie Policy",
          "Security",
        ].map((link) => (
          <Link
            key={link}
            href={`/${link.toLowerCase().replace(" ", "-")}`}
            className="footer__link"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
