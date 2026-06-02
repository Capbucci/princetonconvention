'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaStar, } from 'react-icons/fa'
import Link from 'next/link'
export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh & Priya Sharma',
      event: 'Wedding Reception',
      date: 'March 2024',
      rating: 5,
      text: 'Princeton Convention Centre made our dream wedding come true! The venue was absolutely stunning, the food was delicious, and the staff was incredibly professional. Every detail was perfect, and our guests are still talking about it months later.',
      image: '/img/user-icon.jpg',
      location: 'Hyderabad'
    },
    {
      id: 2,
      name: 'TechCorp Solutions',
      event: 'Annual Conference',
      date: 'February 2024',
      rating: 5,
      text: 'We hosted our annual conference at Princeton and it was exceptional. The facilities were top-notch, the AV equipment worked flawlessly, and the catering was outstanding. Our 500+ attendees were very impressed. Highly recommended for corporate events!',
      image: '/img/user-icon.jpg',
      location: 'Corporate Client'
    },
    {
      id: 3,
      name: 'Sunita Reddy',
      event: '50th Anniversary',
      date: 'January 2024',
      rating: 5,
      text: 'Celebrating our 50th anniversary at Princeton was magical. The staff went above and beyond to make our special day memorable. The venue was beautifully decorated, and the food was absolutely delicious. Thank you for making our golden anniversary so special!',
      image: '/img/user-icon.jpg',
      location: 'Hyderabad'
    },
    {
      id: 4,
      name: 'Amit & Sneha Patel',
      event: 'Engagement Ceremony',
      date: 'December 2023',
      rating: 5,
      text: 'Our engagement ceremony at Princeton was perfect in every way. The venue looked beautiful, the service was impeccable, and the food was outstanding. The team was very accommodating and made sure everything went smoothly. We can\'t wait to book our wedding here too!',
      image: '/img/user-icon.jpg',
      location: 'Hyderabad'
    },
    {
      id: 5,
      name: 'Hyderabad Business Association',
      event: 'Trade Exhibition',
      date: 'November 2023',
      rating: 5,
      text: 'Princeton Convention Centre provided the perfect venue for our annual trade exhibition. The space was ideal for our 100+ exhibitors, the facilities were excellent, and the staff was very professional. We received great feedback from all participants.',
      image: '/img/user-icon.jpg',
      location: 'Business Association'
    },
    {
      id: 6,
      name: 'Kavitha & Ravi Kumar',
      event: 'Wedding Ceremony',
      date: 'October 2023',
      rating: 5,
      text: 'We had our wedding ceremony and reception at Princeton, and it was absolutely amazing! The venue was stunning, the food was delicious, and the staff was incredibly helpful. They took care of every detail, allowing us to enjoy our special day. Highly recommended!',
      image: '/img/user-icon.jpg',
      location: 'Hyderabad'
    }
  ]

  const stats = [
    { number: '5000+', label: 'Happy Clients' },
    { number: '1000+', label: 'Events Hosted' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '4.9/5', label: 'Average Rating' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
      />
    ))
  }

  return (
<section className="section-padding bg-gradient-to-br from-[#FFF9E6] via-white to-[#FFF2CC]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients who have
            experienced the magic of Princeton Convention Centre.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>


        {/* Client Stories Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Success Stories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 card-hover">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  "{testimonial.text.substring(0, 120)}..."
                </p>

                <div className="text-sm text-primary-600 font-semibold">
                  {testimonial.event} • {testimonial.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied clients who have celebrated their special moments with us
            </p>
            <Link
              href="/contact/"
              className="btn-secondary text-lg"
            >
              Book Your Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
