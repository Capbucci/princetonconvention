import { useState } from 'react'

const Contactform = () => {
    const eventTypes = [
        'Wedding',
        // 'Corporate Meeting',
        // 'Conference',
        'Exhibition',
        'Birthday Party',
        'Anniversary',
        'Product Launch',
        'Social Gathering',
        'Other'
    ]

    const venues = [
        'Grand Ballroom',
        'Royal Hall',
        'Convention Center',
        // 'Garden Pavilion',
        // 'Executive Boardroom',
        'Multi-Purpose Hall',
        'Not Sure Yet'
    ]

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        venue: '',
        message: ''
    })

    const today = new Date().toISOString().split('T')[0]
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validate = () => {
        // Name
        if (!formData.name.trim()) {
            alert("Full Name is required.");
            return false;
        }
        if (formData.name.trim().length < 2) {
            alert("Name must be at least 2 characters.");
            return false;
        }

        // Email
        if (!formData.email.trim()) {
            alert("Email is required.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            alert("Please enter a valid Email address.");
            return false;
        }

        // Phone
        if (!formData.phone.trim()) {
            alert("Phone Number is required.");
            return false;
        }
        const digits = formData.phone.replace(/\D/g, "");
        if (digits.length < 7 || digits.length > 15) {
            alert("Please enter a valid Phone Number.");
            return false;
        }

        // Event Type
        if (!formData.eventType) {
            alert("Please select an Event Type.");
            return false;
        }

        // Event Date
        if (!formData.eventDate) {
            alert("Event Date is required.");
            return false;
        }
        if (formData.eventDate < today) {
            alert("Event Date cannot be in the past.");
            return false;
        }

        // Guest Count
        if (!formData.guestCount) {
            alert("Please select expected guest count.");
            return false;
        }

        // Venue
        if (!formData.venue) {
            alert("Please select a Venue.");
            return false;
        }

        // Message
        if (!formData.message.trim()) {
            alert("Message is required.");
            return false;
        }
        if (formData.message.trim().length < 10) {
            alert("Message must be at least 10 characters.");
            return false;
        }

        return true;
    };


    const handleSubmit = async (e) => {
        e.preventDefault()

        // 🛑 STOP submit if validation fails
        if (!validate()) return

        setIsSubmitting(true)

        try {
            const endpoint = 'https://script.google.com/macros/s/AKfycbwtRrMkD73KOEjksU1VPMdOKZtrd9t1Xp7sbEGgIHYEAJ05gfWQykolDJmX1uI93ZoSLw/exec'

            const fd = new FormData()
            fd.append('name', formData.name.trim())
            fd.append('email', formData.email.trim())
            fd.append('phone', formData.phone.trim())
            fd.append('eventType', formData.eventType)
            fd.append('eventDate', formData.eventDate)
            fd.append('guestCount', formData.guestCount)
            fd.append('venue', formData.venue)
            fd.append('message', formData.message)

            const queryDate = new Date().toISOString().split('T')[0]
            fd.append('querydate', queryDate)

            const res = await fetch(endpoint, { method: 'POST', body: fd })
            const data = await res.json()

            if (data?.result === 'success') {
                window.open('/thankyou', '_blank')

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    eventType: '',
                    eventDate: '',
                    guestCount: '',
                    venue: '',
                    message: ''
                })
            } else {
                window.open('/thankyou', '_blank')
                alert('Failed to submit form. Please try again.')
                console.error('Apps Script error:', data)
            }
        } catch (err) {
            window.open('/thankyou', '_blank')
            console.error('Submission error:', err)
            alert('Submission error. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                            placeholder="Your full name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                            placeholder="your.email@example.com"
                        />
                    </div>
                </div>

                {/* PHONE + EVENT TYPE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Event Type *
                        </label>
                        <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        >
                            <option value="">Select Event Type</option>
                            {eventTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* EVENT DATE + GUESTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Event Date *
                        </label>
                        <input
                            type="date"
                            name="eventDate"
                            min={today}
                            value={formData.eventDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Expected Guests *
                        </label>
                        <select
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        >
                            <option value="">Select Guest Count</option>
                            <option value="50-100">50-100</option>
                            <option value="100-200">100-200</option>
                            <option value="200-400">200-400</option>
                            <option value="400-800">400-800</option>
                            <option value="800+">800+</option>
                        </select>
                    </div>
                </div>

                {/* VENUE */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Venue *
                    </label>
                    <select
                        name="venue"
                        value={formData.venue}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    >
                        <option value="">Select Venue</option>
                        {venues.map(venue => (
                            <option key={venue} value={venue}>{venue}</option>
                        ))}
                    </select>
                </div>

                {/* MESSAGE */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Message *
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        placeholder="Tell us more about your event requirements..."
                    />
                </div>

                {/* BUTTON */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>

            </form>
        </div>
    )
}

export default Contactform
