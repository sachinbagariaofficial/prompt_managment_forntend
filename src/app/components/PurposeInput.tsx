import { usePrompt } from "@/context/PromptContext";
import { PropsTypes } from "@/lib/types";
import { useState } from "react";

const PurposeInput = ({ theme }: PropsTypes) => {
  const [inputText, setInputText] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const { setPromptData } = usePrompt();

  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div
        className={`relative ${theme.card} rounded-3xl p-8 transition-all duration-500`}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">1</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-30"></div>
          </div>
          <div>
            <h2 className={`text-2xl font-bold ${theme.text.primary} mb-1`}>
              Define Purpose
            </h2>
            <p className={`${theme.text.accent}`}>
              Describe your AI assistant primary objective
            </p>
          </div>
        </div>

        <div className="relative">
          <textarea
            name="prompt"
            onChange={(e) => setInputText(e.target.value)}
            onFocus={() => setIsTouched(true)}
            onBlur={() =>
              setPromptData((prev) => ({
                ...prev,
                purposeStep: inputText,
              }))
            }
            placeholder="Enter your detailed prompt description here..."
            className={`w-full h-40  max-h-60  min-h-30 ${theme.input} rounded-2xl p-6 focus:outline-none  transition-all duration-300`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span
            className={`text-sm ${
              isTouched && inputText.length < 10
                ? "text-red-900 font-medium  opacity-70"
                : `${theme.text.muted}`
            }`}
          >
            {isTouched && inputText.length < 10
              ? "Text should be greater than 10 characters"
              : "Craft your perfect prompt foundation"}
          </span>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className={`${theme.text.accent} text-sm font-mono`}>
              {inputText.length || 0}/1000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurposeInput;
