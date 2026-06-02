import dynamic from 'next/dynamic'

// Lazy load components
const HeroSection = dynamic(() => import('@/components/HeroSection'))
const AboutSection = dynamic(() => import('@/components/AboutSection'))
const VenuesSection = dynamic(() => import('@/components/VenuesSection'))
const EventsSection = dynamic(() => import('@/components/EventsSection'))
const DiningSection = dynamic(() => import('@/components/DiningSection'))
const GallerySection = dynamic(() => import('@/components/GallerySection'))
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'))
const PackagesSection = dynamic(() => import('@/components/PackagesSection'))
const ContactSection = dynamic(() => import('@/components/ContactSection'))

export const metadata = {
  title: 'Best Convention Center in Hyderabad',
  description: 'Princeton Convention Center offers the best banquet halls and wedding venues in Hyderabad for grand events and celebrations.',
  alternates: {
    canonical: "https://princetonconvention.com/",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <VenuesSection />
      <EventsSection />
      <DiningSection />
      <GallerySection />
      <TestimonialsSection />
      {/* <PackagesSection /> */}
      <ContactSection />
    </div>
  )
}
