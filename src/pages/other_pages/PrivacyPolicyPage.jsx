import React from "react";
import CustomNavbar from "../../components/header/CustomNavbar";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomNavbar />
      <main className="flex-grow">
        <div className="bg-white py-2 mb-12 min-h-full">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="mx-auto my-4 sm:my-6 text-start bg-gradient-to-r from-sky-950 to-lime-950 text-white py-4 px-4 rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold">Privacy Policy</h1>
              <p className="mt-2 text-sm sm:text-base text-gray-300">
                Information about how your data is collected, processed and
                protected
              </p>
            </div>

            <div className=" pt-3">
              <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600">
                <p className="mb-6">
                  Cassandra ("We", "Us" or "Our") places great importance on the
                  privacy of our users. This privacy policy explains how data of
                  people who visit our website or use our services is collected,
                  processed and protected.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  1. Data Collected
                </h2>
                <p className="mb-6">
                  When you use our site or contact us, we may collect certain
                  personal data from you. This data may include identity and
                  contact information such as name, surname, email address that
                  you provide when filling out a contact form. Additionally,
                  some technical data about how you use our site may be
                  collected automatically. This data may include your IP
                  address, browser type, device information, visit history and
                  similar navigation information. Furthermore, as explained
                  below, some data is also obtained through cookies.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  2. Purposes of Data Use
                </h2>
                <p className="mb-6">
                  The collected data is used to improve our services, enhance
                  user experience, take security measures, and conduct marketing
                  and communication activities. Additionally, it can be
                  integrated with third-party analytics tools (e.g., Google
                  Analytics) for analytics and reporting studies.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  3. Cookies and Tracking Technologies
                </h2>
                <p className="mb-6">
                  Our website uses cookies to enhance user experience and for
                  analysis purposes. Through cookies, data such as browser type,
                  page view count, visit duration is collected. You have the
                  option to disable cookies from your browser settings; however,
                  some restrictions may occur in our services in this case.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  4. Third-Party Service Providers
                </h2>
                <p className="mb-6">
                  Some content and functions on our site are provided by
                  third-party service providers (e.g., advertising, analytics,
                  social media plugins). The privacy policies of these service
                  providers are available on their own sites. We cannot be held
                  responsible for the data processing methods of third parties.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  5. Data Storage and Security
                </h2>
                <p className="mb-6">
                  The collected data is stored for a certain period for legal
                  obligations and continuity of our services. Technical measures
                  such as encryption, access control and firewall are
                  implemented for the security of your data according to
                  industry standards.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">6. User Rights</h2>
                <p className="mb-6">
                  Users have the right to access, correct, delete or object to
                  the processing of data collected about them. To exercise these
                  rights, you can contact us at{" "}
                  <a
                    href="mailto:support@cassandra.com.tr"
                    className="text-primary hover:underline"
                  >
                    support@cassandra.com.tr
                  </a>
                  . Additionally, you can request additional information within
                  the framework of your rights under GDPR and KVKK.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  7. Changes to the Policy
                </h2>
                <p className="mb-6">
                  This privacy policy may be updated in accordance with legal
                  regulations or changes to be made in our services. When any
                  changes are made, the updated policy will be published on our
                  website.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">8. Contact</h2>
                <p className="mb-6">
                  For questions or requests regarding our privacy policy, please
                  contact us at{" "}
                  <a
                    href="mailto:support@cassandra.com.tr"
                    className="text-primary hover:underline"
                  >
                    support@cassandra.com.tr
                  </a>
                  .
                </p>

                <p className="border-t-1 border-gray-200 text-sm text-gray-400 mt-8 pt-4  ">
                  Last updated: April 26, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
