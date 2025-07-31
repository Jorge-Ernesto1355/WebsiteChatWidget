const HeroSection = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            title="build ai chatbots"
            className="text-4xl lg:text-6xl font-bold text-gray-900  mb-6"
          >
            Build AI Chatbots
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              In Minutes
            </span>
          </span>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Create personalized AI chatbots with Hugging Face and Replicate.
            <br className="hidden sm:block" />
            Copy, paste, and deploy with real-time preview and advanced
            customization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
