import { FaCheck, FaStar, FaGift, FaCalendarAlt, FaUsers, FaUtensils, FaMusic, FaCamera } from 'react-icons/fa'

export default function PackagesSection() {

  const corporatePackages = [
    {
      name: 'Business Meeting',
      price: '₹25,000',
      duration: 'Half Day',
      guests: '100-500',
      features: [
        'Conference room setup',
        'AV equipment',
        'Tea & coffee service',
        'Lunch for attendees',
        'WiFi & presentation tools',
        'Basic decoration'
      ]
    },
    {
      name: 'Corporate Conference',
      price: '₹75,000',
      duration: 'Full Day',
      guests: '100-500',
      features: [
        'Large conference hall',
        'Professional AV setup',
        'Registration desk',
        'Catering & refreshments',
        'WiFi & technical support',
        'Event coordination',
        'Parking facilities'
      ]
    },
    // {
    //   name: 'Annual Summit',
    //   price: '₹1,50,000',
    //   duration: '2 Days',
    //   guests: '200-500',
    //   features: [
    //     'Multiple conference rooms',
    //     'Exhibition space',
    //     'Professional AV & lighting',
    //     'Full catering service',
    //     'Registration & reception',
    //     'Event management team',
    //     'Security & parking',
    //     'Accommodation assistance'
    //   ]
    // }
  ]

  const seasonalOffers = [
    {
      title: 'Monsoon Special',
      discount: '20%',
      validUntil: 'August 31, 2024',
      description: 'Book your event during monsoon season and save 20% on all packages',
      icon: FaGift,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Weekday Discount',
      discount: '15%',
      validUntil: 'Ongoing',
      description: 'Get 15% off on all weekday bookings (Monday to Thursday)',
      icon: FaCalendarAlt,
      color: 'bg-green-100 text-green-800'
    },
    {
      title: 'Early Bird Offer',
      discount: '25%',
      validUntil: 'Book 3 months ahead',
      description: 'Book your event 3 months in advance and save 25%',
      icon: FaStar,
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      title: 'Group Booking',
      discount: '30%',
      validUntil: 'Ongoing',
      description: 'Book multiple events and get up to 30% discount',
      icon: FaUsers,
      color: 'bg-purple-100 text-purple-800'
    }
  ]

  const addOnServices = [
    {
      icon: FaMusic,
      name: 'Live Music',
      price: '₹15,000',
      description: 'Professional musicians for your event'
    },
    {
      icon: FaCamera,
      name: 'Photography',
      price: '₹25,000',
      description: 'Professional photography and videography'
    },
    {
      icon: FaUtensils,
      name: 'Premium Catering',
      price: '₹500 per plate',
      description: 'Upgrade to our premium menu options'
    },
    {
      icon: FaGift,
      name: 'Decorations',
      price: '₹30,000',
      description: 'Custom decorations and floral arrangements'
    }
  ]

  return (
<section
  id="packages"
  className="section-padding bg-gradient-to-br from-[#FFFBF2] via-gray-50 to-[#FFF6E5]"
>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Packages & Offers
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted packages designed to meet every need and budget.
            All packages include our signature service and attention to detail.
          </p>
        </div>



        {/* Corporate Packages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Corporate Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 card-hover">
                <div className=" mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  {/* <div className="mb-4">
                    <span className="text-3xl font-bold text-primary-600">{pkg.price}</span>
                  </div> */}
                  <div className="flex justify-start space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center">
                      <FaUsers className="mr-1" />
                      {pkg.guests} guests
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Includes:</h5>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <FaCheck className="text-primary-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="btn-primary w-full text-center block"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Offers */}
        {/* <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Special Offers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalOffers.map((offer, index) => {
              const Icon = offer.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 card-hover">
                  <div className="text-center">
                    <div className={`w-16 h-16 ${offer.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h4>
                    <div className="text-3xl font-bold text-primary-600 mb-2">{offer.discount} OFF</div>
                    <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                    <div className="text-xs text-gray-500">Valid until: {offer.validUntil}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div> */}

        {/* Add-on Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Add-on Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 card-hover text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-2xl text-primary-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h4>
                  {/* <div className="text-2xl font-bold text-primary-600 mb-2">{service.price}</div> */}
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className="bg-primary-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Package?</h3>
          <p className="text-xl mb-8 opacity-90">
            We understand every event is unique. Let us create a custom package
            tailored to your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-secondary text-lg"
            >
              Request Custom Quote
            </a>
            <a
              href="tel:+919949736693"
              className="btn-primary text-lg bg-white text-primary-600 hover:bg-gray-100"
            >
              Call for Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
