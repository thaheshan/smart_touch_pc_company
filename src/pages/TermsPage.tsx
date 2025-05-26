import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Terms of Use</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: March 15, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using this website, you accept and agree to be bound by the
              terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials
              (information or software) on Exclusive's website for personal, non-commercial
              transitory viewing only.
            </p>
            <p className="text-gray-600 mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
            <p className="text-gray-600 mb-4">
              To access certain features of the website, you may be required to register for an account.
              You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain and update your information</li>
              <li>Keep your account credentials secure</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Product Information</h2>
            <p className="text-gray-600 mb-4">
              We strive to provide accurate product descriptions and pricing. However, we do
              not warrant that product descriptions or prices are accurate, complete, reliable,
              current, or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Ordering and Payment</h2>
            <p className="text-gray-600 mb-4">
              When placing an order, you agree to provide current, complete, and accurate
              purchase and account information. We reserve the right to refuse or cancel any
              order for any reason.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Shipping and Delivery</h2>
            <p className="text-gray-600 mb-4">
              Delivery times are estimates only. We are not responsible for delays beyond our
              control. Risk of loss and title for items purchased pass to you upon delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Returns and Refunds</h2>
            <p className="text-gray-600 mb-4">
              Our return and refund policies are outlined in our separate Return Policy
              document. By making a purchase, you agree to these policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The materials on Exclusive's website are provided on an 'as is' basis.
              Exclusive makes no warranties, expressed or implied, and hereby disclaims and
              negates all other warranties including, without limitation, implied warranties
              or conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Limitations</h2>
            <p className="text-gray-600 mb-4">
              In no event shall Exclusive or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due to
              business interruption) arising out of the use or inability to use the materials
              on Exclusive's website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <div className="text-gray-600">
              <p>Email: smarttouchpc@gmail.com</p>
              <p>Phone: +94-75-664-5486</p>
              <p>Address: 111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;