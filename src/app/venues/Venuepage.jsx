"use client"
import { useState } from 'react'

import Image from 'next/image'
import { FaUsers, FaRuler, FaCalendarAlt } from 'react-icons/fa'
import {
  FaWifi,
  FaParking,
  FaUtensils,
  FaMusic,
  FaVideo,
  FaLightbulb,
  FaShieldAlt,
  FaLayerGroup,
} from "react-icons/fa";
import { FaElevator } from "react-icons/fa6";

import VenuePopupForm from '@/components/forms/VenuePopupForm'



export default function VenuesPage() {

  const [openModal, setopenModal] = useState(false)
  const [selectedVenue, setSelectedVenue] = useState(null)
  const handleClick = (venue) => {
    setopenModal(true)
    setSelectedVenue(venue)
  }
  const venues = [
    {
      id: 1,
      name: 'Ruby',
      capacity: '200-400',
      area: '3750 Sqft',
      image: '/venue/royal-hall.jpg',
      description: 'Our flagship venue perfect for grand weddings and large corporate events',
      features: ['High ceiling', 'Crystal chandeliers', 'Dance floor', 'Stage setup'],
      seating: {
        theatre: 800,
        banquet: 500,
        cocktail: 1000
      }
    },
    {
      id: 2,
      name: 'Muktha',
      capacity: '500-800',
      area: '3750 Sqft',
      image: '/venue/grand-ballroom.jpg',
      description: 'Elegant space ideal for intimate weddings and corporate meetings',
      features: ['Natural lighting', 'Premium sound system', 'Projector screen', 'Green room'],
      seating: {
        theatre: 400,
        banquet: 200,
        cocktail: 500
      }
    },
    {
      id: 3,
      name: 'Kohinoor',
      capacity: '200-1200',
      area: '3750 Sqft',
      image: '/images/conventional-center.jpg',
      description: 'Spacious venue for exhibitions, trade shows, and large conferences',
      features: ['Modular setup', 'Exhibition booths', 'Registration desk', 'Storage area'],
      seating: {
        theatre: 1500,
        banquet: 800,
        cocktail: 2000
      }
    },
    // {
    //   id: 4,
    //   name: 'Garden Pavilion',
    //   capacity: '150-300',
    //   area: '3000 sq ft',
    //   image: '/venue/Garden-pavilion.jpg',
    //   description: 'Outdoor venue surrounded by beautiful gardens, perfect for outdoor events',
    //   features: ['Garden view', 'Open air', 'Weather protection', 'Natural ambiance'],
    //   seating: {
    //     theatre: 300,
    //     banquet: 150,
    //     cocktail: 400
    //   }
    // },
    // {
    //   id: 5,
    //   name: 'Executive Boardroom',
    //   capacity: '20-40',
    //   area: '800 sq ft',
    //   image: '/venue/executive-board.jpg',
    //   description: 'Premium boardroom for executive meetings and small corporate events',
    //   features: ['Executive seating', 'Video conferencing', 'Whiteboard', 'Coffee service'],
    //   seating: {
    //     theatre: 40,
    //     banquet: 20,
    //     cocktail: 50
    //   }
    // },
    // {
    //   id: 6,
    //   name: 'Multi-Purpose Hall',
    //   capacity: '100-200',
    //   area: '2000 sq ft',
    //   image: '/venue/multiputpose-hall.jpg',
    //   description: 'Flexible space that can be configured for various event types',
    //   features: ['Flexible layout', 'Sound system', 'Lighting control', 'Storage'],
    //   seating: {
    //     theatre: 200,
    //     banquet: 100,
    //     cocktail: 250
    //   }
    // }
  ]

  const amenities = [

    {
      // 🔹 Newly added
      icon: FaShieldAlt,
      name: "Advanced Security & Safety Systems",
      description: "Comprehensive security infrastructure ensuring guest safety.",
    },
    {
      icon: FaLayerGroup,
      name: "Multi-Level Basement Parking (3 Levels)",
      description: "Spacious three-level basement parking for seamless vehicle movement.",
    },
    {
      icon: FaElevator,
      name: "Four Dedicated Guest Elevators",
      description: "Multiple elevators for smooth and efficient guest circulation.",
    },
    {
      icon: FaWifi,
      name: "Seamless Connectivity",
      description: "High-speed Wi-Fi keeps events perfectly in sync.",
    },
    {
      icon: FaParking,
      name: "Effortless Arrivals",
      description: "Dedicated valet service and expansive on-site parking.",
    },
    {
      icon: FaUtensils,
      name: "Signature Catering",
      description: "Curated multi-cuisine menus by Celebrity Hospitality",
    },
    {
      icon: FaMusic,
      name: "Immersive Sound",
      description: "Advanced audio systems designed for clarity, ambience, and impact.",
    },
    {
      icon: FaVideo,
      name: "Capturing Every Moment",
      description: "Professional video recording and live-streaming facilities for timeless memories.",
    },
    {
      icon: FaLightbulb,
      name: "Illuminated Elegance",
      description: "Expert lighting and décor setups that transform spaces into stunning event backdrops.",
    },


  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Banquet Venues in Hyderabad</h1>
              <p className="text-xl text-gray-200 mb-8">
                Discover our world-class venues designed to host events of every scale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='bg-[#ECEBF3] py-16 md:py-32'>
        <div className="container-custom ">
          {/* Venues Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Venues
              </h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From intimate gatherings to grand celebrations, we have the perfect space for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {venues.map((venue) => (
                <div key={venue.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                  <div className="relative h-64">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover"
                    />
                    {/* <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {venue.capacity} Guests
                  </div> */}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{venue.name}</h3>
                    <p className="text-gray-600 mb-4">{venue.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <FaUsers className="text-primary-600" />
                        <span>{venue.capacity} Guests</span>
                      </div>
                      {/* <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <FaRuler className="text-primary-600" />
                      <span>{venue.area}</span>
                    </div> */}
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {venue.features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      className="btn-primary w-full text-center block"
                      onClick={() => handleClick(venue)}
                    >
                      Book This Venue
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Section */}
          <div className=" rounded-2xl p-12 ">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Premium Amenities
              </h3>
              <p className="text-lg text-gray-600">
                Every detail is taken care of to ensure your event is perfect
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon
                return (
                  <div key={index} className="bg-white flex items-start space-x-4 shadow-lg p-4 rounded-lg mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-xl text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-gray-900 mb-2">{amenity.name}</h4>
                      <p className="text-gray-600 text-sm">{amenity.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>
      <VenuePopupForm openModal={openModal} setopenModal={setopenModal} selectedVenue={selectedVenue} />
    </div>
  )
}
