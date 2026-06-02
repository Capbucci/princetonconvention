'use client';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CorporateDinePopupForm = ({ openModal, setopenModal, restauData }) => {
    const [loading, setLoading] = useState(false);
    const [fullName, setfullName] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [emailId, setemailId] = useState("")
    const [selectedDate, setSelectedDate] = useState(null);
    const [noOfGuests, setnoOfGuests] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("")
    const [sourcePage, setSourcePage] = useState("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setSourcePage(window.location.pathname);
        }
    }, []);



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

        setLoading(true);

        try {
            const endpoint = 'https://script.google.com/macros/s/AKfycbwXoWIXpYROOpRFjNJctXHlOmZHYXBaOs8Yl8_orL90r-pYmUGSvFwxajCj1Q1J2ICa/exec';

            const fd = new FormData();
            fd.append('name', fullName);
            fd.append('email', emailId);
            fd.append('number', phoneNumber);
            fd.append('date', selectedDate ? selectedDate.toLocaleDateString('en-GB') : '');
            fd.append('guests', noOfGuests);
            fd.append('message', message);
            fd.append('restaurantName', restauData?.name || '');
            fd.append('city', restauData?.city || '');
            fd.append('sourcePage', sourcePage || '');
            fd.append('formType', 'Corporate Dining Form');
        
            // add current date as querydate (YYYY-MM-DD)
            const queryDate = new Date().toISOString().split('T')[0];
            fd.append('querydate', queryDate);

            const res = await fetch('https://script.google.com/macros/s/AKfycbwXoWIXpYROOpRFjNJctXHlOmZHYXBaOs8Yl8_orL90r-pYmUGSvFwxajCj1Q1J2ICa/exec', {
                method: 'POST',
                body: fd
            });
            const data = await res.json();

            if (data?.result === 'success') {
                toast.success('Form Submitted Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                setfullName("");
                setphoneNumber("");
                setemailId("");
                setSelectedDate(null);
                setnoOfGuests("");
                setMessage("");
                setError("");
                window.open('/thankyou', '_blank');
            } else {
                toast.error('Failed to submit form');
                console.error('Apps Script error:', data);
                window.open('/thankyou', '_blank');
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to submit form');
            window.open('/thankyou', '_blank');
        } finally {
            setLoading(false);
        }
    };

    if (!openModal) return null;

    return (
        <div className="fixed z-50 top-0 right-0 bottom-0 left-0 bg-black/80 w-full h-screen flex items-center justify-center" onClick={() => setopenModal(false)}>
            <div className="bg-white rounded-xl w-[90%] lg:w-[500px] p-5 lg:p-6 relative" onClick={(e) => e.stopPropagation()}>
                <p className='text-xl md:text-2xl mb-3 text-center md:mb-6 font-bold'>Book Your Table ({restauData.city})</p>
                <form onSubmit={handleSubmit}>

                    <input type="hidden" name="restaurantName" value={restauData?.name || ''} />
                    <input type="hidden" name="city" value={restauData?.city || ''} />
                    <input type="hidden" name="sourcePage" value={sourcePage} />
                    <input type="hidden" name="formType" value="Corporate Dining Form" />

                    <span className='absolute right-0 -top-10 w-8 h-8 flex items-center justify-center bg-white text-2xl/2 rounded-full cursor-pointer' onClick={() => setopenModal(false)}>&#10799;</span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mb-1 lg:mb-3">
                        <div>
                            <label className="block text-sm font-semibold ">Name</label>
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
                                className="mt-1 block w-full border border-gray-300 p-2 outline-[#C12D2E] text-sm"
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
                                className="mt-1 block w-full border border-gray-300 -md p-2 outline-[#C12D2E] text-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mb-2 lg:mb-3">
                        <div>
                            <label className="block text-sm font-bold">Email</label>
                            <input
                                type="email"
                                name='emailId'
                                placeholder="example@example.com"
                                value={emailId}
                                onChange={(e) => setemailId(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 p-2 outline-[#C12D2E] text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold">Select Date</label>
                            <DatePicker
                                placeholderText="Select Date"
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className="mt-1  border border-gray-300 p-2 outline-[#C12D2E] text-sm"
                                minDate={new Date()}
                                name='date'
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mb-3">
                        <label className="block text-sm font-bold">No of Guests</label>
                        <input
                            type="number"
                            name='noOfGuests'
                            placeholder='No of Guests'
                            value={noOfGuests}
                            onChange={(e) => setnoOfGuests(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 p-2 outline-[#C12D2E] text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 mb-3">
                        <textarea
                            name="Message"
                            placeholder='Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='w-full h-24 border border-gray-300 outline-[#C12D2E] p-2'
                        ></textarea>
                    </div>

                    {error && <p className='text-center font-semibold text-[#C12D2E]'>{error}</p>}

                    <div className="mt-5 text-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`text-sm px-6 py-2 rounded-[7px] text-white mx-auto ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#C12D2E] cursor-pointer'}`}
                        >
                            {loading ? 'Please wait...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CorporateDinePopupForm;
