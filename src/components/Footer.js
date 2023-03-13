import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>Copyright &#169; {new Date().getFullYear()}</li>
        <li><a href="/privacy" className="nav-link">Privacy Policy</a></li>
        <li><a href="/terms" className="nav-link">Terms of Service</a></li>
        <li><a href="/cookies" className="nav-link">Cookies</a></li>
        <li><a href="/contact" className="nav-link">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer;