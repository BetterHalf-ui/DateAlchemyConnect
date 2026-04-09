import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RebrandBanner from "@/components/layout/rebrand-banner";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <RebrandBanner />
      <Header />
      
      <section className="py-20 bg-white" style={{ paddingTop: '120px' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-10">Last Updated: April 9, 2026</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              The Date Alchemy ("we," "our," or "us") provides bespoke matchmaking services. We are committed to the highest standards of data privacy across our operations in Mauritius, Singapore, and Luxembourg.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold mt-10 mb-4">1. Data Controller &amp; Contact Information</h2>
            <p className="text-gray-700 mb-4">The Date Alchemy acts as the "Data Controller" for your information.</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li><strong>Email:</strong> hello@thedatealchemy.com</li>
              <li><strong>Data Protection Officer (DPO):</strong> Celine Delacharlerie</li>
              <li><strong>Phone/WhatsApp:</strong> +230 5459 1975</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold mt-10 mb-4">2. Legal Basis for Processing</h2>
            <p className="text-gray-700 mb-4">Under GDPR (EU) and PDPA (Singapore), we must have a legal reason to use your data:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Contractual Necessity:</strong> To provide the matchmaking service you signed up for.</li>
              <li><strong>Explicit Consent:</strong> For processing "Special Category Data" (religion, ethnicity, relationship preferences) and for sending marketing materials.</li>
              <li><strong>Legal Obligation:</strong> To verify identities and prevent fraud/safety risks.</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold mt-10 mb-4">3. What We Collect &amp; Why</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Identity &amp; Contact:</strong> Name, ID for verification, WhatsApp number, and email.</li>
              <li><strong>Special Category Data:</strong> Because we are a matchmaking service, we collect data regarding your values, beliefs, and preferences. By providing this, you explicitly consent to us using it for matching.</li>
              <li><strong>Multimedia:</strong> Photos and video consultation notes used solely for internal assessment.</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold mt-10 mb-4">4. International Data Transfers</h2>
            <p className="text-gray-700 mb-6">
              Your data may be transferred between Mauritius, Singapore, and Luxembourg. When we transfer data outside the European Economic Area (EEA) to Mauritius or Singapore, we ensure "Standard Contractual Clauses" are in place or that the destination country provides "Adequate Protection" as defined by the European Commission.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold mt-10 mb-4">5. Your Rights (The Global Standard)</h2>
            <p className="text-gray-700 mb-4">Regardless of where you live, we offer the following rights to all members:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Right to Access/Portability:</strong> Get a copy of your data.</li>
              <li><strong>Right to Rectification:</strong> Correct any errors in your profile.</li>
              <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> We will delete your data within 30 days of a request, unless legally required to keep it.</li>
              <li><strong>Right to Withdraw Consent:</strong> You may stop our processing of your data at any time (this will end your membership).</li>
              <li><strong>Right to Lodge a Complaint:</strong> You may contact the CNPD (Luxembourg), the PDPC (Singapore), or the Data Protection Office (Mauritius).</li>
            </ul>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold mt-10 mb-4">6. Third-Party Processors</h2>
            <p className="text-gray-700 mb-4">We use a "Privacy by Design" approach. Our primary processors are:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Fillout:</strong> For secure data intake (GDPR &amp; SOC2 compliant).</li>
              <li><strong>Airtable:</strong> For secure database management (Data encrypted at rest and in transit).</li>
            </ul>

            {/* Section 7 */}
            <h2 className="text-2xl font-bold mt-10 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal data only as long as you are an active member. Once you terminate your membership, we delete your personal data within 30 days, keeping only anonymized transaction records for financial auditing.
            </p>

            {/* Contact box */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-10">
              <p className="font-bold text-gray-900 mb-2">The Date Alchemy</p>
              <p className="text-gray-700 mb-1">Email: <a href="mailto:hello@thedatealchemy.com" className="underline">hello@thedatealchemy.com</a></p>
              <p className="text-gray-700">Phone/WhatsApp: +230 5459 1975</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
