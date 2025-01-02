import React from "react";
import logo from '../assets/skt.png'

const PrivacyPolicy = () => {
  return (
    <>
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-center items-center">
        {/* Logo */}
        <div className="logo w-16 sm:w-24 cursor-pointer">
          <img
            src={logo} // Replace with your logo URL
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Menu Links */}
        
      </div>
    </nav>
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Privacy Policy
      </h1>
      <div className="space-y-6 text-gray-700">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to Sri Krishna Technologies. We value your privacy and are committed
          to protecting your personal data. This Privacy Policy explains how we
          collect, use, and disclose your information when you use our website
          and services.
        </p>

        <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
        <p>
          We collect personal information such as your name, email address,
          phone number, and other relevant details when you register on our
          website, enroll in courses, or interact with our services.
        </p>

        <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6">
          <li>Provide and manage our courses and services</li>
          <li>Process payments and enrollments</li>
          <li>Improve the website and course offerings</li>
          <li>Communicate with you about your enrollment and course updates</li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share your data with
          third-party service providers (e.g., payment processors) to facilitate
          course enrollment, payments, and other services. We may also disclose
          your data if required by law.
        </p>

        <h2 className="text-2xl font-semibold">5. Data Security</h2>
        <p>
          We take reasonable steps to protect your personal information from
          unauthorized access or disclosure. However, no method of transmission
          over the Internet is 100% secure, and we cannot guarantee the absolute
          security of your data.
        </p>

        <h2 className="text-2xl font-semibold">6. Cookies</h2>
        <p>
          We use cookies to enhance your browsing experience. Cookies are small
          text files stored on your device to remember your preferences and
          analyze site usage. You can control cookie settings through your browser
          settings.
        </p>

        <h2 className="text-2xl font-semibold">7. Your Data Rights</h2>
        <p>
          Depending on your jurisdiction, you may have certain rights regarding
          your personal data, including the right to access, correct, delete, or
          restrict the use of your information. If you wish to exercise these
          rights, please contact us at the details provided below.
        </p>

        <h2 className="text-2xl font-semibold">8. Third-Party Websites</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these external sites.
        </p>

        <h2 className="text-2xl font-semibold">9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>

        <h2 className="text-2xl font-semibold">10. Contact Information</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>
          <strong>Email:</strong> srikrishnatechnologies09@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91 9491461500
        </p>
      </div>
    </section>
    </>
  );
};

export default PrivacyPolicy;
