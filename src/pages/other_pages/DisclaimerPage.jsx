import React from "react";
import CustomNavbar from "../../components/header/CustomNavbar";

const DisclaimerPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomNavbar />
      <main className="flex-grow">
        <div className="bg-white py-2 mb-12 min-h-full">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="mx-auto my-4 sm:my-6 text-start bg-gradient-to-r from-sky-950 to-lime-950 text-white py-4 px-4 rounded-lg shadow-lg">
              <h1 className="text-2xl sm:text-3xl font-bold">
                Terms of Service
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-300">
                Terms and responsibilities applicable when using our site
              </p>
            </div>

            <div className="pt-3">
              <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600">
                <h2 className="text-xl font-bold mt-8 mb-3">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-6">
                  Anyone who visits or uses our site is deemed to have accepted
                  these terms of use. If you do not accept these terms, please
                  do not use the site. Your continued use of the services and
                  content offered on the site means that you also accept the
                  latest version of the terms that may be updated.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  2. Compliance with Laws
                </h2>
                <p className="mb-6">
                  When using the site, you agree to act in accordance with the
                  laws of the Republic of Turkey and relevant regulations. You
                  may not engage in any illegal, harmful activities that violate
                  the rights of others or disrupt the operation of the content.
                  Otherwise, all legal and criminal liability arising therefrom
                  belongs to you, and the site owner reserves the right to take
                  necessary legal steps.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  3. Content and Intellectual Property
                </h2>
                <p className="mb-6">
                  All articles, images, videos and other content published on
                  this blog site belong to the site owner or the author of the
                  content unless otherwise stated, and are protected by
                  copyright. Users may view the content on the site for personal
                  information purposes; however, they may not copy, reproduce,
                  distribute, publish elsewhere or use for commercial purposes
                  without prior written permission. Legal sanctions may apply in
                  case of unauthorized use of content.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  4. User Contributions
                </h2>
                <p className="mb-6">
                  General users cannot comment or submit any content on this
                  site. All content published on the site is created by the site
                  owner or persons authorized by him as authors. Therefore, only
                  the relevant authors are responsible for the content on the
                  site; there is no content shared by users.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  5. Fees and Membership
                </h2>
                <p className="mb-6">
                  Use of our site is free and no membership or subscription is
                  required to access content. There are no products or services
                  offered for sale on the site. Users can access all content on
                  the site without making any payment.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  6. Privacy and Cookies
                </h2>
                <p className="mb-6">
                  We value the privacy of your personal data. Please remember
                  that some of your personal data may be collected and cookies
                  may be used while using our site. For details on this subject,
                  you can review our Privacy Policy below. By continuing to use
                  the site, you also accept the data practices described in the
                  privacy policy.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  7. External Links
                </h2>
                <p className="mb-6">
                  There may be links on our site that redirect to other
                  websites. The site owner is not responsible for the content of
                  these external sites or their personal data processing
                  practices. When you click on an external link, the terms and
                  privacy policies of that site apply.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">8. Disclaimer</h2>
                <p className="mb-6">
                  While maximum care is taken for the accuracy, currency and
                  completeness of the content on the site, no express or implied
                  warranty is given regarding the accuracy or suitability of the
                  information provided for a particular purpose. Articles in
                  areas such as finance, economics and artificial intelligence
                  are for general information purposes only and do not
                  constitute investment, financial or legal advice in any way.
                  Therefore, the responsibility for decisions taken based on the
                  information on the site belongs to the user. The site owner
                  cannot be held responsible for any direct or indirect damages
                  that may arise from the use of the content on the site.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  9. Service Continuity
                </h2>
                <p className="mb-6">
                  The site owner does not make any commitment that the site will
                  work uninterruptedly or without errors. Access to the site may
                  be interrupted from time to time or content may change due to
                  technical failures, maintenance work or situations beyond our
                  control. The site owner does not guarantee that the site or
                  content will be accessible at any time.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  10. Right to Change
                </h2>
                <p className="mb-6">
                  The site owner reserves the right to make changes to this
                  Terms of Service at any time. Updated terms take effect
                  immediately upon publication on the site. It is the users' own
                  responsibility to periodically review the terms on the site
                  and be aware of changes. Continued use of the site after
                  changes means acceptance of the updated terms.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-3">
                  11. Applicable Law
                </h2>
                <p className="mb-6">
                  These terms and disputes arising from the use of the site will
                  be subject to the laws of the Republic of Turkey, and Turkish
                  courts will have jurisdiction in case of dispute.
                </p>

                <p className="text-sm text-gray-400 mt-8 pt-4 border-t border-gray-200">
                  Effective Date: April 26, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DisclaimerPage;
