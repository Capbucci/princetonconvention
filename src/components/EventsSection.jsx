import Image from 'next/image'
import { FaHeart, FaBriefcase, FaGraduationCap, FaGift, FaMusic, FaCamera, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import Link from 'next/link'
export default function EventsSection() {
  const eventTypes = [

    {
      icon: FaBriefcase,
      title: 'Corporate Meetings & Conferences',
      description: 'Professional spaces equipped with modern technology for business excellence',
      image: '/img/corporate-meetings.jpg',
      features: [
        'High-speed WiFi and AV equipment',
        'Projector and sound systems',
        // 'Breakout rooms available',
        // 'Catering and refreshments',
        // 'Registration and reception services'
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
        // 'Professional photography spots',
        // 'Customizable menu options',
        // 'Wedding planning assistance'
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
        // 'Security and surveillance',
        // 'Registration and ticketing',
        // 'Storage and utility connections'
      ],
      capacity: '100-2000 guests',
      startingPrice: '₹75,000'
    },
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
      description: 'Perfect — that version is already concise, clear, and well-balanced. No further edits needed.'
    },
    {
      step: '04',
      title: 'Execution',
      description: 'On event day, our professionals handle every detail, ensuring you enjoy a smooth, stress-free, and memorable experience.'
    }
  ]

  return (
    <section id="events" className="section-padding bg-gradient-to-br from-[#FFFBF0] via-gray-50 to-[#FFF9EC]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Events We Host
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From intimate celebrations to grand corporate events, we provide the perfect
            setting for every occasion. Our versatile venues and expert team ensure
            your event is memorable and successful.
          </p>
        </div>

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

                  <Link
                    href="/events/"
                    className="btn-primary w-full text-center block"
                  >
                    Plan This Event
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center mb-10">
          <Link href="/events" className='bg-primary-600 px-10 py-3 text-white rounded-md'>View All</Link>
        </div>
        {/* Event Planning Process */}
        <div className="bg-white rounded-2xl p-8 shadow-[1px_1px_5px_rgba(0,0,0,0.2)] mb-16">
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
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
