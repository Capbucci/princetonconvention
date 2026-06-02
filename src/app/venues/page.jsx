import React from 'react'
import VenuesPage from './Venuepage'

export const metadata = {
  title: 'Wedding & Banquet Venues in Hyderabad',
  description: 'Explore elegant banquet halls and wedding venues in Hyderabad at Princeton Convention Center.',
  alternates: {
    canonical: "https://princetonconvention.com/venues/",
  },
}
const page = () => {
  return (<VenuesPage />)
}

export default page
