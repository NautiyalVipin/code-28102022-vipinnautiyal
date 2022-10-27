import "../styles/footer.css";

// Footer component contains footer logo and navbar 

const Footer = () => {
  return (
    <ul className="footer">
        {/* List item : Footer Logo and Copyright */}
      <li className="footer__left">
        <span className="footer__logo">
          <a href="#home">iStay</a>
        </span>
        <p className="footer__copy">
          © 2022 iStay <br />
          All rights reserved
        </p>
      </li>
      {/* Footer navbar */}
      <li>
        <a href="#explore">Explore</a>
      </li>
      <li>
        <a href="#about-us">About Us</a>
      </li>
      <li>Cities</li>
      <li>
        <button>Call</button>
      </li>
    </ul>
  );
};

export default Footer;
