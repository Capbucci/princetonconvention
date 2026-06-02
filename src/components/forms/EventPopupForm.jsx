"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const EventPopupForm = ({ openModal, setopenModal, selectedEvent }) => {
    const [loading, setLoading] = useState(false);
    const [fullName, setfullName] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [emailId, setemailId] = useState("")
    const [selectedDate, setSelectedDate] = useState(null);
    const [noOfGuests, setnoOfGuests] = useState("");
    const [selectCategory, setSelectCategory] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (fullName.trim().length <= 1) {
            setError("Please enter a valid name (at least 2 characters)");
            return;
        }
        if (!/^\d{10}$/.test(phoneNumber)) {
            setError("Please enter a valid 10-digit phone number");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(emailId)) {
            setError("Please enter a valid email address");
            return;
        }
        if (!noOfGuests || parseInt(noOfGuests) <= 0) {
            setError("Please enter the number of guests");
            return;
        }
        if (!selectCategory) {
            setError("Please select a category");
            return;
        }

        setLoading(true);

        try {
            const endpoint = 'https://script.google.com/macros/s/AKfycbxKxrzHvLPE5k4wf-rFBCFBzzoy9tRlfw7qsZs5B0aVRrCigVSxSLt7861TGE1Mv13tsg/exec';
            const eventDate = selectedDate ? selectedDate.toLocaleDateString('en-GB') : '';

            const fd = new FormData();
            fd.append('fullName', fullName);
            fd.append('phoneNumber', phoneNumber);
            fd.append('emailId', emailId);
            fd.append('eventDate', eventDate);
            fd.append('noOfGuests', noOfGuests);
            fd.append('category', selectCategory);
            fd.append('message', message);
            fd.append('eventName', selectedEvent?.title || '');

            // add current date as querydate (YYYY-MM-DD)
            const queryDate = new Date().toISOString().split('T')[0];
            fd.append('querydate', queryDate);

            const res = await fetch(endpoint, { method: 'POST', body: fd });
            const data = await res.json();

            if (data?.result === 'success') {
                // alert('Form Submitted Successfully');
                window.open('/thankyou', '_blank');
                setfullName("");
                setphoneNumber("");
                setemailId("");
                setSelectedDate(null);
                setnoOfGuests("");
                setSelectCategory("");
                setMessage("");
                setError("");
                setopenModal(false); // close popup after success

            } else {
                window.open('/thankyou', '_blank');
                alert('Failed to submit form');
                console.error('Apps Script error:', data);
            }
        } catch (err) {
            window.open('/thankyou', '_blank');ś
            console.error(err);
            alert('Failed to submit form');
        } finally {
            setLoading(false);
        }
    }

    if (!openModal) return null;

    return (
        <div className="fixed z-50 top-0 right-0 bottom-0 left-0 bg-black/80 w-full h-screen flex items-center justify-center" onClick={() => setopenModal(false)}>
            <div className="bg-white rounded-xl w-[90%] lg:w-[500px] p-5 lg:p-6 relative" onClick={(e) => e.stopPropagation()}>
                <p className='text-xl lg:text-2xl text-center mb-3 lg:mb-6 font-bold'>Book Your Table ({selectedEvent?.title})</p>
                <form onSubmit={handleSubmit}>

                    <input type="hidden" name="eventName" value={selectedEvent?.title} />


                    <span className='absolute right-0 -top-10 w-8 h-8 flex items-center justify-center bg-white text-2xl/2 rounded-full cursor-pointer' onClick={() => setopenModal(false)}>&#10799;</span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mb-1 lg:mb-3">
                        <div>
                            <label className="block text-sm font-semibold">Name</label>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Xyz"
                                value={fullName}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    const noNumbers = value.replace(/[0-9]/g, '');
                                    setfullName(noNumbers);
                                }}
                                className="mt-1 block w-full border border-gray-300 p-2 outline-primary-600 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold">Phone</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="+91 98765 43210"
                                value={phoneNumber}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    const digitsOnly = value.replace(/[^0-9]/g, '');
                                    setphoneNumber(digitsOnly);
                                }}
                                className="mt-1 block w-full border border-gray-300 p-2 outline-primary-600 text-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mb-1 lg:mb-3">
                        <div>
                            <label className="block text-sm font-bold">Email</label>
                            <input
                                type="email"
                                id="emailId"
                                name="emailId"
                                placeholder="example@example.com"
                                value={emailId}
                                onChange={(e) => setemailId(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 p-2 outline-primary-600 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block mt-1 text-sm font-bold">Select Date</label>
                            <DatePicker
                                placeholderText="Select Date"
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className=" block w-full border border-gray-300 p-2 outline-primary-600 text-sm"
                                minDate={new Date()}
                                onKeyDown={(e) => e.preventDefault()}
                                showIcon
                                id="date"
                                name="date"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mb-3">
                        <div>
                            <label className="block text-sm font-bold">No of Guests</label>
                            <input
                                type="number"
                                name='noOfGuests'
                                placeholder='No of Guests'
                                value={noOfGuests}
                                onChange={(e) => setnoOfGuests(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 p-2 outline-primary-600 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Select Category</label>
                            <select
                                
                                value={selectCategory}
                                onChange={(e) => setSelectCategory(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 p-2 outline-primary-600 text-sm"
                                id="category"
                                name="category"
                            >
                                <option value="">Select Category</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Destination Wedding">Destination Wedding</option>
                                <option value="Designer Wedding">Designer Wedding</option>
                                <option value="Reception">Reception</option>
                                <option value="Conference">Conference</option>
                                <option value="Meeting">Meeting</option>
                                <option value="Seminar">Seminar</option>
                                <option value="Trade Shows">Trade Shows</option>
                                <option value="Product Launch">Product Launch</option>
                                <option value="Theme Parties">Theme Parties</option>
                                <option value="Birthday Parties">Birthday Parties</option>
                                <option value="Family Event">Family Event</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mb-3">
                        <textarea
                                id="message"
                                name="message"
                                placeholder='Message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='w-full h-24 border border-gray-300 outline-primary-600 p-2'
                        ></textarea>
                    </div>

                    {error && <p className='text-center font-semibold text-primary-600'>{error}</p>}

                    <div className="mt-5 text-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`text-sm px-6 py-2 mx-auto rounded-[7px] text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 cursor-pointer'}`}
                        >
                            {loading ? 'Please wait...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default EventPopupForm;
