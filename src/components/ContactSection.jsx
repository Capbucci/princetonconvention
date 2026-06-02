'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCar, FaPlane, FaTrain, FaBus, FaSubway } from 'react-icons/fa'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    venue: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    alert('Thank you for your enquiry! We will contact you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guestCount: '',
      venue: '',
      message: ''
    })
    setIsSubmitting(false)
  }



  const transportation = [
    {
      icon: FaCar,
      title: 'By Car',
      distance: '5 minutes',
      description: 'Easy access from main roads, ample parking available'
    },
    {
      icon: FaSubway,
      title: 'By Metro',
      distance: '10 minutes walk',
      description: 'Nearest metro station: LB Nagar Metro Station'
    },
    {
      icon: FaTrain,
      title: 'By Train',
      distance: '15 minutes',
      description: 'Nearest railway station: Secunderabad Railway Station'
    },
    {
      icon: FaPlane,
      title: 'By Air',
      distance: '45 minutes',
      description: 'Rajiv Gandhi International Airport, Shamshabad'
    },
    {
      icon: FaBus,
      title: 'By Bus',
      distance: '5 minutes walk',
      description: 'Multiple bus stops nearby, well connected'
    }
  ]

  const eventTypes = [
    'Wedding',
    // 'Corporate Meeting',
    // 'Conference',
    'Exhibition',
    'Birthday Party',
    'Anniversary',
    'Product Launch',
    'Social Gathering',
    'Other'
  ]

  const venues = [
    'Grand Ballroom',
    'Royal Hall',
    'Convention Center',
    // 'Garden Pavilion',
    // 'Executive Boardroom',
    'Multi-Purpose Hall',
    'Not Sure Yet'
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact & Booking
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to plan your perfect event? Get in touch with our expert team.
            We're here to help you create unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            {/* Transportation */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">How to Reach Us</h4>
              <div className="space-y-4">
                {transportation.map((transport, index) => {
                  const Icon = transport.icon
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon className="text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h5 className="font-semibold text-gray-900">{transport.title}</h5>
                          <span className="text-sm text-primary-600 font-semibold">{transport.distance}</span>
                        </div>
                        <p className="text-sm text-gray-600">{transport.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8"></h3>
            <div className="">
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
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">What is the minimum booking period?</h4>
                <p className="text-gray-600 text-sm">We require a minimum of 7 days advance booking for most events. For peak season, we recommend booking 2-3 months in advance.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide catering services?</h4>
                <p className="text-gray-600 text-sm">Yes, we have an in-house catering team that offers multiple cuisines. We can also accommodate external caterers if needed.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Is parking available?</h4>
                <p className="text-gray-600 text-sm">Yes, we provide complimentary valet parking for all events. Additional parking spaces are available for larger gatherings.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Can we visit the venue before booking?</h4>
                <p className="text-gray-600 text-sm">Absolutely! We encourage site visits. Please call us to schedule a convenient time for a guided tour of our facilities.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">What is your cancellation policy?</h4>
                <p className="text-gray-600 text-sm">Cancellations made 30 days before the event receive a full refund. Cancellations within 30 days are subject to our cancellation policy.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide event planning services?</h4>
                <p className="text-gray-600 text-sm">Yes, our experienced event planning team can help you organize every aspect of your event, from decorations to entertainment.</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
