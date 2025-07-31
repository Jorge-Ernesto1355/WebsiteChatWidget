import { create } from "zustand";

export type useCase =
  | "customer-support"
  | "documentation"
  | "qa-bot"
  | "strict-compliance";
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

type config = {
  temperature: number;
  max_tokens: number;
  top_p: number;
  model: string;
  [key: string]: any;
};

type Direction = "right" | "left";
export type allowedProviders = "huggingface" | "replicate";
interface Store {
  title: string;
  direction: Direction;
  provider: allowedProviders;
  accessToken: string;
  config: config;
  questions: string;
  useCase: useCase | undefined;
  setTitle: (title: string) => void;
  setDirection: (direction: Direction) => void;
  setProvider: (provider: allowedProviders) => void;
  setConfig: (config: config) => void;

  setAccessToken: (token: string) => void;
  setUseCase: (useCase: useCase) => void;
  setquestions: (questions: string) => void;
}

export const useStore = create<Store>((set) => ({
  title: "AI assistant",
  direction: "left",
  provider: "huggingface",
  accessToken: "",
  config: {
    temperature: 0.7,
    max_tokens: 400,
    top_p: 1,
    model: "HuggingFaceTB/SmolLM3-3B",
    frequency_penalty: 0,
    timeout: 30000,
  },
  useCase: "customer-support",
  questions: initialCode,
  setTitle: (title: string) => set({ title }),
  setDirection: (direction: Direction) => set({ direction }),
  setProvider: (provider: allowedProviders) => set({ provider }),
  setAccessToken: (token: string) => set({ accessToken: token }),
  setConfig: (config: config) => set({ config }),
  setUseCase: (useCase: useCase) => set({ useCase }),
  setquestions: (questions: string) => set({ questions }),
}));
