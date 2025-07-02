import { usePrompt } from "@/context/PromptContext";
import { PropsTypes } from "@/lib/types";
import { useState } from "react";
import clipboardCopy from "clipboard-copy";

const PromptPreview = ({ theme, isDarkMode }: PropsTypes) => {
  const [showPromtResult, setShowPromtResult] = useState(false);
  const { promptData } = usePrompt();
  const [isLoading, setIsLoading] = useState(false);
  const [aiResposne, setAiResponse] = useState("");
  const [textCopied, setTextCopied] = useState(false);

  const generateText = async () => {
    try {
      if (promptData.purposeStep.length > 10) {
        setIsLoading(true);
        setShowPromtResult(false);

        const data = await fetch(
          "https://prompt-managment.onrender.com/prompt",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              prompt: promptData.purposeStep,
              temperature: promptData.advancedStep.temperature,
              top_p: promptData.advancedStep.topP,
              top_k: promptData.advancedStep.topK,
              context: promptData.contextStep || "",
              tone: promptData.toneStep,
            }),
          }
        );

        const response = await data.json();

        setIsLoading(false);
        setShowPromtResult(true);
        if (response.success === true) {
          setAiResponse(response.data.choices[0].message.content);
        } else {
          setAiResponse(
            "Due to high demand, we have reached the current token usage limit. Please try again in some time. We appreciate your patience!"
          );
        }
      } else {
        alert("Please enter prompt text greater than 10 characters");
      }
    } catch (err) {
      setIsLoading(false);
      console.error("Error while generating response", err);
    }
  };

  const copyPromtResponse = async () => {
    if (aiResposne.length > 0) {
      await clipboardCopy(aiResposne);
      setTextCopied(true);
      setTimeout(() => setTextCopied(false), 3000);
    }
  };

  return (
    <div>
      <div className="cursor-pointer p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-10 mb-12 w-fit mx-auto transition-transform hover:scale-105">
        <div className={`${theme.badge} rounded-full px-6 py-2`}>
          <button
            onClick={generateText}
            type="button"
            className={`${theme.text.secondary} text-sm sm:text-base`}
          >
            {isLoading ? "Loading..." : "Generate Text"}
          </button>
        </div>
      </div>

      {showPromtResult && (
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

          <div
            className={`relative ${theme.card} rounded-3xl p-6 sm:p-8 transition-all duration-500`}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2
                  className={`text-xl sm:text-2xl font-bold ${theme.text.primary} mb-1`}
                >
                  Live Preview
                </h2>
                <p className={`${theme.text.accent} text-sm sm:text-base`}>
                  Generated prompt output
                </p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={copyPromtResponse}
                  className={`w-full sm:w-auto px-4 py-2 ${
                    isDarkMode
                      ? "bg-white/10 hover:bg-white/20 border-white/20"
                      : "bg-slate-100 hover:bg-slate-200 border-slate-300"
                  } border rounded-xl ${
                    theme.text.primary
                  } text-sm transition-transform hover:scale-105`}
                >
                  {textCopied ? "Copied!" : "Copy"}
                </button>
                <button className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl text-white text-sm transition-transform hover:scale-105 shadow-lg">
                  Export
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              <div
                className={`${
                  isDarkMode ? "bg-black/30" : "bg-slate-100/50"
                } backdrop-blur-sm rounded-2xl p-4 pb-8 sm:p-6 sm:pb-10 border ${
                  isDarkMode ? "border-white/10" : "border-slate-200"
                }`}
              >
                <div
                  className={`space-y-4 ${
                    isDarkMode ? "text-white/80" : "text-slate-700"
                  } text-sm font-mono leading-relaxed`}
                >
                  {/* Purpose */}
                  <div>
                    <div className="text-blue-400 font-bold mb-2">
                      System Instructions:
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        isDarkMode
                          ? "text-white bg-white/5"
                          : "text-black bg-slate-200/30"
                      }`}
                    >
                      {promptData.purposeStep}
                    </div>
                  </div>

                  {/* Tone */}
                  {promptData.toneStep.length > 0 && (
                    <div>
                      <div className="text-purple-400 font-bold mb-2">
                        Communication Style:
                      </div>
                      <div
                        className={`capitalize ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        {promptData.toneStep}
                      </div>
                    </div>
                  )}

                  {/* Context */}
                  <div>
                    <div className="text-orange-400 font-bold mb-2">
                      Context Management:
                    </div>
                    <div
                      className={`capitalize ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {promptData.contextStep.replace(/-/g, " ")}
                    </div>
                  </div>

                  {/* Model Params */}
                  <div>
                    <div className="text-green-400 font-bold mb-2">
                      Model Parameters:
                    </div>
                    <div
                      className={`${
                        isDarkMode ? "text-white" : "text-black"
                      } capitalize`}
                    >
                      <div>
                        • Temperature: {promptData.advancedStep.temperature}
                      </div>
                      <div>• Top-K: {promptData.advancedStep.topK}</div>
                      <div>• Top-P: {promptData.advancedStep.topP}</div>
                    </div>
                  </div>

                  {/* AI Output */}
                  <div>
                    <div
                      className={`font-bold mb-2 ${
                        isDarkMode ? "text-[#00e8ff]" : "text-black"
                      }`}
                    >
                      Generated AI Response:
                    </div>
                    <div
                      className={`p-3 rounded-lg capitalize max-h-[400px] overflow-y-auto ${
                        isDarkMode
                          ? "text-white bg-white/5"
                          : "text-black bg-slate-200/30"
                      }`}
                    >
                      {aiResposne}
                    </div>
                  </div>
                </div>

                {/* Footer Indicator */}
                <div
                  className={`absolute bottom-2 right-4 flex items-center gap-2 ${theme.text.accent} text-xs sm:text-sm`}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptPreview;
