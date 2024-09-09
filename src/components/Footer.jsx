import React from "react";
import '../styles/Home/footer.scss';
import logoFooter from '../assets/LogoFooter.png';

const Footer = () => {
    return (
    <footer>
        <div className="footer">
            <img src={logoFooter} alt="logo Kasa" className="logo-footer"/>
            <span className="footer-text">© 2020 Kasa. All rights reserved</span>
        </div>
    </footer>
);
}

export default Footer;