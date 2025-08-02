import { Book } from "iconoir-react";
import { message, Select } from "antd";
import type { SelectProps } from "antd";
import { useStore, type useCase } from "../store/zustandContext";
import { ValidateQuestionsCode } from "../utils/validateCodeQuestions";
import { useEffect, useRef } from "react";

const assistantOptions: SelectProps["options"] = [
  {
    label: (
      <div>
        <div className="font-semibold">Customer Support</div>
        <div className="text-xs text-gray-500">
          Friendly, helpful support tone
        </div>
      </div>
    ),
    value: "customer-support",
    title: "Customer Support",
  },
  {
    label: (
      <div>
        <div className="font-semibold">Documentation</div>
        <div className="text-xs text-gray-500">Technical, concise answers</div>
      </div>
    ),
    value: "documentation",
    title: "Documentation",
  },
  {
    label: (
      <div>
        <div className="font-semibold">QA Bot</div>
        <div className="text-xs text-gray-500">
          Default Q&amp;A with open logic
        </div>
      </div>
    ),
    value: "qa-bot",
    title: "QA Bot",
  },
  {
    label: (
      <div>
        <div className="font-semibold">Strict Compliance</div>
        <div className="text-xs text-gray-500">
          Controlled, policy-aware responses
        </div>
      </div>
    ),
    value: "strict-compliance",
    title: "Strict Compliance",
  },
];

const initialCode = `[{
                    "question": "hello",
                    "answer": "hi",
                    "category": "general",
                    "confidence": 0.5
                  },
                  {
                    "question": "how are you?",
                    "answer": "good",
                    "category": "general",
                    "confidence": 0.8
  }]`;
const DataInput = () => {
  const setUseCase = useStore((store) => store.setUseCase);
  const useCase = useStore((store) => store.useCase);

  const setQuestions = useStore((store) => store.setquestions);
  const questionsRef = useRef<HTMLTextAreaElement>(null!);

  const handleClickQuestionsCode = () => {
    const code = questionsRef.current?.value;
    if (!code) {
      message.error("The code is empty");
      return;
    }
    const validQuestionsCode = ValidateQuestionsCode(code);
    if (!validQuestionsCode.isValid) {
      message.error(validQuestionsCode.error);
      return;
    }
    message.success("code submitted");
    setQuestions(code);
  };

  useEffect(() => {
    if (questionsRef.current) {
      questionsRef.current.value = initialCode;
    }
  }, []);

  return (
    <div className="ml-3 w-full">
      <div className="flex items-center gap-2 mb-4">
        <Book />
        <p className="text-sm text-gray-500 mt-1 ">Data Questions</p>
      </div>

      <div className="w-full max-w-md space-y-4">
        <label className="block  font-medium text-gray-700 mb-2">
          Use Case
        </label>
        <Select
          data-cy="use-case-select"
          defaultValue="customer-support"
          value={useCase}
          onChange={(value: useCase) => setUseCase(value)}
          options={assistantOptions}
          style={{ margin: "0px", width: "100%" }}
          placeholder="Customer Support"
          optionLabelProp="title"
        />
        <p className="text-md text-gray-500 mt-1">
          The use case of the chatbot, e.g. customer-support
        </p>
      </div>
      <div className="w-full max-w-xl mx-auto mt-6">
        <label
          htmlFor="code"
          className="block text-lg font-semibold text-gray-800 mb-3"
        >
          Questions
        </label>

        <textarea
          data-cy="questions-code"
          ref={questionsRef}
          id="code"
          placeholder="Inster your data object here.."
          className="w-6/7 h-80  text-sm font-mono text-gray-800 bg-gray-50 focus:outline-none resize-none placeholder-gray-400 border border-gray-200 rounded-lg p-2"
        />

        <p className="text-xs text-gray-500 mt-3">
          Make sure to include the keys <code>question</code> and{" "}
          <code>answer</code>. the keys <code>category</code> and{" "}
          <code>confidence</code> are optionals.
        </p>
        <button
          role="send-code"
          type="button"
          className="w-6/7  h-6 bg-blue-500 flex justify-center items-center font-medium   text-white rounded-md  hover:bg-blue-700 mt-3 mb-2"
          onClick={handleClickQuestionsCode}
        >
          Send Code
        </button>
      </div>
    </div>
  );
};

export default DataInput;
