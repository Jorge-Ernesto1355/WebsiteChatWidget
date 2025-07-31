import { Github, Npm, Sparks } from "iconoir-react";
import React from "react";
import GmailIcon from "../icons/GmailIcon";
import { Divider } from "antd";

const Footer = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center py-5 space-y-2">
      <div className="flex">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Sparks className="w-5 h-5 text-white" color="#ffffff" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 ml-2">
          React Chat AI Widget
        </h3>
      </div>
      <p className="font-medium text-gray-700">
        Build and deploy AI chatbots with ease. Powered by the latest AI models
        from Hugging Face and Replicate
      </p>
      <div className="mt-5">
        <ul className="flex justify-center items-center space-x-4">
          {Object.entries(links).map(([_, value]) => (
            <li
              key={value.url}
              className="w-12 h-12 bg-gray-100  rounded-lg flex items-center justify-center"
            >
              <a href={value.url}>{value.icon}</a>
            </li>
          ))}
        </ul>
      </div>
      <Divider style={{ marginTop: "10px" }} />
      <p className="text-gray-600 text-center flex space-x-2">
        <a
          href="https://jorge-ernesto-portfolio.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          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 Made by{" "}
          <span className="text-blue-400 underline">Jorge Ernesto</span>
        </a>
        <span>
          © 2024 ChatCraft. All rights reserved. Built with ❤️ for developers.
        </span>
      </p>
    </div>
  );
};

export default Footer;

const links = {
  github: {
    url: "https://github.com/Jorge-Ernesto1355",
    icon: <Github className="w-5 h-5 " color="#6B6B6B" />,
  },
  gmail: {
    url: "mailto:jorgais.ernesto@gmail.com?subject=Consulta&body=Hola%2C%20me%20gustaría%20contactarte...",
    icon: <GmailIcon className="" color="#6B6B6B" />,
  },
  npm: {
    url: "https://www.npmjs.com/package/react-chat-ai-widget",
    icon: <Npm className="w-5 h-5 " color="#6B6B6B" />,
  },
};
