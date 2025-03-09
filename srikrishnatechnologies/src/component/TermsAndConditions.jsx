import React from "react";
import logo from '../assets/skt.png'
const TermsAndConditions = () => {
  return (
    <><nav className="bg-white shadow-md py-4">
    <div className="container mx-auto flex justify-center items-center">
      {/* Logo */}
      <div className="logo w-16 sm:w-24  cursor-pointer">
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
        Terms and Conditions
      </h1>
      <div className="space-y-6 text-gray-700">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to Sri krishna Technologies. By accessing or using our website,
          you agree to comply with and be bound by these Terms and Conditions.
          Please read them carefully before using our website or enrolling in any
          of our tech courses.
        </p>

        <h2 className="text-2xl font-semibold">2. User Registration</h2>
        <p>
          To access our courses and other services, you must register on the
          website. You must provide accurate and complete information during
          registration. You agree to update your information to keep it accurate.
        </p>

        <h2 className="text-2xl font-semibold">3. Course Enrollment</h2>
        <p>
          By enrolling in a course on our website, you agree to pay the stated
          course fees, if applicable. Course enrollment is only valid after
          payment confirmation (if required). Enrollment is subject to the course's
          availability and prerequisites.
        </p>

        <h2 className="text-2xl font-semibold">4. Payment and Billing</h2>
        <p>
          All payments for courses must be made using the available payment
          methods on our platform. You agree to provide accurate payment details
          and authorize us to charge the applicable fees for the course you enroll in.
        </p>

        <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
        <p>
          All content provided on the website, including but not limited to course
          materials, images, and videos, is the property of Sri Krishna Technologies
          or its licensors. You may not copy, distribute, or modify any content
          without prior written consent.
        </p>

        <h2 className="text-2xl font-semibold">6. Code of Conduct</h2>
        <p>
          You agree to follow all community guidelines, including being respectful
          towards other users, instructors, and staff. Any inappropriate behavior,
          including harassment or the sharing of offensive content, may result in
          your account being suspended or terminated.
        </p>

        <h2 className="text-2xl font-semibold">7. Refund Policy</h2>
        <p>
          There is no refund provided. If you want you will get a demo class of 30 min before registering.
        </p>

        <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
        <p>
          Sri Krishna Technologies is not liable for any direct, indirect, incidental,
          special, or consequential damages arising out of the use or inability
          to use the website or its services.
        </p>

        <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
        <p>
          We reserve the right to modify or update these Terms and Conditions at
          any time. Any changes will be posted on this page with the updated
          revision date.
        </p>

        <h2 className="text-2xl font-semibold">10. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by the laws of India.
          Any disputes arising under these terms shall be resolved in the courts
          located in Andhra Pradesh.
        </p>

        <h2 className="text-2xl font-semibold">11. Contact Information</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at:
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

export default TermsAndConditions;
