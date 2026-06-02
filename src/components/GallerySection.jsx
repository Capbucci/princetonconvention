'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight, FaHeart, FaBriefcase, FaGift, FaMusic } from 'react-icons/fa'

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const categories = [
    { id: 'all', name: 'All Events', icon: FaHeart },
    { id: 'weddings', name: 'Weddings', icon: FaHeart },
    { id: 'corporate', name: 'Corporate', icon: FaBriefcase },
    { id: 'social', name: 'Social', icon: FaGift },
    { id: 'entertainment', name: 'Entertainment', icon: FaMusic }
  ]

  const galleryImages = [
    {
      id: 1,
      category: 'weddings',
      src: '/home-gallery/grand-wedding-celebration.jpg',
      alt: 'Elegant wedding setup',
      title: 'Grand Wedding Celebration',
      description: 'Beautiful wedding ceremony with elegant decorations'
    },
    {
      id: 2,
      category: 'weddings',
      src: '/home-gallery/wedding-reception.jpg',
      alt: 'Wedding reception',
      title: 'Wedding Reception',
      description: 'Luxurious reception with premium dining'
    },
    {
      id: 3,
      category: 'corporate',
      src: '/home-gallery/corporate-cenference.jpg',
      alt: 'Corporate conference',
      title: 'Corporate Conference',
      description: 'Professional conference setup with modern amenities'
    },
    {
      id: 4,
      category: 'corporate',
      src: '/home-gallery/trade-show-exhibition.jpg',
      alt: 'Trade show exhibition',
      title: 'Trade Show Exhibition',
      description: 'Large-scale exhibition with multiple booths'
    },
    {
      id: 5,
      category: 'social',
      src: '/home-gallery/birthday-celebration.jpg',
      alt: 'Birthday celebration',
      title: 'Birthday Celebration',
      description: 'Colorful birthday party with fun decorations'
    },
    {
      id: 6,
      category: 'social',
      src: '/home-gallery/anniversary-celebration.jpg',
      alt: 'Anniversary celebration',
      title: 'Anniversary Celebration',
      description: 'Golden anniversary celebration'
    },
    {
      id: 7,
      category: 'entertainment',
      src: '/home-gallery/Live-music.jpg',
      alt: 'Live music performance',
      title: 'Live Music Performance',
      description: 'Concert with professional sound and lighting'
    },
    {
      id: 8,
      category: 'entertainment',
      src: '/home-gallery/cultural-show.jpg',
      alt: 'Cultural show',
      title: 'Cultural Show',
      description: 'Traditional cultural performance'
    },

  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Photo & Video Gallery
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our past events and see the magic we create. 
            From intimate gatherings to grand celebrations, every moment is captured beautifully.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-100'
                }`}
              >
                <Icon className="text-lg" />
                <span>{category.name}</span>
              </button>
            )
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg card-hover"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                <p className="text-white text-xs opacity-90">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour Section */}
        {/* <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Virtual 360° Tour
            </h3>
            <p className="text-lg text-gray-600">
              Explore our venues from anywhere in the world with our interactive virtual tour
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPlay className="text-3xl text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Interactive Tour</h4>
              <p className="text-gray-600">Navigate through our venues with 360° views</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-3xl text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Real Experience</h4>
              <p className="text-gray-600">See our venues as they really are</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBriefcase className="text-3xl text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Anywhere Access</h4>
              <p className="text-gray-600">Available 24/7 from any device</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="btn-primary text-lg"
            >
              Start Virtual Tour
            </a>
          </div>
        </div> */}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <FaTimes className="text-3xl" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <FaChevronLeft className="text-3xl" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <FaChevronRight className="text-3xl" />
              </button>
              
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={800}
                  height={600}
                  className="rounded-lg max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-white opacity-90">{selectedImage.description}</p>
                </div>
              </div>
              
              <div className="text-center mt-4 text-white">
                <span>{currentImageIndex + 1} of {filteredImages.length}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
