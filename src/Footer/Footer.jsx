import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Discover the latest trends in fashion and explore a wide range of products at Myntra.</p>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
        <div className="footer-section">
        
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a href="https://m.facebook.com/">
                <FontAwesomeIcon icon={faFacebookF} />
                <span className="social-label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
                <span className="social-label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <FontAwesomeIcon icon={faYoutube} />
                <span className="social-label">YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Myntra. All rights reserved.</p>
      </div>
    </footer>
    )
}
export default Footer;
