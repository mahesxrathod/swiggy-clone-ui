import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <img
              src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
              alt="Swiggy Logo"
              className="w-sm"
            />
          </div>
          <p className="text-sm text-gray-500">© 2025 Swiggy Limited</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact us</h3>
          <ul className="space-y-1 text-sm mb-4">
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>

          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Available in:</h3>
          <ul className="space-y-1 text-sm">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Surat</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Life at Swiggy</h3>
          <ul className="space-y-1 text-sm mb-4">
            <li>Explore With Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>

          <h3 className="font-semibold mb-2">Social Links</h3>
          <div className="flex space-x-4 text-xl text-gray-600">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaPinterest />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-4 flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto">
        <p className="text-sm font-semibold mb-2 md:mb-0">
          For better experience, download the Swiggy app now
        </p>
        <div className="flex space-x-4">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-10"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
