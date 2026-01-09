
import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

interface CopyButtonProps {
  textToCopy: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-md transition-colors duration-200 ${
        copied
          ? 'bg-green-600/20 text-green-400'
          : 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-400 hover:text-white'
      }`}
      aria-label="Copy to clipboard"
    >
      {copied ? <CheckIcon className="w-5 h-5" /> : <CopyIcon className="w-5 h-5" />}
    </button>
  );
};
