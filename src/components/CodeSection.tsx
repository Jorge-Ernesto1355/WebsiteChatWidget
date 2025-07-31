import { Terminal } from "iconoir-react";
import { useStore } from "../store/zustandContext";
import { CopyButton } from "./Copy";
import { Divider } from "antd";

const CodeSection = () => {
  const store = useStore();

  const providerAttr =
    store.provider === "huggingface" ? "huggingface" : "replicate";
  const providerReverse =
    store.provider === "huggingface" ? "replicate" : "huggingface";
  const tsxCode = `
<ChatWidget
      title="${store.title}"
      direction="${store.direction}" 
      ${providerAttr}="${store.accessToken}"
      // ${providerReverse}="YOUR_${providerReverse.toUpperCase()}_TOKEN" (use one or the other)
      config={{
          temperature: ${store.config.temperature || 0.7}
          max_tokens: ${store.config.max_tokens || 200}
          top_p: ${store.config.top_p}
          model: "${store.config.model || "HuggingFaceTB/SmolLM3-3B"}"
          frequency_penalty: "${store.config.frequency_penalty}
          timeout: ${store.config.timeout}
          }}
      data={{
        useCase: "${store.useCase}",
        questions: ${store.questions}
  }}
      chatStyles={{}}
      formStyles={{
        inputStyles: {},
        buttonStyles: {},
        formStyles: {},
      }}
/>
`;

  return (
    <div className="bg-gray-50/50 rounded-lg p-4 shadow-md border border-gray-200/50">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <div aria-label="code-icons" className="flex space-x-2">
            <div
              aria-label="red-code"
              className="w-3 h-3 rounded-full bg-red-400"
            ></div>
            <div
              aria-label="green-code"
              className="w-3 h-3 rounded-full bg-green-400"
            ></div>
            <div
              aria-label="blue-code"
              className="w-3 h-3 rounded-full bg-blue-400"
            ></div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Terminal className="w-4 h-4" />
            <span aria-label="name component" className="font-medium ">
              ChatWidget
            </span>
          </div>
        </div>
        <CopyButton textToCopy={tsxCode} />
      </div>
      <Divider style={{ marginTop: "10px" }} />
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-sm text-gray-300">
          <code
            aria-label="code"
            style={{ fontFamily: "Inter, monospace", fontSize: "1.1rem" }}
          >
            {tsxCode}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSection;
