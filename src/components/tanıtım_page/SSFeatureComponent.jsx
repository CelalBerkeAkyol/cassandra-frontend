import {
  ChartBarIcon,
  CpuChipIcon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Economics and Finance Fundamentals",
    description:
      "Understanding concepts in Economics, Finance, Investment and interpreting data",
    icon: CalculatorIcon,
  },
  {
    name: "Data Science",
    description:
      "Data collection, cleaning, feature discovery and visualization using Python.",
    icon: ChartBarIcon,
  },
  {
    name: "Artificial Intelligence",
    description:
      "Creating artificial intelligence models according to your needs with Machine Learning and Deep Learning.",
    icon: CpuChipIcon,
  },
];

export default function SSFeatureComponent() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto">
          <div className="lg:pt-4">
            <div className="text-center mx-auto max-w-3xl mb-12">
              <h2 className="text-base/7 font-semibold text-primary">
                What will you learn?
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                A Different Perspective on Investment
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                You can create your own artificial intelligence models for your
                investment decisions and discover hidden financial data through
                data analysis.
              </p>
            </div>
            <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <feature.icon
                        className="h-8 w-8 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <dt className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.name}
                  </dt>
                  <dd className="text-base text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
