import React from 'react'
export const metadata = {
  title: 'Terms and Conditions - Princeton Convention Centre, LB Nagar',
  description: 'Read our Privacy Policy to understand how Princeton Convention Centre, LB Nagar collects, uses, and protects your personal information when you use our services.',
    alternates: {
      canonical: "https://princetonconvention.com/terms-conditions/",
    },
}
const Page = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Terms &amp; Conditions
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms &amp; Conditions</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: November 1, 2025</p>

          <p className="leading-relaxed text-gray-800">
            Welcome to <span className="font-bold">Princeton Convention Centre, LB Nagar</span>. By accessing our website, making a reservation, or using our facilities and services, you agree to abide by the following Terms &amp; Conditions. These terms outline the mutual expectations between the guest and Princeton Convention Centre, ensuring a smooth and transparent event experience.
          </p>

          {/* 1. General Terms */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. General Terms</h2>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>The use of Princeton Convention Centre’s premises, facilities, and services is governed by these Terms &amp; Conditions.</li>
              <li>By confirming a booking or utilizing our services, you acknowledge that you have read, understood, and accepted these terms.</li>
              <li>Princeton reserves the right to amend or update these terms at any time without prior notice. Any modifications will be posted on our official website.</li>
            </ul>
          </div>

          {/* 2. Booking and Confirmation */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Booking and Confirmation</h2>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>Bookings are confirmed only upon receipt of the advance payment or booking deposit as mutually agreed.</li>
              <li>The remaining balance must be cleared before the commencement of the event, unless otherwise stated in the agreement.</li>
              <li>Tentative or verbal bookings will not be considered confirmed until written acknowledgment and payment are received.</li>
              <li>Princeton reserves the right to release unconfirmed bookings without prior notice.</li>
            </ul>
          </div>

          {/* 3. Payments */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Payments</h2>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>All payments must be made via authorized modes including bank transfer, cheque, UPI, or credit/debit cards payable to Princeton Convention Centre.</li>
              <li>Any applicable taxes and service charges will be levied as per prevailing government regulations.</li>
              <li>Delays in payment may result in the cancellation of the booking or denial of access to the facilities.</li>
            </ul>
          </div>

          {/* 4. Use of Venue and Conduct */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Use of Venue and Conduct</h2>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>The client shall use the premises only for the purpose specified at the time of booking (e.g., wedding, corporate conference, concert, etc.).</li>
              <li>Sub-letting, transferring, or sharing the venue with another party without written consent from Princeton is strictly prohibited.</li>
              <li>The client is responsible for the behavior of guests, invitees, and vendors at the event.</li>
              <li>Smoking is permitted only in designated areas. Consumption of alcohol is allowed only with the necessary licenses and prior approval.</li>
              <li>The client shall ensure that no illegal, hazardous, or immoral activities take place within the premises.</li>
            </ul>
          </div>

          {/* 5. Timings and Access */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Timings and Access</h2>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>Standard event hours will be defined in the booking contract.</li>
              <li>Any request for extended hours is subject to management approval and may attract additional charges.</li>
              <li>Event setup and dismantling time must be factored into the booking duration.</li>
              <li>Exceeding agreed hours without approval will result in penalty fees or partial forfeiture of the security deposit.</li>
            </ul>
          </div>

          {/* 6. Décor, Technical, and Vendor Guidelines */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Décor, Technical, and Vendor Guidelines</h2>
            <p className="leading-relaxed text-gray-800">Princeton Convention Centre provides in-house décor, lighting, AV, and event management services. Use of external vendors must be pre-approved in writing.</p>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800 mt-4">
              <li>Any damage caused to property, furniture, electricals, or décor fixtures during the event will be charged to the client.</li>
              <li>Confetti, open flames, fireworks, or water-based décor elements are not permitted indoors unless expressly authorized.</li>
              <li>Clients or vendors must comply with all fire safety and electrical load regulations.</li>
            </ul>
          </div>

          {/* 7. Food & Beverage (F&B) Policy */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Food &amp; Beverage (F&amp;B) Policy</h2>
            <p className="leading-relaxed text-gray-800">All catering within Princeton Convention Centre is managed by our in-house culinary team. Outside catering is not permitted unless approved in exceptional cases.</p>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800 mt-4">
              <li>Menu selection, tasting sessions, and final counts must be confirmed at least 10 days before the event.</li>
              <li>Any last-minute changes to menu or guest count are subject to feasibility and additional charges.</li>
            </ul>
          </div>

          {/* 8. Parking and Traffic Management */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Parking and Traffic Management</h2>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>Princeton offers ample on-site parking with valet assistance.</li>
              <li>Parking is provided on a first-come, first-served basis and at the guest’s own risk.</li>
              <li>Princeton is not liable for loss or damage to vehicles or belongings left inside them.</li>
            </ul>
          </div>

          {/* 9. Security and Safety */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Security and Safety</h2>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>Basic security personnel are included in the event package. Additional guards, bouncers, or surveillance setups may be arranged upon request at extra cost.</li>
              <li>Clients must adhere to all government and civic safety regulations.</li>
              <li>In case of emergencies (fire, medical, etc.), clients and guests must follow the instructions of the Princeton safety team.</li>
            </ul>
          </div>

          {/* 10. Damage and Liability */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Damage and Liability</h2>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>The client assumes full responsibility for any damage caused to the property, fixtures, or equipment during their event.</li>
              <li>A refundable security deposit may be collected to cover potential damages or violations.</li>
              <li>Princeton will not be liable for losses due to equipment failure, power interruptions, natural calamities, or other events beyond reasonable control.</li>
            </ul>
          </div>

          {/* 11. Force Majeure */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Force Majeure</h2>
            <p className="leading-relaxed text-gray-800">
              In the event of unforeseen circumstances such as natural disasters, strikes, pandemics, government restrictions, or acts of God, Princeton Convention Centre shall not be held liable for the inability to perform contractual obligations. In such cases, clients may be offered the option to reschedule or receive a partial refund, as outlined in our Cancellation Policy.
            </p>
          </div>

          {/* 12. Intellectual Property */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Intellectual Property</h2>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>All content, branding, logos, and photographs associated with Princeton Convention Centre are the intellectual property of the management.</li>
              <li>Use of our name, images, or trademarks in promotional material requires prior written approval.</li>
            </ul>
          </div>

          {/* 13. Privacy and Data Use */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Privacy and Data Use</h2>
            <p className="leading-relaxed text-gray-800">
              Personal information collected during booking or inquiries will be used solely for event coordination and communication. Our data protection practices are governed by our separate Privacy Policy, available on our website.
            </p>
          </div>

          {/* 14. Governing Law and Jurisdiction */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Governing Law and Jurisdiction</h2>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>These Terms &amp; Conditions are governed by the laws of India, with exclusive jurisdiction vested in the courts of Hyderabad, Telangana.</li>
              <li>Any disputes arising shall be resolved amicably through discussion before seeking legal remedies.</li>
            </ul>
          </div>

          {/* 15. Contact Us */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">15. Contact Us</h2>
            <p className="leading-relaxed text-gray-800">For any clarifications or queries regarding these Terms &amp; Conditions, please contact:</p>
            <div className="ps-6 mt-4 text-gray-800 space-y-1">
              <p className="font-bold">Princeton Convention Centre</p>
              <p>LB Nagar, Hyderabad, Telangana, India</p>
              <p>📧 <a className="text-blue-600 hover:underline" href="mailto:info@princetonconvention.com">info@princetonconvention.com</a></p>
              <p>📞 <a className="text-blue-600 hover:underline" href="tel:+919949736693">+91 99497 36693</a></p>
              <p>🌐 <a className="text-blue-600 hover:underline" href="https://www.princetonconvention.com" target="_blank" rel="noopener noreferrer">www.princetonconvention.com</a></p>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="leading-relaxed text-gray-800">
              At Princeton Convention Centre, we take pride in being Hyderabad’s most versatile event destination offering a blend of world-class infrastructure, personalized service, and transparent policies. By booking with us, you agree to uphold these terms and help us deliver exceptional, memorable, and well-organized experiences for every guest.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
