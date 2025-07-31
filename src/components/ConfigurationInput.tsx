import { Input, Slider } from "antd";
import { Sparks } from "iconoir-react";
import { useStore } from "../store/zustandContext";

const ConfigurationInput = () => {
  const store = useStore();
  return (
    <div>
      <div className="w-full max-w-md space-y-4 flex space-x-1 items-start justify-start">
        <Sparks />
        <p className=" text-gray-700 font-medium   ">
          Configure the chatbot with the parameters you want
        </p>
      </div>
      <div className="w-full max-w-md  flex flex-col  items-start justify-start">
        <div className="w-full max-w-md space-y-4 ml-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Model
          </label>
          <Input
            data-cy="model-input"
            showCount
            maxLength={25}
            value={store.config.model}
            onChange={(e) => {
              store.setConfig({ ...store.config, model: e.target.value });
            }}
            placeholder="e.g. HuggingFaceTB/SmolLM3-3B"
            className="w-full"
            style={{ margin: "0px" }}
          />
          <p className="text-md text-gray-500 mt-1">
            The model will use the provider to generate the response
            Recommended: SmolLM3-3B
          </p>
        </div>
        {Object.entries(sliders).map(([key, value]) => (
          <div className="w-full max-w-md  p-3" key={key}>
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {key}
              </label>
              <span
                aria-label={`slider-value-${key}`}
                className="bg-blue-50 text-blue-700 px-2 rounded-full p-1"
              >
                {store.config[key]}
              </span>
            </div>
            <div data-cy={`slider-${key}`} className="w-full max-w-md">
              <Slider
                aria-label={`slider-${key}`}
                onChange={(val) => {
                  store.setConfig({ ...store.config, [key]: val });
                }}
                defaultValue={value.default}
                min={value.min}
                max={value.max}
                step={value?.step ? value?.step : 0.1}
                className="m-0"
                styles={{
                  track: {
                    background: "#1D4ED8",
                  },
                }}
                style={{ margin: "0px" }}
              />
            </div>
            <p className="text-md text-gray-500 mt-1">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfigurationInput;

const sliders = {
  temperature: {
    default: 0.7,
    max: 1,
    min: 0.1,
    step: 0.1,
    description: "Controls randomness in responses.",
  },
  max_tokens: {
    default: 400,
    max: 600,
    min: 100,
    step: 50,
    description: "Controls the maximum number of tokens in the response.",
  },
  top_p: {
    default: 1,
    max: 1,
    min: 0,
    step: 0.1,
    description: "Controls the probability of the top tokens being selected.",
  },
  frequency_penalty: {
    default: 0,
    max: 2,
    min: -2,
    step: 0.1,
    description: "Controls the frequency penalty of the tokens.",
  },
  timeout: {
    default: 30000,
    max: 60000,
    min: 1000,
    step: 1000,
    description: "Controls the timeout for the request in seconds.",
  },
};
