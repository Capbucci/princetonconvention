"use client"

import Contactform from '@/components/forms/Contactform'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCar, FaPlane, FaTrain, FaBus, FaSubway } from 'react-icons/fa'
export const metadata = {
  title: 'Princeton Convention Center Contact Number',
  description: 'Contact Princeton Convention Center for bookings. Best banquet and wedding halls near LB Nagar Hyderabad.',
  alternates: {
    canonical: "https://princetonconvention.com/contact/",
  },
}

export default function ContactPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
              <p className="text-xl text-gray-200 mb-8">
                Ready to plan your perfect event? Get in touch with our expert team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='bg-[#ECEBF3] py-16 md:py-32'>
        <div className="container-custom ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-4 rounded-lg md:p-8">
              <Contactform />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-900 mb-2">Address</h4>
                    <a href="https://maps.app.goo.gl/MPLfZwRvXnQAaEfRA" target="_blank" rel="noopener noreferrer" className="text-gray-600 ">Princeton Convention Centre LB Nagar, Hyderabad Telangana 500074 India</a>

                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-xl text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-900 mb-2">Phone</h4>
                    <a href="tel:+919949736693" className="text-gray-600  hover:text-primary-600">+91 99497 36693</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-xl text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-900 mb-2">Email</h4>
                    {/* <a href="mailto:info@princetonconvention.com" className="text-gray-600  block hover:text-primary-600">
                      info@princetonconvention.com
                    </a> */}
                    <a href="mailto:booking.princeton@celebrityhospitality.com" className="text-gray-600  block hover:text-primary-600">
                      booking.princeton@celebrityhospitality.com
                    </a>
                    {/* <a href="mailto:events@princetonconvention.com" className="text-gray-600  block hover:text-primary-600">
                      events@princetonconvention.com
                    </a> */}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-xl text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-900 mb-2">Business Hours</h4>
                    <p className="text-gray-600 ">Monday - Sunday: 9:00 AM - 9:00 PM</p>
                    <p className="text-gray-600 ">Emergency: 24/7</p>
                    <p className="text-gray-600 ">Office: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>



              {/* Quick Contact Buttons */}
              <div className="space-y-4 mb-12">
                <a
                  href="tel:+919949736693"
                  className="flex items-center justify-center space-x-3 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  <FaPhone className="text-xl" />
                  <span>Call Now: +91 99497 36693</span>
                </a>

                <a
                  href="https://wa.me/+919949736693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp: +91 99497 36693</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='py-16 '>
        <div className="container mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1774426839825!2d78.54248757396131!3d17.35519260373417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98bddddeb9c1%3A0x571ec64d567f348a!2sPrinceton%20Convention%20Centre%20%7C%20Best%20Convention%20Center%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1759830808907!5m2!1sen!2sin"
            width="100%"
            height="450px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className='bg-[#ECEBF3] py-16 md:py-32'>
        <div className="max-w-6xl mx-auto">
          <div className="">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">What is the minimum booking period?</h4>
                  <p className="text-gray-600 text-sm">We require a minimum of 7 days advance booking for most events. For peak season, we recommend booking 2-3 months in advance.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Do you provide catering services?</h4>
                  <p className="text-gray-600 text-sm">Yes, we have an in-house catering team that offers multiple cuisines. We can also accommodate external caterers if needed.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Is parking available?</h4>
                  <p className="text-gray-600 text-sm">Yes, we provide complimentary valet parking for all events. Additional parking spaces are available for larger gatherings.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Can we visit the venue before booking?</h4>
                  <p className="text-gray-600 text-sm">Absolutely! We encourage site visits. Please call us to schedule a convenient time for a guided tour of our facilities.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">What is your cancellation policy?</h4>
                  <p className="text-gray-600 text-sm">Cancellations made 30 days before the event receive a full refund. Cancellations within 30 days are subject to our cancellation policy.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Do you provide event planning services?</h4>
                  <p className="text-gray-600 text-sm">Yes, our experienced event planning team can help you organize every aspect of your event, from decorations to entertainment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
