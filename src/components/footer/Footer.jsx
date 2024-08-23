import "./footer.css";

import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <Icon icon="mage:facebook-square" width="24" height="24" />
        <Icon icon="ant-design:instagram-filled" width="24" height="24" />
        <Icon icon="ant-design:youtube-filled" width="24" height="24" />
        <Icon icon="mdi:twitter" width="24" height="24" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright">©1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
