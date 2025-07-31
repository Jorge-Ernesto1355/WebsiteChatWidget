import { useStore } from "../store/zustandContext";
import { ChatWidget } from "react-chat-ai-widget";

interface Question {
  question: string;
  answer: string;
  category: string;
  confidence: number;
}

const ChatWidgetLocal = () => {
  const store = useStore();

  const getProviders = (): any => {
    const providers = {};

    if (store.provider === "huggingface") {
      return {
        ...providers,
        huggingface: store.accessToken,
      };
    } else if (store.provider === "replicate") {
      return {
        ...providers,
        replicate: store.accessToken,
      };
    }
  };

  return (
    <ChatWidget
      title={store.title || "AI assistant"}
      direction={store.direction || "left"}
      data={{
        questions: JSON.parse(store.questions) as Question[],
        useCase: store.useCase,
      }}
      {...getProviders()}
      config={{
        ...store.config,
        max_new_tokens: 500,
        top_k: 0,
        min_new_tokens: 0,
        repetition_penalty: 1.1,
      }}
      chatStyles={{}}
      formStyles={{
        inputStyles: {},
        buttonStyles: {},
        formStyles: {},
      }}
    />
  );
};

export default ChatWidgetLocal;
