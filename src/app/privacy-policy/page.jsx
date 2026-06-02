import React from 'react'
export const metadata = {
  title: 'Princeton Convention Center - Privacy Policy',
  description: 'Learn about how Princeton Convention Centre, LB Nagar collects, uses, and protects your personal information when you visit our website or use our services.',
    alternates: {
      canonical: "https://princetonconvention.com/privacy-policy/",
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
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <p className="leading-relaxed text-gray-800">
            Welcome to <span className="font-bold">Princeton Convention Centre, LB Nagar</span>. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, make an inquiry, or engage with our event and hospitality services.
          </p>

          {/* 1. Information We Collect */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            <p className="leading-relaxed text-gray-800">
              We collect information to provide a seamless experience when you interact with us, whether you’re booking an event, attending one, or browsing our website.
            </p>

            <h6 className="text-xl font-bold mt-6">a. Personal Information:</h6>
            <p className="leading-relaxed text-gray-800">When you submit an inquiry, request a quote, or book a hall, we may collect:</p>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>Name, phone number, and email address</li>
              <li>Company or organization name (for corporate events)</li>
              <li>Event type, date, and guest count</li>
              <li>Billing and payment details (where applicable)</li>
            </ul>

            <h6 className="text-xl font-bold mt-6">b. Automatically Collected Data:</h6>
            <p className="leading-relaxed text-gray-800">When you visit our website, we may gather limited technical data such as:</p>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>Browser type, operating system, and IP address</li>
              <li>Pages viewed and duration of visit</li>
              <li>Device identifiers and location (if permitted by your browser)</li>
            </ul>

            <h6 className="text-xl font-bold mt-6">c. Cookies and Tracking:</h6>
            <p className="leading-relaxed text-gray-800">
              Cookies help us personalize your browsing experience, remember your preferences, and improve site performance. You can control or disable cookies through your browser settings.
            </p>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            <p className="leading-relaxed text-gray-800">
              Your information helps us deliver an exceptional experience—both online and on-site. Specifically, we use it to:
            </p>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>Respond to inquiries and event booking requests</li>
              <li>Process payments and manage reservations</li>
              <li>Communicate event details, confirmations, and updates</li>
              <li>Improve our website and customer experience</li>
              <li>Share promotional content, special offers, or event updates (only with your consent)</li>
            </ul>
            <p className="leading-relaxed text-gray-800">
              Our goal is to provide <span className="font-bold">personalized, reliable, and efficient service</span>, consistent with our brand promise of “Luxury with Value”.
            </p>
          </div>

          {/* 3. Sharing and Disclosure */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Sharing and Disclosure</h2>
            <p className="leading-relaxed text-gray-800">
              We do <span className="font-bold">not</span> sell or rent your data. <br />
              We may share limited information with trusted third parties who help us operate our business, including:
            </p>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>Payment gateways and IT infrastructure providers</li>
              <li>Event vendors (e.g., décor, sound, or catering partners) strictly for service coordination</li>
              <li>Legal or regulatory authorities, if required by law</li>
            </ul>
            <p className="leading-relaxed text-gray-800">
              All partners are contractually bound to maintain confidentiality and use your information solely for agreed purposes.
            </p>
          </div>

          {/* 4. Data Security */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security</h2>
            <p className="leading-relaxed text-gray-800">
              Princeton Convention Centre employs industry-standard security protocols to protect your data, including:
            </p>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>Encrypted communications (SSL) on our website</li>
              <li>Restricted access to sensitive data</li>
              <li>Regular system updates and audits</li>
            </ul>
            <p className="leading-relaxed text-gray-800">
              While we take every reasonable precaution, no digital transmission or storage method is 100% secure. You acknowledge this risk when using our website or sharing information digitally.
            </p>
          </div>

          {/* 5. Your Rights and Choices */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Your Rights and Choices</h2>
            <p className="leading-relaxed text-gray-800">You have the right to:</p>
            <ul className="list-disc ps-6 space-y-2 leading-relaxed text-gray-800">
              <li>Access and correct your personal information</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Request deletion of your data, subject to legal or contractual obligations</li>
            </ul>
            <p className="leading-relaxed text-gray-800">
              To exercise these rights, contact us at{' '}
              <a className="font-bold text-blue-600 hover:underline" href="mailto:info@princetonconvention.com">
                info@princetonconvention.com
              </a>{' '}
              or call us at{' '}
              <a className="font-bold text-blue-600 hover:underline" href="tel:+919949736693">
                +91 99497 36693
              </a>.
            </p>
          </div>

          {/* 6. Data Retention */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Data Retention</h2>
            <p className="leading-relaxed text-gray-800">
              We retain personal data only for as long as necessary to fulfill the purpose it was collected for such as event coordination, billing, or legal compliance.
            </p>
            <p className="leading-relaxed text-gray-800">Once data is no longer required, it is securely deleted or anonymized.</p>
          </div>

          {/* 7. Third-Party Links */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Third-Party Links</h2>
            <p className="leading-relaxed text-gray-800">
              Our website may include links to external sites (e.g., event vendors, partner hotels). Princeton Convention Centre is{' '}
              <span className="font-bold">not responsible</span> for the privacy practices or content of these third-party websites. We encourage you to review their privacy policies before engaging with them.
            </p>
          </div>

          {/* 8. Children’s Privacy */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Children’s Privacy</h2>
            <p className="leading-relaxed text-gray-800">
              Our services are intended for adults and organizations. We do not knowingly collect or store personal information from children under 18. If we become aware of such data, we will promptly delete it.
            </p>
          </div>

          {/* 9. Updates to This Policy */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Updates to This Policy</h2>
            <p className="leading-relaxed text-gray-800">
              We may update this Privacy Policy periodically to reflect changes in technology, law, or our practices. The updated version will be posted on our website with a revised “Last Updated” date.
            </p>
          </div>

          {/* 10. Contact Us */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
            <p className="leading-relaxed text-gray-800">For any questions, requests, or feedback regarding this Privacy Policy, please contact:</p>
            <p className="font-bold text-gray-800">Princeton Convention Centre</p>
            <p className="text-gray-800">LB Nagar, Hyderabad, Telangana, India</p>
            <p>
              <a className="text-blue-600 hover:underline" href="mailto:info@princetonconvention.com">
                info@princetonconvention.com
              </a>
            </p>
            <p>
              <a className="text-blue-600 hover:underline" href="https://www.princetonconvention.com/" target="_blank" rel="noopener noreferrer">
                https://www.princetonconvention.com/
              </a>
            </p>
            <p>
              <a className="text-blue-600 hover:underline" href="tel:+919949736693">
                +91 99497 36693
              </a>
            </p>
          </div>

          {/* Commitment */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Commitment to Privacy and Trust</h2>
            <p className="leading-relaxed text-gray-800">
              At Princeton, we believe that every celebration, conference, and gathering deserves trust, transparency, and respect.
            </p>
            <p className="leading-relaxed text-gray-800">
              Our promise extends beyond seamless event management — it includes the <span className="font-bold">responsible care of your data</span> every step of the way.
            </p>
          </div>

          {/* Optional last updated line */}
          <p className="mt-12 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </div>
  )
}

export default Page
