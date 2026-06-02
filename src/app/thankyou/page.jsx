import React from 'react'

const page = () => {
    return (
        <div>



            {/* Hero Section */}
            <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 h-full flex items-center">
                    <div className="container-custom">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Thank You</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className='py-16 bg-gray-50'>
                <div className="max-w-5xl mx-auto ">
<h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-6">Thank You for contacting us our team will get in touch with you soon</h2>
                </div>
            </section>
        </div>
    )
}

export default page