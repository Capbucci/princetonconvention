import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaUser, FaArrowRight, FaBookOpen, FaLightbulb, FaCheckSquare, FaSearch, FaTag } from 'react-icons/fa'
import { blogPosts } from '@/data/blogData'

export const metadata = {
  title: 'Blog & Resources - Princeton Convention Centre | Event Planning Tips & Insights',
  description: 'Stay updated with the latest trends, tips, and insights in event planning. Our blog covers everything from wedding planning to corporate events.',
}

export default function BlogPage() {

  const categories = [
    { name: 'All', count: 24, icon: FaBookOpen },
    { name: 'Wedding Planning', count: 8, icon: FaBookOpen },
    { name: 'Corporate Events', count: 6, icon: FaBookOpen },
    { name: 'Industry Insights', count: 4, icon: FaLightbulb },
    { name: 'Catering', count: 3, icon: FaBookOpen },
    { name: 'Sustainability', count: 3, icon: FaCheckSquare }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Blog & Resources
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Stay updated with the latest trends, tips, and insights in event planning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent">
              <option>All Categories</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <button
                  key={index}
                  className="flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary-600 hover:text-white"
                >
                  <Icon className="text-lg" />
                  <span className="font-semibold">{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-1" />
                      {featuredPost.author}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs flex items-center"
                      >
                        <FaTag className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      <span>Read More</span>
                      <FaArrowRight className="text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-1" />
                      {post.author}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
                    >
                      <span>Read More</span>
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary-600 rounded-2xl p-12 text-white text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest event planning tips, trends, and exclusive offers
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">About Event Planning in Hyderabad</h3>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Hyderabad, the City of Pearls, has emerged as one of India's premier destinations for events and celebrations. 
              With its rich cultural heritage, modern infrastructure, and growing economy, the city offers the perfect blend 
              of tradition and contemporary amenities for hosting memorable events.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Princeton Convention Centre, located in the heart of LB Nagar, stands as a testament to Hyderabad's commitment 
              to excellence in hospitality and event management. Our state-of-the-art facilities, combined with our experienced 
              team, ensure that every event we host becomes a memorable experience for our clients and their guests.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're planning a grand wedding, a corporate conference, or a social gathering, Hyderabad offers 
              everything you need to make your event successful. From world-class venues to excellent connectivity, 
              the city provides the perfect backdrop for celebrations of all kinds.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
