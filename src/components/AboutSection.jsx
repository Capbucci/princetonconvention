import Image from 'next/image'
import { FaAward, FaUsers, FaHeart, FaStar, FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'
export default function AboutSection() {
  const features = [
    {
      icon: FaAward,
      title: 'Award-Winning Excellence',
      description: 'Setting the gold standard in hospitality & event management, we make every event a benchmark of excellence.'
    },
    {
      icon: FaUsers,
      title: 'Masterful Team',
      description: 'A dedicated team of event experts combining creativity, experience, and precision to craft unforgettable celebrations.'
    },
    {
      icon: FaHeart,
      title: 'Heartfelt Personalization',
      description: 'Every detail is thoughtfully designed, ensuring your event reflects emotion, care, and individuality.'
    },
    {
      icon: FaStar,
      title: 'Premium Experiences',
      description: 'State-of-the-art venues, bespoke services, and unparalleled amenities to make every moment extraordinary.'
    }
  ]

  const values = [
    'Pursuit of Perfection',
    'Guest Delight Above All',
    'Inspired Innovation',
    'Integrity at the Core',
    'Sustainable Commitments',
  ]

  return (
<section
  id="about"
  className="section-padding bg-gradient-to-br from-[#FFF8E1] via-gray-50 to-[#FFF3D6]"
>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">About Princeton</h2>
              <div className="w-20 h-1 bg-primary-600 mb-4"></div>
              <p className='italic text-gray-600 mb-5'>"Redefining Hyderabad’s Event Experience"</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">Princeton Convention Centre stands apart in Hyderabad with a unique promise <strong>luxury meets accessibility</strong>. Strategically located at LB Nagar, our venue spares your guests the hassle of city-center traffic while offering quick access via the Vijayawada Highway and Outer Ring Road.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify">Unlike single-purpose venues, Princeton is designed for <strong>all event scales</strong> — from high-powered corporate conferences to lavish weddings, exhibitions, and community celebrations. With flexible halls, hybrid-ready technology, curated in-house catering, and unmatched parking convenience, we deliver what others promise: <strong> a truly versatile convention experience</strong>.</p>
            </div>

            {/* Mission Statement */}
            {/* <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h3>
              <p className="text-primary-700 leading-relaxed">
                To create unforgettable experiences through exceptional service, 
                state-of-the-art facilities, and personalized attention that exceeds 
                our clients' expectations while maintaining the highest standards of quality.
              </p>
            </div> */}

            {/* Values */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <FaCheckCircle className="text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              href="/events"
              className="btn-primary inline-flex items-center"
            >
              Plan Your Event
            </Link>
          </div>

          {/* Image and Features */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative">
              <Image
                src="/images/about.jpg"
                alt="Princeton Convention Centre interior"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg card-hover">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-2xl text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Princeton Convention Centre?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hyderabad’s premier convention destination, where accessible locations, flexible spaces, advanced technology, and exceptional cuisine make every event extraordinary.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg card-hover">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-3xl text-primary-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">More Than a Venue—An Experience</h4>
              <p className="text-gray-600">At Princeton, we craft immersive, elegant events with bespoke décor and captivating ambiance — ensuring every celebration feels personal, grand, and truly unforgettable.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg card-hover">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-3xl text-primary-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Endless Creative Possibilities at Your Fingertips</h4>
              <p className="text-gray-600">Hosting your event at Princeton unlocks endless creativity with flexible spaces, themed décor, and curated options that elevate your vision and inspire unforgettable experiences.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg card-hover">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-3xl text-primary-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">One Venue, Infinite Possibilities</h4>
              <p className="text-gray-600">At Princeton, every event is a beautiful canvas of possibilities. Our versatile spaces adapt to any occasion, creating experiences that are seamless, memorable, and uniquely yours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
