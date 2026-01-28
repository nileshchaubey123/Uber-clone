import { FaLinkedinIn,FaYoutube,FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <img className="h-9 w-15 mb-8" src="images/uber-logo.png" alt="Uber" />

        {/* Visit Help Center */}
        <a href="#" className="text-base hover:text-gray-300 mb-12 inline-block">
          Visit Help Center
        </a>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 mt-12">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Our offerings</a></li>
              <li><a href="#" className="hover:text-white">Newsroom</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Products</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Ride</a></li>
              <li><a href="#" className="hover:text-white">Drive</a></li>
              <li><a href="#" className="hover:text-white">Eat</a></li>
              <li><a href="#" className="hover:text-white">Uber for Business</a></li>
              <li><a href="#" className="hover:text-white">Uber Freight</a></li>
              <li><a href="#" className="hover:text-white">Gift cards</a></li>
            </ul>
          </div>

          {/* Global citizenship */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Global citizenship</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Safety</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
            </ul>
          </div>

          {/* Travel */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Travel</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Reserve</a></li>
              <li><a href="#" className="hover:text-white">Airports</a></li>
              <li><a href="#" className="hover:text-white">Cities</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mb-12 pb-8 border-b border-gray-800">
          
          <FaLinkedinIn />
          <FaYoutube />
          <FaInstagram />
          <BsTwitterX />
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center text-sm text-gray-400">
          <div>© 2026 Uber Technologies Inc.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;