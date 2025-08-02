import { Input, message } from "antd";
import React, { useState } from "react";
import { useStore } from "../store/zustandContext";
import { validateToken } from "../utils/validateToken";
import { Check, Copy } from "iconoir-react";

const AccessTokenInput = () => {
  const store = useStore();
  const [validationTokenError, setValidationTokenError] =
    useState<boolean>(false);

  const [pasted, setPasted] = useState<boolean>(false);

  const handlePasteClick = async () => {
    try {
      const clipBoard = await navigator.clipboard.readText();

      const validToken = validateToken(store.provider, clipBoard);

      if (validToken.isValid) {
        setPasted(true);
        setValidationTokenError(false);
        store.setAccessToken(clipBoard);
      } else setValidationTokenError(true);
    } catch (error) {
      message.error(
        "we could not read the clipboard content, please check your permissions"
      );
      setPasted(false);
      setValidationTokenError(true);
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validToken = validateToken(store.provider, e.target.value);
    if (validToken.isValid) {
      setValidationTokenError(false);
      store.setAccessToken(e.target.value);
    } else {
      store.setAccessToken(e.target.value);
      setValidationTokenError(true);
    }
  };

  const Suffix = (
    <button
      type="button"
      aria-label="Paste token from clipboard"
      onClick={(e) => {
        e.preventDefault();
        handlePasteClick();
      }}
      className={`flex items-center gap-1 transition-all duration-300`}
    >
      {pasted ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
      <span
        className={`ml-1 ${
          validationTokenError ? "text-red-500" : "text-gray-600 text-sm"
        }`}
      >
        paste
      </span>
    </button>
  );
  return (
    <div className="w-full max-w-md space-y-4 ">
      <label className="block  font-medium text-gray-700 mb-2">
        Access Token
      </label>
      <Input
        data-cy="access-token-input"
        placeholder={
          store.provider === "huggingface"
            ? "hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            : "r8_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }
        disabled={!store.provider}
        status={validationTokenError ? "error" : ""}
        suffix={Suffix}
        style={{ margin: "0px" }}
        onChange={onChangeInput}
        value={store.accessToken}
      />
      {validationTokenError ? (
        <p className="text-sm text-red-500 mt-1" aria-label="token-error">
          The token is invalid or does not match with the provider
          <span className="ml-1">{store.provider}</span>
        </p>
      ) : (
        <p className="text-sm text-gray-500 mt-1 ">
          Provide your access token for the selected provider
        </p>
      )}
    </div>
  );
};

export default AccessTokenInput;
