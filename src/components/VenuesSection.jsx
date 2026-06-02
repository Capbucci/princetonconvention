import Image from 'next/image'
import Link from 'next/link'
import { FaUsers, FaRuler, FaWifi, FaParking, FaUtensils, FaMusic, FaVideo, FaLightbulb } from 'react-icons/fa'

export default function VenuesSection() {
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
    //   id: 5,
    //   name: 'Executive Boardroom',
    //   capacity: '20-40',
    //   area: '800 sq ft',
    //   image: '/img/exe-board.jpg',
    //   description: 'Premium boardroom for executive meetings and small corporate events',
    //   features: ['Executive seating', 'Video conferencing', 'Whiteboard', 'Coffee service'],
    //   seating: {
    //     theatre: 40,
    //     banquet: 20,
    //     cocktail: 50
    //   }
    // },

  ]

  const amenities = [
    { icon: FaWifi, name: 'Seamless Connectivity', description: 'High-speed Wi-Fi keeps events perfectly in sync.' },
    { icon: FaParking, name: 'Effortless Arrivals', description: 'Dedicated valet service and expansive on-site parking.' },
    { icon: FaUtensils, name: 'Signature Catering', description: 'Curated multi-cuisine menus by Celebrity Hospitality' },
    { icon: FaMusic, name: 'Immersive Sound ', description: 'Advanced audio systems designed for clarity, ambience, and impact.' },
    { icon: FaVideo, name: 'Capturing Every Moment ', description: 'Professional video recording and live-streaming facilities for timeless memories.' },
    { icon: FaLightbulb, name: 'Illuminated Elegance', description: 'Expert lighting setups that transform spaces into stunning event backdrops.' }
  ]

  return (
    <section id="venues" className="section-padding bg-[#ECEBF3]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Venues & Facilities
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our world-class venues designed to host events of every scale.
            From intimate gatherings to grand celebrations, we have the perfect space for you.
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-16">
          {venues.map((venue) => (
            <div key={venue.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="relative h-80">
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

                <Link
                  href="/venues"
                  className="btn-primary w-full text-center block"
                >
                  Book This Venue
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <Link href="/venues" className='bg-primary-600 px-10 py-3 text-white rounded-md'>View All</Link>
        </div>

        {/* Amenities Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Amenities
            </h3>
            <p className="text-lg text-gray-600">
              Every detail is taken care of to ensure your event is perfect
            </p>
          </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {amenities.map((amenity, index) => {
    const Icon = amenity.icon
    return (
      <div
        key={index}
        className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition">
            <Icon className="text-2xl text-primary-600" />
          </div>

          {/* Content */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">
              {amenity.name}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {amenity.description}
            </p>
          </div>
        </div>
      </div>
    )
  })}
</div>
        </div>
      </div>
    </section>
  )
}
