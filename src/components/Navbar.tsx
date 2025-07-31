import { Sparks } from "iconoir-react";

const Navbar = () => {
  return (
    <header className="border-b border-gray-200  bg-white/80  backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparks className="w-5 h-5 text-white" color="#ffffff" />
              </div>
              <span
                title="Chat widget"
                className="text-xl font-bold text-gray-900 "
              >
                Chat widget
              </span>
            </div>

            <nav className=" md:flex space-x-8">
              <a
                aria-label="features"
                href="#features"
                className="text-gray-600  hover:text-gray-900  transition-colors"
              >
                Features
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
