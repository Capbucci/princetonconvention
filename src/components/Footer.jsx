import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '/about/' },
    { name: 'Venues & Facilities', href: '/venues/' },
    { name: 'Events', href: '/events/' },
    { name: 'Dining & Catering', href: '/dining/' },
    { name: 'Gallery', href: '/gallery/' },
    { name: 'Blog', href: 'https://blog.princetonconvention.com/' },
    // { name: 'Packages', href: '/packages/' },
    // { name: 'Contact', href: '/contact/' },
  ]

  const eventTypes = [
    'Weddings & Receptions',
    'Corporate Meetings',
    'Conferences & Seminars',
    'Exhibitions & Trade Shows',
    'Social Gatherings',
    'Product Launches',
    'Birthday Parties',
    'Anniversary Celebrations',
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                {/* <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Princeton Convention</h3>
                  <p className="text-sm text-gray-300">Centre</p>
                </div> */}
                <Link href="/" className="flex items-center space-x-2 relative w-40 h-8">
                  <Image src="/images/logo.png" alt="Princeton Convention Centre" fill />
                </Link>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Hyderabad's premier destination for weddings, corporate events, and social gatherings.
                Experience luxury and elegance in the heart of LB Nagar.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="text-lg" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 pl-0 md:pl-14">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Types */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Events We Host</h4>
              <ul className="space-y-2">
                {eventTypes.map((event) => (
                  <li key={event} className="text-gray-300 text-sm">
                    {event}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Princeton Convention Centre<br />
                      LB Nagar, Hyderabad<br />
                      Telangana 500074
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FaPhone className="text-primary-400 flex-shrink-0" />
                  <div>
                    <a
                      href="tel:+919949736693"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                     +91 99497 36693
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-primary-400 flex-shrink-0" />
                  <a
                    href="mailto:booking.princeton@celebrityhospitality.com"
                    className="text-gray-300 hover:text-primary-400 transition-colors break-all"
                  >
                    booking.princeton@celebrityhospitality.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="text-primary-400 flex-shrink-0" />
                  <a
                    href="https://wa.me/+919949736693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    WhatsApp: +91 99497 36693
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Princeton Convention Centre. All rights reserved. Powered by <a href="http://www.internetmoguls.com/" title="Internet Moguls" target="_blank">Internet Moguls </a>
            </p>

            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy/" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions/" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cancellation-policy/" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 w-12 h-12 z-50">
        <a href="https://wa.me/+919949736693" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <div className="relative w-12 h-12">
            <Image src="/images/whatsapp-icon.png" alt="WhatsApp Chat" fill className="object-contain" sizes="60px"/>
          </div>
        </a>
      </div>

    </footer>
  )
}
