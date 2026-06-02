import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaUser, FaArrowRight, FaBookOpen, FaLightbulb, FaCheckSquare } from 'react-icons/fa'

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Wedding Venues in Hyderabad: A Complete Guide',
      excerpt: 'Discover the best wedding venues in Hyderabad, including our comprehensive guide to choosing the perfect location for your special day.',
      image: '',
      category: 'Wedding Planning',
      date: 'March 15, 2024',
      author: 'Princeton Team',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Corporate Event Trends 2024: What\'s New in Event Management',
      excerpt: 'Stay ahead with the latest corporate event trends and discover how to make your business gatherings more engaging and memorable.',
      image: '',
      category: 'Corporate Events',
      date: 'March 10, 2024',
      author: 'Event Experts',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Complete Checklist for Planning the Perfect Wedding',
      excerpt: 'Your comprehensive wedding planning checklist to ensure nothing is missed on your special day. From venue selection to final touches.',
      image: '',
      category: 'Wedding Planning',
      date: 'March 5, 2024',
      author: 'Wedding Planners',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 4,
      title: 'MICE Tourism in Hyderabad: A Growing Industry',
      excerpt: 'Explore the growing MICE (Meetings, Incentives, Conferences, Exhibitions) industry in Hyderabad and its impact on the local economy.',
      image: '',
      category: 'Industry Insights',
      date: 'February 28, 2024',
      author: 'Industry Analysts',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Sustainable Event Planning: Eco-Friendly Practices',
      excerpt: 'Learn how to organize environmentally conscious events with our guide to sustainable event planning practices and green alternatives.',
      image: '',
      category: 'Sustainability',
      date: 'February 20, 2024',
      author: 'Green Events Team',
      readTime: '9 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Hyderabad\'s Best Catering Options for Events',
      excerpt: 'A comprehensive guide to the best catering services in Hyderabad, featuring local cuisines and international options for your event.',
      image: '',
      category: 'Catering',
      date: 'February 15, 2024',
      author: 'Culinary Experts',
      readTime: '6 min read',
      featured: false
    }
  ]

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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & Resources
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in event planning. 
            Our blog covers everything from wedding planning to corporate events.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h3>
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
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
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
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
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
        {/* <div className="bg-primary-600 rounded-2xl p-12 text-white text-center">
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
        </div> */}

        {/* SEO Content */}
        {/* <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
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
        </div> */}
      </div>
    </section>
  )
}
