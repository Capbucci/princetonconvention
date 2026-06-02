"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Offerformpopup from '@/components/forms/Offerformpopup';

const Offerpage = () => {
    const OffersData = [
        {
            image: "/offers/corporate-events-conferences.jpg",
            name: "Corporate Events & Conferences",
            tagline: "Business Conferences | Seminars | Product Launches | Annual Meets",
            keyMessage: "Princeton Convention Center offers a seamless blend of technology, comfort, and sophistication — designed to host impactful conferences, product launches, and annual meetings that inspire success.",
            features: [
                "High-speed Wi-Fi, advanced AV Setup & video conferencing",
                "Breakout rooms for workshops",
                "Inhouse catering packages",
                "Inhouse Parking"
            ],
            bookLink: "https://princetonconvention.com/"
        },
        {
            image: "/offers/wedding-social-event.jpg",
            name: "Wedding & Social Events",
            tagline: "Weddings | Engagements | Receptions | Anniversaries | Sangeet Nights",
            keyMessage: "Turn your dream wedding into a timeless celebration. With grand spaces, exquisite décor, and a touch of luxury, Princeton makes every moment unforgettable.",
            features: [
                "Stylish banquet halls with flexible décor themes",
                "Customizable food and beverage menus by expert chefs",
                "Dedicated event coordinator for smooth planning",
                "Ample parking area",
                "LED wall & premium sound system for entertainment",
                "Pre-event décor preview and setup assistance"
            ],
            bookLink: "https://princetonconvention.com/"
        },
        {
            image: "/offers/educational-government.jpg",
            name: "Educational & Government Events",
            tagline: "Workshops | Award Functions | Job Fairs | Public Meets",
            keyMessage: "A platform built to host meaningful seminars, workshops, and government events that drive growth, learning, and community engagement.",
            features: [
                "High-speed Wi-Fi, advanced AV Setup & video conferencing",
                "Inhouse Corporate catering and refreshment packages",
                "Inhouse Parking"
            ],
            bookLink: "https://princetonconvention.com/"
        },
        {
            image: "/offers/lifestyle-entertainments.jpg",
            name: "Lifestyle & Entertainment Events",
            tagline: "Concerts | Fashion Shows | Cultural Nights | Exhibitions",
            keyMessage: "Be the center of Hyderabad’s lifestyle and entertainment scene — from concerts to fashion shows, Princeton is your stage for spotlight-worthy experiences.",
            features: [
                "4K streaming & multi-camera setup",
                "Live audience engagement tools",
                "Technical support for online events"
            ],
            bookLink: "https://princetonconvention.com/"
        },
        {
            image: "/offers/banquets-celebrations.jpg",
            name: "Banquets & Celebrations",
            tagline: "Parties | Birthdays | Anniversaries | Reunions | Family Gatherings",
            keyMessage: "Turn your special moments into unforgettable celebrations at Princeton Convention Centre — where elegant banquet spaces, exquisite dining, and personalized service come together to create memories that last a lifetime.",
            features: [
                "Stylish banquet halls with flexible décor themes",
                "Customizable food and beverage menus by expert chefs",
                "Dedicated event coordinator for smooth planning",
                "Ample parking area",
                "LED wall & premium sound system for entertainment",
                "Pre-event décor preview and setup assistance"
            ],
            bookLink: "https://princetonconvention.com/"
        }
    ];

    const [selectedOffer, setSelectedOffer] = useState(null);
    const [openModal, setOpenModal] = useState(false); // For booking modal
    const [openInclusions, setOpenInclusions] = useState(false); // For inclusions modal

    // Function to open the booking form modal
    const handleBookNowClick = (offer) => {
        setSelectedOffer(offer);
        setOpenModal(true); // Open the booking form modal
    };

    // Function to open the inclusions popup
    const handleInclusionsClick = (offer) => {
        setSelectedOffer(offer);
        setOpenInclusions(true); // Open the inclusions modal
    };

    return (
        <>
            <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 h-full flex items-center">
                    <div className="container-custom">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Offers</h1>
                            <p className="text-xl text-gray-200 mb-8">
                               Find the best offers for your next event. From banquets to weddings, enjoy personalized services and spectacular settings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-16'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3">
                        {OffersData.map((data, index) => (
                            <div key={index} className="shadow-lg rounded-xl overflow-hidden mb-6">
                                <Image
                                    src={data.image}
                                    alt={data.name}
                                    width={500}
                                    height={350}
                                    className="object-cover w-full h-auto"
                                />
                                <div className="flex items-center justify-evenly py-5">
                                    <button
                                        className='bg-primary-600 border border-primary-600 px-5 py-2 rounded-md text-white'
                                        onClick={() => handleInclusionsClick(data)} // Open inclusions modal on click
                                    >
                                        Inclusions
                                    </button>
                                    <button
                                        className='bg-primary-600 border border-primary-600 px-5 py-2 rounded-md text-white'
                                        onClick={() => handleBookNowClick(data)} // Open booking form modal on click
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form Modal */}
            {openModal && selectedOffer && (
                <Offerformpopup
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    selectedOffer={selectedOffer} // Passing the selected offer to the modal
                />
            )}

            {/* Inclusions Popup Modal */}
            {openInclusions && selectedOffer && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white relative rounded-lg w-[90%] md:w-2/5 mx-auto p-6">
                        <button
                            onClick={() => setOpenInclusions(false)} // Close the inclusions modal
                            className="absolute bg-black/70 -top-12 right-0 text-2xl text-white px-3 py-1 rounded-full"
                        >
                            &#10799;
                        </button>
                        <h2 className="text-3xl font-bold mb-4">{selectedOffer?.name}</h2>
                        <h3 className="text-lg font-semibold mb-2">{selectedOffer?.tagline}</h3>
                        <p className="mb-4 text-sm">{selectedOffer?.keyMessage}</p>
                        <h4 className="text-lg font-semibold mb-2">Inclusions (Features):</h4>
                        <ul className="list-disc pl-5 mb-4 text-sm">
                            {selectedOffer?.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <div className="border-t-2">
                            <h5 className='pt-3'>Book Now</h5>
                            <p>Princeton Convention Centre, Saroornagar, Hyderabad</p>
                            <p>Call:  <a href="tel:+919949736693 ">+91 99497 36693 </a>,   <a href="tel:+919949736527">+91 99497 36527</a></p>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default Offerpage;
