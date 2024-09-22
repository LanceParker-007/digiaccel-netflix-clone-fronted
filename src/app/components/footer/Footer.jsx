import Link from "next/link";
import React from "react";

// Create an array for the footer links
const footerLinks = [
  { text: "FAQ", href: "#" },
  { text: "Help Centre", href: "#" },
  { text: "Account", href: "#" },
  { text: "Media Centre", href: "#" },
  { text: "Investor Relations", href: "#" },
  { text: "Jobs", href: "#" },
  { text: "Ways to Watch", href: "#" },
  { text: "Terms of Use", href: "#" },
  { text: "Privacy", href: "#" },
  { text: "Cookie Preferences", href: "#" },
  { text: "Corporate Information", href: "#" },
  { text: "Contact Us", href: "#" },
  { text: "Speed Test", href: "#" },
  { text: "Legal Notices", href: "#" },
  { text: "Only on Netflix", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-8 px-3">
      <div className="container mx-auto text-gray-500">
        <p className="mb-4">Questions? Call 000-800-040-1843</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Map through the footerLinks array */}
          {footerLinks.map((link, index) => (
            <Link href={link.href} key={index} className="hover:underline">
              {link.text}
            </Link>
          ))}
        </div>

        <select className="bg-transparent border rounded px-2 py-1 mt-8">
          <option>English</option>
          <option>हिन्दी</option>
        </select>

        <p className="mt-4">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
