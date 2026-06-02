import Image from 'next/image'
import { FaAward, FaUsers, FaHeart, FaStar, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Princeton | Convention Hall In Hyderabad',
  description: 'Learn about Princeton Convention Center — a leading convention hall in Hyderabad for weddings and events.',
  alternates: {
    canonical: "https://princetonconvention.com/about/",
  },
}

export default function AboutPage() {
  const features = [
    {
      icon: FaAward,
      title: 'More Than a Venue An Experience',
      description: 'Every event feels special. We craft ambience, décor, and comfort that leave a lasting impression.'
    },
    {
      icon: FaUsers,
      title: 'Endless Creative Possibilities at Your Fingertips',
      description: 'Dream it and We’ll create it. Flexible spaces, themed décor, and curated menus bring your vision to life.'
    },
    {
      icon: FaHeart,
      title: 'One Venue, Infinite Possibilities',
      description: 'Big or small, formal or festive Princeton fits it all. A single destination for every celebration.'
    },
    {
      icon: FaStar,
      title: ' Hospitality That Feels Personal',
      description: 'Our team makes every guest feel at home. From planning to perfection, we handle every detail with care.'
    }
  ]

  const values = [
    'Pursuit of Perfection',
    'Guest Delight Above All',
    'Inspired Innovation',
    'Integrity at the Core',
    'Sustainable Commitments'
  ]

  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Happy Clients' },
    { number: '1000+', label: 'Events Hosted' },
    { number: '98%', label: 'Client Satisfaction' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Convention Hall In Hyderabad
              </h1>
              <p className="text-xl text-gray-200 mb-8">Where Every Gathering Finds Its Grandeur</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#ECEBF3] py-16 md:py-32'>
        {/* Main Content */}
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-primary-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">Nestled in the vibrant heart of LB Nagar, Princeton Convention Centre stands as Hyderabad’s premier destination for timeless celebrations and corporate events. Envisioned to redefine the city’s event landscape, Princeton harmoniously combines modern luxury, versatile spaces, and warm hospitality to bring every occasion to life.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">With its architectural elegance, state-of-the-art facilities, and expert event planning team, Princeton is designed to host everything from exhibitions to intimate gatherings and business conferences and grand weddings. Every moment here is thoughtfully curated ensuring your celebration unfolds seamlessly and leaves a lasting impression.</p>
            </div>

            {/* Image */}
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
          </div>
        </div>
      </section>
      {/* Mission Statement */}
      <div className="bg-primary-50 rounded-2xl p-12 mb-20">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary-800 mb-6">Our Mission</h3>
          <p className="text-xl text-primary-700 leading-relaxed max-w-4xl mx-auto">To craft <strong>unforgettable experiences</strong> where every occasion shines with comfort, sophistication, and care.</p>
          <p className="text-xl text-primary-700 leading-relaxed max-w-4xl mx-auto">At Princeton, we’re committed to offering <strong>premium facilities, in-house F&B excellence</strong>, and <strong>personalized event support</strong>  ensuring that every guest feels valued, every event runs flawlessly, and every moment becomes a cherished memory.</p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-2xl text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{value}</h4>
            </div>
          ))}
        </div>
      </div>


      <section className='bg-[#ECEBF3] py-16 md:py-32'>
        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Princeton Convention Centre?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center p-8 bg-white rounded-lg shadow-lg card-hover">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-3xl text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* Stats */}
      <div className="bg-primary-600 rounded-2xl p-12 text-white mb-20">
        <h3 className="text-3xl font-bold text-center mb-12">Our Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-2xl p-12 shadow-lg">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Get in Touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-2xl text-primary-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h4>
            <p className="text-gray-600">
              Princeton Convention Centre<br />
              LB Nagar, Hyderabad<br />
              Telangana 500074
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-2xl text-primary-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h4>
            <p className="text-gray-600">
              <a href="tel:+919876543210">+91 98765 43210</a>

            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-2xl text-primary-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h4>
            <p className="text-gray-600">

              {/* <a href="mailto:info@princetonconvention.com">info@princetonconvention.com</a>
                <br /> */}
              <a href="mailto:bookings@princetonconvention.com">bookings@princetonconvention.com</a>

            </p>
          </div>
        </div>
      </div>
    </div >

  )
}
