import React from 'react'
import GalleryPage from './Gallerypage'

export const metadata = {
  title: 'Princeton Convention Center Hyderabad | Gallery',
  description: 'View photos of our elegant banquet halls and wedding venues in Hyderabad.',
      alternates: {
      canonical: "https://princetonconvention.com/gallery/",
    },
}
const page = () => {
  return ( <GalleryPage/>)
}

export default page
