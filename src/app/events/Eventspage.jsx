"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FaHeart, FaBriefcase, FaGraduationCap, FaGift, FaMusic, FaCamera, FaCalendarAlt, FaUsers, FaCheckCircle } from 'react-icons/fa'
import EventPopupForm from '@/components/forms/EventPopupForm'

export default function EventsPage() {
  const [openModal, setopenModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const handleClick = (event) => {
    setopenModal(true)
    setSelectedEvent(event)
  }
  const eventTypes = [


    {
      icon: FaBriefcase,
      title: 'Corporate Meetings & Conferences',
      description: 'Professional spaces equipped with modern technology for business excellence',
      image: '/img/corporate-meetings.jpg',
      features: [
        'High-speed WiFi and AV equipment',
        'Projector and sound systems',
        'Breakout rooms available',
        'Catering and refreshments',
        'Registration and reception services'
      ],
      capacity: '20-1500 guests',
      startingPrice: '₹25,000'
    },
    {
      icon: FaHeart,
      title: 'Weddings',
      description: 'Create magical moments that last forever with our elegant wedding venues',
      image: '/img/wedding-reception.jpg',
      features: [
        'Bridal suite and groom\'s room',
        'Floral decorations and lighting',
        'Professional photography spots',
        'Customizable menu options',
        'Wedding planning assistance'
      ],
      capacity: '50-800 guests',
      startingPrice: '₹50,000'
    },

    {
      icon: FaGraduationCap,
      title: 'Exhibitions',
      description: 'Ample space for grand displays, networking, and product launches',
      image: '/img/trade-show-exhibition.jpg',
      features: [
        'Modular booth arrangements',
        'Loading and unloading facilities',
        'Security and surveillance',
        'Registration and ticketing',
        'Storage and utility connections'
      ],
      capacity: '100-2000 guests',
      startingPrice: '₹75,000'
    },
    // {
    //   icon: FaGift,
    //   title: 'Social Gatherings',
    //   description: 'Celebrate life\'s special moments with family and friends',
    //   image: '/img/social-gathering.jpg',
    //   features: [
    //     'Birthday and anniversary parties',
    //     'Festival celebrations',
    //     'Family reunions',
    //     'Custom decorations',
    //     'Entertainment arrangements'
    //   ],
    //   capacity: '50-500 guests',
    //   startingPrice: '₹30,000'
    // },
    {
      icon: FaMusic,
      title: 'Concerts & Theatrical Events',
      description: 'Perfect venues for concerts, cultural shows, and entertainment events',
      image: '/img/Live-music.jpg',
      features: [
        'Professional stage setup',
        'Sound and lighting systems',
        'Green rooms for artists',
        'Audience seating arrangements',
        'Backstage facilities'
      ],
      capacity: '200-1000 guests',
      startingPrice: '₹40,000'
    },
    {
      icon: FaCamera,
      title: 'Product Launches',
      description: 'Make a grand impression with our premium launch event facilities',
      image: '/img/product-launch.jpg',
      features: [
        'Press conference setup',
        'Media and PR support',
        'Product display areas',
        'Networking spaces',
        'Live streaming capabilities'
      ],
      capacity: '100-800 guests',
      startingPrice: '₹60,000'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Share your vision with our expert planners, and we’ll translate them into a clear, inspired concept.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our team designs a detailed plan from venue layout and décor themes tailored precisely to your needs.'
    },
    {
      step: '03',
      title: 'Preparation',
      description: 'We bring every element to life, managing vendors, logistics, décor, and rehearsals to ensure everything is ready well before the big day.'
    },
    {
      step: '04',
      title: 'Execution',
      description: 'On event day, our professionals handle every detail flawlessly, so you can simply enjoy stress-free & memorable experience.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Marriage Function Halls Hyderabad</h1>
              <p className="text-xl text-gray-200 mb-8">From intimate celebrations to grand corporate events, we provide the perfect setting for every occasion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-16">
        {/* Event Types Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Event Categories
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our versatile venues and expert team ensure your event is memorable and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => {
              const Icon = event.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                  <div className="relative h-64">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                        <Icon className="text-white text-xl" />
                      </div>
                    </div>
                    {/* <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-primary-600">
                        From {event.startingPrice}
                      </span>
                    </div> */}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <FaUsers className="text-primary-600" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {event.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className="btn-primary w-full text-center block"
                      onClick={() => handleClick(event)}
                    >
                      Plan This Event
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>


      <section className='bg-[#ECEBF3] py-16 md:py-32'>

        {/* Event Planning Process */}
        <div className="bg-white max-w-7xl mx-auto rounded-2xl p-12 shadow-lg mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Event Planning Process
            </h3>
            <p className="text-lg text-gray-600">
              We make event planning simple and stress-free with our proven 4-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=' py-16 md:py-32'>
        {/* Why Choose Us */}

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Why Choose Princeton for Your Event?</h3>
              <h4 className='text-xl mb-4'>Experience. Elegance. Excellence.</h4>
              <p className=" text-gray-600 mb-8">With more than a decade of expertise in <strong>event management and hospitality, Princeton Convention Centre, LB Nagar</strong>, is Hyderabad’s preferred address for unforgettable celebrations. From elegant weddings to corporate gatherings, every event is guided by our promise of <strong>seamless service, curated style, and lasting impressions</strong>.</p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCalendarAlt className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h4>
                    <p className="text-gray-600">Your plans come first. We adapt to your preferred dates, timings, and special requirements with ease.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaUsers className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                    <p className="text-gray-600">A dedicated team of planners, designers, and culinary professionals ensures every detail feels effortless.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCamera className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Complete Package</h4>
                    <p className="text-gray-600">From venue décor and gourmet dining to lighting, sound, and logistics—everything you need under one roof.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCamera className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prime Location & Easy Access</h4>
                    <p className="text-gray-600">Centrally located in LB Nagar with ample parking and quick access from city and highway perfect for guests near and far.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/img/event.jpg"
                alt="Event planning at Princeton Convention Centre"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-sm opacity-90">Events Hosted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <div className="text-center">
        <div className="bg-primary-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let our expert team help you create an unforgettable experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-secondary text-lg"
            >
              Get Quote
            </a>
            <a
              href="tel:+919949736693"
              className="btn-primary text-lg bg-white text-primary-600 hover:bg-gray-100"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      <EventPopupForm openModal={openModal} setopenModal={setopenModal} selectedEvent={selectedEvent} />
    </div>
  )
}
