import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaUser, FaArrowLeft, FaArrowRight, FaShare, FaBookmark, FaTag, FaClock } from 'react-icons/fa'
import { getBlogPost, getRelatedPosts, blogPosts } from '@/data/blogData'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.id)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Princeton Convention Centre',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} - Princeton Convention Centre Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogDetailPage({ params }) {
  const post = getBlogPost(params.id)
  const relatedPosts = getRelatedPosts(params.id, post?.category)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="mb-4">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to Blog
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-200">
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <FaUser className="mr-2" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <FaClock className="mr-2" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-64 md:h-96">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Article Body */}
              <div className="p-8 md:p-12">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-gray-200">
                  <div className="flex flex-wrap gap-4 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        <FaTag className="mr-1 text-xs" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                      <FaBookmark className="text-lg" />
                      <span className="text-sm">Save</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                      <FaShare className="text-lg" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <FaUser className="text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{post.author}</h4>
                        <p className="text-sm text-gray-600">Event Planning Expert</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <button className="btn-primary">
                        Contact Author
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    Introduction
                  </a>
                  <a href="#planning" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    Planning Process
                  </a>
                  <a href="#timeline" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    Timeline
                  </a>
                  <a href="#tips" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    Tips & Advice
                  </a>
                  <a href="#conclusion" className="block text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    Conclusion
                  </a>
                </nav>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              {relatedPost.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Signup */}
              <div className="bg-primary-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest event planning tips and trends delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-primary-600 font-semibold py-2 rounded text-sm hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help Planning?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our expert team is here to help you plan the perfect event.
                </p>
                <Link href="/contact" className="btn-primary w-full text-center block">
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
