"use client";

import { motion } from "framer-motion";
import {
  FaBehance,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left */}
        <p className="footer-text">
          © {new Date().getFullYear()} Nourhane Kaskas
          <span> · Digital & Product Designer </span>
        </p>

        {/* Right */}
        <div className="footer-links">
          <FooterIcon
            href="https://www.behance.net/nourhanekaskass"
            label="Behance"
          >
            <FaBehance />
          </FooterIcon>

          <FooterIcon
            href="https://github.com/nourhaneka/"
            label="GitHub"
          >
            <FaGithub />
          </FooterIcon>

          <FooterIcon
            href="https://www.linkedin.com/in/nourhan-kaskas/"
            label="LinkedIn"
          >
            <FaLinkedinIn />
          </FooterIcon>

          <FooterIcon
            href="mailto:nourhanekaskas16@email.com"
            label="Email"
          >
            <FaEnvelope />
          </FooterIcon>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      aria-label={label}
      className="footer-icon"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.a>
  );
}
