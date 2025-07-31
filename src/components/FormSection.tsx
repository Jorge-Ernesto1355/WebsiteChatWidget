import { Input, Select } from "antd";
import { useStore } from "../store/zustandContext";

import AccessTokenInput from "./AccessTokenInput";
import ConfigurationInput from "./ConfigurationInput";
import DataInput from "./DataInput";
import { Settings } from "iconoir-react";

const FormSection = () => {
  const store = useStore();

  const isMobile = window.innerWidth < 768;
  console.log(isMobile);
  return (
    <div
      className={`w-full h-full border border-gray-200 rounded-lg shadow-lg p-1 ${
        isMobile ? "mt-10 " : "ml-5"
      }`}
    >
      <div className="flex items-center space-x-3 mb-6 m-5">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <Settings className="w-4 h-4 text-white" />
        </div>
        <h3
          title="bot parameters"
          className="text-lg font-semibold text-gray-900 dark:text-white"
        >
          Bot Parameters
        </h3>
      </div>

      <section className="w-full flex flex-col justify-start items-start">
        <form className="w-full flex flex-col pl-10 items-start space-y-5">
          <div className="flex space-x-2 -mb-2">
            <div className="w-full max-w-md space-y-4">
              <label
                className="block font-medium text-gray-700 mb-2"
                aria-label="label-title"
              >
                Title
              </label>
              <Input
                aria-label="title-input"
                data-cy="title-input"
                placeholder="Title"
                maxLength={20}
                showCount
                onChange={(e) => store.setTitle(e.target.value)}
                value={store.title}
                style={{ margin: "0px" }}
              />
              <p className="text-sm text-gray-500 mt-1">
                will show in the header of chat widget
              </p>
            </div>

            <div className="w-full max-w-md space-y-4">
              <label className="block font-medium text-gray-700 mb-2">
                Direction
              </label>
              <Select
                aria-label="Chat Direction"
                data-cy="direction-select"
                defaultValue={store.direction || "left"}
                placeholder="Left or Right"
                value={store.direction}
                onChange={(value) => store.setDirection(value)}
                style={{ margin: "0px", width: "90%" }}
                options={[
                  { value: "left", label: "Left" },
                  { value: "right", label: "Right" },
                ]}
              />
              <p className="text-sm text-gray-500 mt-1">
                Directions what side of the screen should display the chat
                widget
              </p>
            </div>
          </div>

          <div className="w-full max-w-md space-y-4">
            <label className="block font-medium text-gray-700 mb-2">
              Provider
            </label>
            <Select
              aria-label="AI Provider"
              data-cy="provider-select"
              defaultValue={store.provider || "huggingface"}
              placeholder="huggingface or replicate"
              value={store.provider}
              onChange={(value) => store.setProvider(value)}
              style={{ margin: "0px", width: "100%" }}
              options={[
                { value: "huggingface", label: "Huggingface" },
                { value: "replicate", label: "Replicate" },
              ]}
            />
            <p className="text-sm text-gray-500 mt-1">
              Provider to use for the AI model, either Huggingface or Replicate
            </p>
          </div>

          <AccessTokenInput />
          <ConfigurationInput />
          <DataInput />
        </form>
      </section>
    </div>
  );
};

export default FormSection;
