import React from 'react'
export const metadata = {
  title: 'Princeton Convention Center - Cancellation & Refund Policy',
  description: 'Review the cancellation and refund policy for bookings at Princeton Convention Centre, LB Nagar. Understand terms for event cancellations, rescheduling, and refunds.',
    alternates: {
      canonical: "https://princetonconvention.com/cancellation-policy/",
    },
}
const Page = () => {
  return (
    <div>
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cancellation & Refund Policy
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Cancellation & Refund Policy
          </h1>

          <p className="leading-relaxed text-gray-800">
            At <span className="font-bold">Princeton Convention Centre, LB Nagar</span>, we understand that plans can change. Whether it’s a corporate event, wedding celebration, or social gathering, we strive to accommodate our clients’ needs while maintaining fairness and operational efficiency. <br />
            This Cancellation & Refund Policy outlines the terms applicable to all reservations, bookings, and payments made with us.
          </p>

          {/* 1. General Terms */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. General Terms</h2>
            <ul className="list-disc ps-6 space-y-3 text-gray-800 leading-relaxed">
              <li>All bookings at Princeton Convention Centre are confirmed only upon receipt of an advance payment as mutually agreed during the booking process.</li>
              <li>The booking amount secures your date, event space, and preliminary arrangements.</li>
              <li>Cancellations, rescheduling, or refund requests must be communicated in <span className="font-bold">writing via email</span> to our reservations team at <a className="font-bold text-blue-600 hover:underline" href="mailto:bookings@princetonconvention.com">bookings@princetonconvention.com</a>.</li>
              <li>The date on which the written request is received will determine the applicable cancellation or refund terms.</li>
            </ul>
          </div>

          {/* 2. Cancellation by the Client */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Cancellation by the Client</h2>

            <h4 className="text-xl font-bold mb-2">a. Event Hall Bookings</h4>
            <p className="leading-relaxed text-gray-800">If a confirmed booking is cancelled by the client, the following refund policy will apply:</p>

            <ul className="mt-4 space-y-2 text-gray-800">
              <li className="font-bold">Timeline Before Event Date <span className="ms-5 md:ms-10">Refund Eligibility</span></li>
              <li>More than 60 days prior<span className="ms-5 md:ms-10">80% of the advance amount refunded</span></li>
              <li>Between 30–60 days prior<span className="ms-5 md:ms-10">50% of the advance amount refunded</span></li>
              <li>Between 15–29 days prior<span className="ms-5 md:ms-10">25% of the advance amount refunded</span></li>
              <li>Less than 15 days prior<span className="ms-5 md:ms-10">No refund (100% retention of advance)</span></li>
            </ul>

            <ul className="list-disc ps-6 mt-4 space-y-2 leading-relaxed">
              <li>Refunds, where applicable, will be processed within <span className="font-bold">10–15 business days</span> from the date of written approval.</li>
              <li>All applicable <span className="font-bold">transaction or bank charges</span> will be deducted from the refund amount.</li>
            </ul>

            <h4 className="text-xl font-bold mt-10 mb-2">b. Catering & F&B Services</h4>
            <p className="leading-relaxed text-gray-800">
              For events availing <span className="font-bold">in-house catering</span> or <span className="font-bold">custom menu plans</span>, cancellation of F&B orders less than <span className="font-bold">7 days before the event</span> will incur <span className="font-bold">full retention</span> of the estimated food cost, as fresh ingredients and vendor arrangements would have been committed.
            </p>
            <p className="mt-4 leading-relaxed text-gray-800">If cancellation occurs 8–15 days before the event, 50% of the F&B advance will be retained.</p>

            <h4 className="text-xl font-bold mt-10 mb-2">c. Décor, AV, and Third-Party Services</h4>
            <p className="leading-relaxed text-gray-800">For décor, stage setup, lighting, and third-party vendors booked through Princeton:</p>
            <ul className="list-disc ps-6 mt-4 space-y-2 leading-relaxed">
              <li>If cancelled more than 10 days prior to the event: 25% cancellation fee applies.</li>
              <li>If cancelled within 10 days of the event: 100% of vendor service charge applies, as contracts would already be executed.</li>
            </ul>
          </div>

          {/* 3. Rescheduling and Postponements */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Rescheduling and Postponements</h2>
            <p className="leading-relaxed text-gray-800">We understand that unforeseen situations may arise.</p>
            <ul className="list-disc ps-6 mt-4 space-y-2 leading-relaxed">
              <li>Clients may <span className="font-bold">reschedule their event</span> to another available date within <span className="font-bold">six months</span> from the original booking date.</li>
              <li>A <span className="font-bold">rescheduling fee of 10%</span> of the total booking value may apply to cover administrative and opportunity costs.</li>
              <li>If the new event date falls in a peak season or holiday period, rate differences will be charged accordingly.</li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-800">No-show or failure to confirm a new date within six months will result in automatic forfeiture of the booking amount.</p>
          </div>

          {/* 4–8 as before with improved spacing */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Force Majeure</h2>
            <p className="leading-relaxed text-gray-800">
              In exceptional circumstances beyond human control — such as natural disasters, government restrictions, pandemics, or other unforeseen emergencies — Princeton Convention Centre may:
            </p>
            <ul className="list-disc ps-6 mt-4 space-y-2 leading-relaxed">
              <li>Offer <span className="font-bold">full rescheduling</span> at no additional charge, or</li>
              <li>Provide a <span className="font-bold">partial refund</span> after deducting non-recoverable operational expenses.</li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-800">
              Princeton reserves the right to assess each case individually and extend flexibility where possible.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Cancellation by Princeton Convention Centre</h2>
            <p className="leading-relaxed text-gray-800">
              In the unlikely event that Princeton Convention Centre must cancel a confirmed booking due to unavoidable reasons (such as facility maintenance, safety concerns, or government regulations):
            </p>
            <ul className="list-disc ps-6 mt-4 space-y-2 leading-relaxed">
              <li>Clients will be <span className="font-bold">notified promptly</span>.</li>
              <li>A <span className="font-bold">full refund</span> of the advance payment will be made within 7–10 business days, or</li>
              <li>The client may opt to <span className="font-bold">reschedule at no additional cost</span>.</li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-800">
              Princeton will not be liable for any indirect, incidental, or consequential losses arising from such cancellation.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Refund Processing</h2>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>All refunds are processed via the <span className="font-bold">same payment mode</span> used at the time of booking (credit/debit card, NEFT, UPI, etc.).</li>
              <li>Refund requests must include <span className="font-bold">valid bank details, proof of payment,</span> and <span className="font-bold">booking confirmation</span>.</li>
              <li><span className="font-bold">Processing time:</span> 10–15 business days, subject to banking timelines.</li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Non-Refundable Bookings</h2>
            <p className="leading-relaxed text-gray-800">
              Certain special offers, promotional packages, or discounted deals may be designated as <span className="font-bold">non-refundable</span>.
            </p>
            <p className="mt-3 leading-relaxed text-gray-800">
              These terms will be clearly communicated at the time of booking, and no claims for refunds will be entertained thereafter.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Contact for Cancellations or Refunds</h2>
            <p className="leading-relaxed text-gray-800">
              For all booking modifications, cancellations, or refund queries, please reach out to:
            </p>
            <div className="ps-6 mt-4 text-gray-800 space-y-1">
              <p><span className="font-bold">Reservations Desk – Princeton Convention Centre</span></p>
              <p>LB Nagar, Hyderabad, Telangana, India</p>
              <p>📧 <a href="mailto:bookings@princetonconvention.com" className="text-blue-600 hover:underline">bookings@princetonconvention.com</a></p>
              <p>📞 +91 99497 36693</p>
              <p>🌐 <a href="https://www.princetonconvention.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.princetonconvention.com</a></p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="leading-relaxed text-gray-800">
              At Princeton, we value your trust and understand that events are once-in-a-lifetime moments — be it a wedding celebration, corporate launch, or community gathering.
            </p>
            <p className="mt-3 leading-relaxed text-gray-800">
              Our cancellation and refund process is designed to balance flexibility for our guests with the operational realities of large-scale event management.
            </p>
            <p className="mt-3 leading-relaxed text-gray-800">
              We remain committed to fair, transparent, and customer-centric practices at every stage of your experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
