import { Check, Copy } from "iconoir-react";
import { useState } from "react";

type CopyButtonProps = {
  textToCopy: string;
};

export const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      aria-label="copy-button"
      onClick={handleCopy}
      className="flex items-center space-x-2 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-500" />
          <span className="text-green-500">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span aria-label="copy" className="text-gray-600 font-medium">
            Copy
          </span>
        </>
      )}
    </button>
  );
};
