import { Code, Settings, Archive, Flash } from "iconoir-react"; // o el paquete que uses

const HowItWorks = () => {
  return (
    <section
      id="features"
      className="py-10 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-6 px-4 py-2 bg-purple-50 text-purple-700 border border-purple-200 inline-flex items-center justify-center rounded-full text-sm font-medium">
            <Code className="w-3 h-3 mr-2" />
            Simple Integration
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your AI chatbot up and running in just a few simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Choose Your Model",
              description:
                "Select from Hugging Face, Replicate, or other AI providers with one click",
              icon: <Code className="w-6 h-6" />,
              color: "from-blue-500 to-cyan-500",
            },
            {
              step: "02",
              title: "Customize Parameters",
              description:
                "Fine-tune temperature, tone, and advanced settings with real-time preview",
              icon: <Settings className="w-6 h-6" />,
              color: "from-purple-500 to-pink-500",
            },
            {
              step: "03",
              title: "Copy the Code",
              description:
                "Get production-ready React components that update as you adjust parameters",
              icon: <Archive className="w-6 h-6" />,
              color: "from-green-500 to-emerald-500",
            },
            {
              step: "04",
              title: "Deploy & Scale",
              description:
                "Deploy your chatbot instantly with built-in analytics and monitoring",
              icon: <Flash className="w-6 h-6" />,
              color: "from-orange-500 to-red-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 flex justify-center flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200 rounded-xl"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}
              >
                {item.icon}
              </div>
              <div className="mb-4 flex  text-xs p-1 px-2 border border-gray-200 rounded-full font-bold tracking-wider text-gray-500">
                STEP {item.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
