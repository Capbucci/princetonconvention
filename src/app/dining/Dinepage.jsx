import Image from 'next/image'
import { FaUtensils, FaWineGlassAlt, FaLeaf, FaStar, FaCheckCircle, FaUserTie, FaClock, FaUsers } from 'react-icons/fa'
import Dineform from '@/components/forms/Dineform'
export const metadata = {
  title: 'Dining & Catering - Princeton Convention Centre | Multi-Cuisine Catering in Hyderabad',
  description: 'Experience culinary excellence with our in-house catering service. From traditional Indian cuisine to international flavors, we create memorable dining experiences for every occasion.',
}

export default function DiningPage() {
  const cuisines = [
    {
      name: 'Indian Cuisine',
      description: 'Authentic flavors from across India',
      image: '/dining/Indian-Cuisine.jpg',
      specialties: ['Biryani', 'Curries', 'Tandoor', 'Desserts'],
      priceRange: '₹500-1500 per plate'
    },
    {
      name: 'Continental',
      description: 'International flavors with local touch',
      image: '/dining/Coninental-food.jpg',
      specialties: ['Pasta', 'Grilled Meats', 'Salads', 'Soups'],
      priceRange: '₹600-2000 per plate'
    },
    {
      name: 'Chinese',
      description: 'Authentic Chinese dishes',
      image: '/dining/Chinese-food.jpg',
      specialties: ['Noodles', 'Fried Rice', 'Dim Sum', 'Stir Fry'],
      priceRange: '₹400-1200 per plate'
    },
    {
      name: 'South Indian',
      description: 'Traditional South Indian delicacies',
      image: '/dining/south-indian.jpg',
      specialties: ['Dosa', 'Idli', 'Sambhar', 'Coconut Chutney'],
      priceRange: '₹300-800 per plate'
    }
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
      description: 'Experienced chefs with years of culinary expertise'
    },
    {
      icon: FaLeaf,
      title: 'Fresh Ingredients',
      description: 'Only the freshest and highest quality ingredients'
    },
    {
      icon: FaUtensils,
      title: 'Custom Menus',
      description: 'Tailored menus to match your preferences and dietary needs'
    },
    {
      icon: FaWineGlassAlt,
      title: 'Beverage Service',
      description: 'Complete beverage service including mocktails and soft drinks'
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Wedding Catering in Hyderabad</h1>
              <p className="text-xl text-gray-200 mb-8">
                Experience culinary excellence with our in-house catering service
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className='py-16'>
        <div className="container-custom">
          <div className="">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Catering
              </h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From traditional Indian cuisine to international flavors, we create
                memorable dining experiences for every occasion.
              </p>
            </div>


            <div className="max-w-4xl mx-auto mt-16">
              <img src="/dining/home-dining.jfif" className="w-full h-auto" />
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cuisines.map((cuisine, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                  <div className="relative h-60">
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
            </div> */}
          </div>
        </div>
      </section>


      {/* <section className='py-16'>
        <div className="custom-container">
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Menu Packages
              </h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our carefully crafted packages designed to meet every need and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuPackages.map((pkg, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden card-hover relative ${pkg.name === 'Luxury Package' ? 'ring-2 ring-primary-600' : ''
                  }`}>
                  {pkg.name === 'Luxury Package' && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8 text-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                      <span className="text-lg text-gray-500 ml-2">{pkg.perPlate}</span>
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
                      href="/contact"
                      className={`w-full text-center block py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${pkg.name === 'Luxury Package'
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
          </div>
        </div>
      </section> */}

      <section className='bg-[#ECEBF3] py-16 md:py-32'>
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-12 shadow-lg ">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Catering?
              </h3>
              <p className="text-lg text-gray-600">
                Every detail is taken care of to ensure your dining experience is perfect
              </p>
            </div>

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
        </div>
      </section>
      {/* Main Content */}

      <section className='py-16 md:py-32'>
        <div className="container-custom">
          {/* Dietary Options */}
          <div className="">
            <div className="text-center ">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Dietary Accommodations
              </h3>
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
          </div>
        </div>
      </section>
      {/* Sample Menu Preview */}

      <section className='bg-[#ECEBF3] py-16 md:py-32'>
        <div className="max-w-3xl mx-auto bg-white p-4 md:p-10 rounded-md">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Book A Table
          </h2>
          <Dineform />
        </div>
      </section>

      <section className='py-16'>
        <div className="bg-primary-600 max-w-6xl mx-auto rounded-2xl p-12 text-white text-center">
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
            href="/contact"
            className="btn-secondary text-lg"
          >
            Request Full Menu
          </a>
        </div>
      </section>

    </div>
  )
}
