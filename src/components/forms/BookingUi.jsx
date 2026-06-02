import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeBookingEngine, selectIsBookingOpen } from '@/redux/slices/bookingSlice';

export default function BookingUi() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsBookingOpen);


  // Local form state
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [room, setRoom] = useState('Room 1');
  const [guests, setGuests] = useState('Guests 1');
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // ESC to close
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) dispatch(closeBookingEngine()); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, dispatch]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Validate form
  const validateForm = () => {
    const errors = {};

    if (!name.trim()) errors.name = 'Name is required.';
    if (/[0-9]/.test(name)) errors.name = 'Name cannot contain numbers.';

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobile.trim()) errors.mobile = 'Mobile number is required.';
    if (!mobileRegex.test(mobile)) errors.mobile = 'Please enter a valid 10-digit mobile number.';

    if (!checkIn) errors.checkIn = 'Check-in date is required.';
    if (!checkOut) errors.checkOut = 'Check-out date is required.';
    if (checkIn && checkOut && checkOut <= checkIn) errors.checkOut = 'Check-out date cannot be before check-in date.';

    if (!room) errors.room = 'Please select a room.';
    if (!guests) errors.guests = 'Please select the number of guests.';

    return errors;
  };

  // Submit handler
  async function handleSubmit() {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setLoading(true);
      const endpoint = 'https://script.google.com/macros/s/AKfycbztZ1woo6jonGmRYyBOYMHy5pliT8ofP4NPoRjrd51tnVkK2Ny1VuRqxM3L1g8BiSydxA/exec';

      const formData = new FormData();
      formData.append('name', name.trim());
      formData.append('mobile', mobile.trim());
      formData.append('checkIn', checkIn ? checkIn.toLocaleDateString('en-GB') : '');
      formData.append('checkOut', checkOut ? checkOut.toLocaleDateString('en-GB') : '');
      formData.append('room', room);
      formData.append('guests', guests);

      const queryDate = new Date().toISOString().split('T')[0];
      formData.append('querydate', queryDate);

      const res = await fetch(endpoint, { method: 'POST', body: formData });
      const data = await res.json();

      if (data?.result === 'success') {
        // alert('Booking saved successfully!');
        window.open('/thankyou', '_blank');
        dispatch(closeBookingEngine());
        setName('');
        setMobile('');
        setCheckIn(null);
        setCheckOut(null);
        setRoom('Room 1');
        setGuests('Guests 1');
        setFormErrors({});
      } else {
        window.open('/thankyou', '_blank');
        alert('Failed to submit booking. Please try again.');
        console.error('Apps Script error:', data);
      }
    } catch (err) {
      window.open('/thankyou', '_blank');
      console.error('Submission error:', err);
      alert('Submission error. Please try again.');
    } finally {
      setLoading(false);
    }

      
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => dispatch(closeBookingEngine())}
        aria-hidden="true"
      />

      {/* Sliding panel */}
      <div role="dialog" aria-modal="true" className={`fixed top-0 right-0 bottom-0 z-[70] w-full lg:w-[50%] bg-primary-500 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} >
        <div className="relative h-full flex flex-col justify-center">
          {/* Close */}
          <button onClick={() => dispatch(closeBookingEngine())} className="absolute right-5 top-4 text-3xl leading-none" aria-label="Close booking" >
            &#10799;
          </button>

          <div className="block w-[90%] mx-auto mt-16">
            <p className="text-3xl font-semibold text-center mb-14 text-white">Book Your Stay</p>

            {/* Name & Mobile */}
            <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10">
              <div className="flex flex-col w-full lg:w-1/2 border-b-2 rounded-lg border-black">
                <input type="text" id="name" name="name" placeholder="Enter Name" className="bg-transparent text-black placeholder:text-black outline-none" value={name} onChange={(e) => setName(e.target.value)} />
                {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}
              </div>
              <div className="flex flex-col w-full lg:w-1/2 border-b-2 rounded-lg border-black">
                <input type="number" id="mobile" name="mobile" placeholder="Enter Mobile Number" className="bg-transparent text-black placeholder:text-black outline-none" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                {formErrors.mobile && <p className="text-red-500 text-xs">{formErrors.mobile}</p>}
              </div>
            </div>

            {/* Date Pickers */}
            <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10 booking-engine">
              <div className="flex flex-col w-full lg:w-1/2 border-b-2 rounded-lg border-black">
                <DatePicker
                  showIcon
                  placeholderText="Check In"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  className="outline-0 border-0 placeholder:text-black bg-transparent w-full"
                  id="check-in"
                  selected={checkIn}
                  onChange={(d) => setCheckIn(d)}
                  onKeyDown={(e) => e.preventDefault()}
                />
                {formErrors.checkIn && <p className="text-red-500 text-xs">{formErrors.checkIn}</p>}
              </div>
              <div className="flex flex-col w-full lg:w-1/2 border-b-2 rounded-lg border-black">
                <DatePicker
                  showIcon
                  placeholderText="Check Out"
                  dateFormat="dd/MM/yyyy"
                  minDate={checkIn || new Date()}  // Set the min date for check-out based on check-in date
                  className="outline-0 border-0 placeholder:text-black bg-transparent w-full"
                  id="check-out"
                  selected={checkOut}
                  onChange={(d) => setCheckOut(d)}
                  onKeyDown={(e) => e.preventDefault()}
                />
                {formErrors.checkOut && <p className="text-red-500 text-xs">{formErrors.checkOut}</p>}
              </div>
            </div>

            {/* Room & Guests */}
            <div className="flex flex-col lg:flex-row mt-4 lg:mt-7 gap-8">
              <div className="w-full md:w-1/2">
                <select id="room" name="room" className="px-0 lg:px-2 py-2 rounded-lg w-full bg-transparent border-0 border-b-2 border-black outline-none" value={room} onChange={(e) => setRoom(e.target.value)} >
                  <option>Room 1</option>
                  <option>Room 2</option>
                  <option>Room 3</option>
                  <option>Room 4</option>
                </select>
                {formErrors.room && <p className="text-red-500 text-xs">{formErrors.room}</p>}
              </div>
              <div className="w-full md:w-1/2 mt-2 lg:mt-0">
                <select id="guests" name="guests" className="px-0 lg:px-2 py-2 rounded-lg w-full bg-transparent border-0 border-b-2 border-black outline-none" value={guests} onChange={(e) => setGuests(e.target.value)} >
                  <option>Guests 1</option>
                  <option>Guests 2</option>
                  <option>Guests 3</option>
                  <option>Guests 4</option>
                  <option>Guests 5</option>
                  <option>Guests 6</option>
                </select>
                {formErrors.guests && <p className="text-red-500 text-xs">{formErrors.guests}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-14">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-white text-primary-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-primary-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Book Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
