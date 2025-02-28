import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react"; 

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="footer bg-base-200 text-base-content p-6 sm:p-10 md:p-12 mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:flex lg:justify-between lg:w-full">
          {/* Contact Info Section */}
          <nav className="space-y-4">
            <h6 className="footer-title text-lg font-bold">Get In Touch</h6>

            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-[#414073]" />
              <a
                href="mailto:info@hanidentalclinic.com"
                className="link link-hover text-base"
              >
                info@hanidentalclinic.com
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#414073]" />
              <a
                href="https://maps.app.goo.gl/a8S3cwd24sqi8kYT6"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-base"
              >
                Bole Michael, Addis Ababa, Ethiopia
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-[#414073]" />
              <a href="tel:+251911244567" className="link link-hover text-base">
                +251 9 11 24 45 67
              </a>
            </div>
          </nav>

          {/* Links Section */}
          <nav className="space-y-4">
            <h6 className="footer-title text-lg font-bold">Quick Links</h6>

            <ul className="space-y-2">
              <li><a href="/" className="link link-hover text-base">Home</a></li>
              <li><a href="/about" className="link link-hover text-base">About Us</a></li>
              <li><a href="/services" className="link link-hover text-base">Services</a></li>
            </ul>
          </nav>

          {/* Social Media Section */}
          <nav className="space-y-4">
            <h6 className="footer-title text-lg font-bold">Follow Us</h6>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-[#414073]">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-[#414073]">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="text-[#414073]">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </nav>
        </div>
      </footer>

      {/* Secondary Footer */}
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-6 sm:px-10 md:px-12 py-4 sm:py-6 mx-auto w-full">
        <aside className="flex justify-center items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="ml-2 text-center">
            Hani Specialty Dental Clinic <br />
            Providing quality dental care 
          </p>
        </aside>

        <aside className="mt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Hani Specialty Dental Clinic. All rights reserved.
          </p>
        </aside>
      </footer>
    </>
  );
}
