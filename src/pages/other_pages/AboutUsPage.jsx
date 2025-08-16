import React from "react";
import { Spacer, Card, CardBody, Divider, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import CustomNavbar from "../../components/header/CustomNavbar";

const AboutUsPage = () => {
  return (
    <>
      <CustomNavbar />

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
          About Us
        </h1>

        {/* About Me Card */}
        <Card shadow="sm" className="p-6 bg-white">
          <CardBody>
            <p className="leading-relaxed">
              This platform was developed by{" "}
              <strong>Celal&nbsp;Berke&nbsp;Akyol</strong> and aims to provide
              data-driven, analytical content to investment enthusiasts.
            </p>

            <p className="pt-2 leading-relaxed">
              We believe that investment decisions should be based on{" "}
              <strong>evidence-based</strong> and
              <strong> scientific</strong> methods rather than intuition.
              Therefore, we analyze financial data using <strong>Python</strong>{" "}
              and modern data science tools.
            </p>

            <p className="pt-2 leading-relaxed">
              In our blog, you will find content prepared with{" "}
              <strong>Data Science</strong> and
              <strong> Machine Learning</strong> techniques across a wide range
              from macroeconomic indicators to company valuations, portfolio
              optimization to risk management.
            </p>

            <p className="pt-2 leading-relaxed">
              None of the content shared here constitutes{" "}
              <strong>investment advice</strong>. Please do your own research or
              consult a qualified advisor before making decisions.
            </p>
          </CardBody>
        </Card>

        <Spacer y={12} />
        {/* Nasıl Destek Olabilirsiniz Bölümü */}

        <Card shadow="sm" className="p-6 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 pl-2 ">
            How Can You Support Us?
          </h2>
          <CardBody>
            <ul className="list-disc p-2 space-y-2">
              <li> You can share our content.</li>

              <li>
                You can support us to produce more content by making a donation
                to the project.
              </li>

              <li>
                You can contribute to our content production by suggesting
                topics for blog posts.
              </li>
              <li>
                You can improve our content by sharing constructive comments.
              </li>
            </ul>
          </CardBody>
        </Card>

        <Spacer y={12} />
        {/* İletişim Bölümü */}

        <Card shadow="sm" className="p-6 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 ">Contact</h2>
          <CardBody>
            <p className="text-gray-700 text-lg">
              Developer email{" "}
              <a
                href="mailto:celalberke@cassandra.com.tr"
                className="text-blue-600 underline"
              >
                celalberke@cassandra.com.tr
              </a>
            </p>

            <p className="text-gray-700 text-lg flex items-center gap-2">
              Developer LinkedIn{" "}
              <a
                href="https://www.linkedin.com/in/celal-berke-akyol-389a3a216/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline flex items-center"
              >
                <Icon icon="mdi:linkedin" width="20" className="mr-1" /> Celal
                Berke Akyol
              </a>
            </p>
            <p className="text-gray-700 text-lg flex items-center gap-2">
              Website source code{" "}
              <a
                href="https://github.com/CelalBerkeAkyol/cassandra-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline flex items-center"
              >
                <Icon icon="mdi:github" width="20" className="mr-1" /> Cassandra
              </a>
            </p>
          </CardBody>
        </Card>
        <Spacer y={12} />
      </div>
    </>
  );
};

export default AboutUsPage;
