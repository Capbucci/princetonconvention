import Image from 'next/image'
import { FaUtensils, FaWineGlassAlt, FaLeaf, FaStar, FaCheckCircle, FaUserTie } from 'react-icons/fa'
import Link from 'next/link'
export default function DiningSection() {
  const cuisines = [
    {
      name: 'Indian Cuisine',
      description: 'Authentic flavors from across India',
      image: '/img/indian-cuisine.jpg',
      specialties: ['Biryani', 'Curries', 'Tandoor', 'Desserts'],
      priceRange: '₹500-1500 per plate'
    },
    {
      name: 'Continental',
      description: 'International flavors with local touch',
      image: '/img/continental.jpg',
      specialties: ['Pasta', 'Grilled Meats', 'Salads', 'Soups'],
      priceRange: '₹600-2000 per plate'
    },
  ]

  const menuPackages = [
    {
      name: 'Economy Package',
      price: '₹500',
      perPlate: 'per plate',
      description: 'Perfect for budget-conscious events',
      includes: [
        '3 Course Meal',
        'Soft Drinks',
        'Basic Service',
        'Standard Presentation'
      ],
      suitable: 'Small gatherings, office parties'
    },
    {
      name: 'Premium Package',
      price: '₹800',
      perPlate: 'per plate',
      description: 'Balanced quality and value',
      includes: [
        '4 Course Meal',
        'Soft Drinks & Juices',
        'Professional Service',
        'Enhanced Presentation',
        'Live Counter'
      ],
      suitable: 'Weddings, corporate events'
    },
    {
      name: 'Luxury Package',
      price: '₹1200',
      perPlate: 'per plate',
      description: 'Premium dining experience',
      includes: [
        '5 Course Meal',
        'Mocktails & Beverages',
        'Premium Service',
        'Elegant Presentation',
        'Live Counters (2)',
        'Dessert Station'
      ],
      suitable: 'Grand celebrations, VIP events'
    },
    {
      name: 'Royal Package',
      price: '₹1800',
      perPlate: 'per plate',
      description: 'Ultimate luxury experience',
      includes: [
        '6 Course Meal',
        'Premium Beverages',
        'Butler Service',
        'Luxury Presentation',
        'Multiple Live Counters',
        'Dessert & Coffee Station',
        'Welcome Drinks'
      ],
      suitable: 'High-profile events, celebrations'
    }
  ]

  const specialFeatures = [
    {
      icon: FaUserTie,
      title: 'Expert Chefs',
      description: 'Renowned culinary masters bringing creativity and excellence to every menu.'
    },
    {
      icon: FaLeaf,
      title: 'Fresh Ingredients',
      description: 'Handpicked produce for flavour, freshness, and uncompromised quality.'
    },
    {
      icon: FaUtensils,
      title: 'Custom Menus',
      description: ' Personalized menus curated to match your theme, taste, and style.'
    },
    {
      icon: FaWineGlassAlt,
      title: 'Beverage Service',
      description: 'Signature beverages and mocktails that perfectly complement every occasion.'
    }
  ]

  const dietaryOptions = [
    'Vegetarian',
    'Non-Vegetarian',
    'Vegan',
    'Jain Food',
    'Gluten-Free',
    'Diabetic-Friendly',
    'Kids Menu',
    'Regional Specialties'
  ]

  return (
    <section id="dining" className="section-padding  bg-[#ECEBF3]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Catering
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience culinary excellence with our in-house catering service.
            From traditional Indian cuisine to international flavors, we create
            memorable dining experiences for every occasion.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10">
          <img src="dining/home-dining.jfif" alt="" className='w-full rounded-md object-contain' />
        </div>

        {/* Cuisines */}
        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Cuisines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {cuisines.map((cuisine, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <div className="relative h-[350px]">
                  <Image
                    src={cuisine.image}
                    alt={cuisine.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{cuisine.name}</h4>
                  <p className="text-gray-600 mb-4">{cuisine.description}</p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Specialties:</h5>
                    <div className="flex flex-wrap gap-2">
                      {cuisine.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-primary-600 font-semibold">
                    {cuisine.priceRange}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14 mb-10">
            <Link href="/dining" className='bg-primary-600 px-10 py-3 text-white rounded-md'>View All</Link>
          </div>
        </div> */}

        {/* Menu Packages */}
        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Menu Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuPackages.map((pkg, index) => (
              <div key={index} className={`rounded-lg shadow-lg overflow-hidden card-hover ${
                pkg.name === 'Luxury Package' ? 'ring-2 ring-primary-600 relative' : 'bg-white'
              }`}>
                {pkg.name === 'Luxury Package' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8 text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">{pkg.perPlate}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Includes:</h5>
                    <ul className="space-y-2 text-left">
                      {pkg.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <FaCheckCircle className="text-primary-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 italic">{pkg.suitable}</p>
                  </div>
                  
                  <a
                    href="#contact"
                    className={`w-full text-center block py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.name === 'Luxury Package'
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Choose Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Special Features */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-[1px_1px_5px_rgba(0,0,0,0.2)]">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Catering?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-2xl text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Dietary Options */}
        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Dietary Accommodations
          </h3>
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We cater to all dietary preferences and restrictions. Our chefs are experienced 
              in preparing meals for various dietary needs while maintaining taste and quality.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {dietaryOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white border-2 border-primary-200 text-primary-800 px-6 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-colors cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        </div> */}

        {/* Sample Menu Preview */}
        {/* <div className="bg-primary-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Sample Menu Preview</h3>
          <p className="text-xl mb-8 opacity-90">
            Get a taste of our culinary excellence with our sample menu
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Starters</h4>
              <ul className="space-y-2 text-left">
                <li>• Chicken Tikka</li>
                <li>• Paneer Tikka</li>
                <li>• Fish Fry</li>
                <li>• Vegetable Spring Rolls</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Main Course</h4>
              <ul className="space-y-2 text-left">
                <li>• Biryani (Chicken/Mutton)</li>
                <li>• Butter Chicken</li>
                <li>• Dal Makhani</li>
                <li>• Mixed Vegetables</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Desserts</h4>
              <ul className="space-y-2 text-left">
                <li>• Gulab Jamun</li>
                <li>• Ras Malai</li>
                <li>• Ice Cream</li>
                <li>• Fresh Fruits</li>
              </ul>
            </div>
          </div>
          <a
            href="#contact"
            className="btn-secondary text-lg"
          >
            Request Full Menu
          </a>
        </div> */}
      </div>
    </section>
  )
}
