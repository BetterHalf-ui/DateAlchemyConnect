import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Date Alchemy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our matchmaking services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Complete our membership application</li>
              <li>Participate in video consultations</li>
              <li>Communicate with our matchmakers</li>
            </ul>
            
            <p className="text-gray-700 mb-4">This may include:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Contact information (name, email, phone number)</li>
              <li>Demographic information (age, gender, occupation, education)</li>
              <li>Personal preferences and relationship goals</li>
              <li>Photos and profile information</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-6">
              We may automatically collect certain information about your device and usage patterns, including IP address, browser type, pages visited, and time spent on our website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Provide personalized matchmaking services</li>
              <li>Verify your identity and conduct background checks</li>
              <li>Facilitate introductions between compatible members</li>
              <li>Communicate about your matches and service updates</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">With Other Members</h3>
            <p className="text-gray-700 mb-4">
              We only share your profile information with pre-screened, compatible members. We only share your profile picture and WhatsApp number after obtaining your explicit consent for each introduction. We never share full names or other contact details.
            </p>



            <h3 className="text-xl font-semibold mt-6 mb-3">Legal Requirements</h3>
            <p className="text-gray-700 mb-6">
              We may disclose your information if required by law, court order, or government regulation, or to protect our rights, property, or safety.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your account and associated data at any time.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">International Transfers</h2>
            <p className="text-gray-700 mb-6">
              Your information may be transferred to and processed in countries other than Mauritius. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>The Date Alchemy</strong></p>
              <p className="text-gray-700 mb-2">Email: Betterhalf@frolic.mu</p>
              <p className="text-gray-700">Phone: +230 5459 1975</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}