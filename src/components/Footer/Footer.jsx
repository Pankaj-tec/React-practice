import { GoHome } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__cont">
        <div className="footer__lft">
          <div className="footer__location">
            <GoHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>India</p>
            </div>
          </div>
          <div className="footer__phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1-2323-343-23
            </h4>
          </div>
          <div className="footer__email">
            <h4>
              <MdEmail
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              info@gmail.com
            </h4>
          </div>
        </div>
        <div className="footer__rgt">
          <h4>about the company</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="footer__social-icon">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <CiTwitter
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaWhatsapp
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaYoutube
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin style={{ color: "#fff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
