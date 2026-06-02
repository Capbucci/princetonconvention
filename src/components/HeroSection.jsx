'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlay, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    {
      src: '/bg/home-banner1.jpg',
      alt: 'Elegant wedding setup at Princeton Convention Centre',
      title: 'Weddings & Receptions',
      subtitle: 'Create magical moments that last forever'
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const stats = [
    { icon: FaUsers, number: '5000+', label: 'Happy Clients' },
    { icon: FaCalendarAlt, number: '1000+', label: 'Events Hosted' },
    { icon: FaMapMarkerAlt, number: '5', label: 'Event Halls' },
    { icon: FaMapMarkerAlt, number: '4.9/5', label: 'Average Rating' },
  ]

  return (
    <section id="home" className="relative py-20">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto pt-20 text-center">
          {/* Main Heading */}
          <div className="mb-3 md:mb-8">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
              Best convention center in <span className="block text-primary-400">Hyderabad</span>
            </h1>
            <p className="md:text-lg max-w-4xl mx-auto text-gray-200 mb-4 text-shadow">From intimate celebrations to grand conventions, Princeton Convention Centre blends sophistication and service, turning every milestone into an unforgettable memory</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex  items-center justify-center gap-4 mb-5 md:mb-12">
            <Link
              href="/events"
              className="btn-primary px-3 md:px-6 py-3 inline-flex items-center justify-center"
            >
              <FaCalendarAlt className="mr-2" />
              Book Your Event
            </Link>
            <a
              href="https://wa.me/+919949736693"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-3 md:px-6 py-3 inline-flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp Enquiry
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary-600 rounded-full mx-auto mb-4">
                    <Icon className="text-xl md:text-2xl text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 text-shadow">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-shadow">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-primary-400 w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  )
}
