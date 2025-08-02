import { Sparks } from "iconoir-react";

const Badge = () => {
  return (
    <div className="w-full flex justify-center items-center my-10">
      <div className="flex items-center px-4 py-2 bg-blue-50 text-blue-700 border border-blue-500 rounded-full transition-colors duration-200 hover:bg-blue-100">
        <Sparks className="w-4 h-4 mr-2 text-blue-600" />
        <span className="text-sm font-semibold tracking-tight">
          AI-Powered Development
        </span>
      </div>
    </div>
  );
};

export default Badge;
