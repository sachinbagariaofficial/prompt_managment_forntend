import { usePrompt } from "@/context/PromptContext";
import { PropsTypes } from "@/lib/types";
import { useState } from "react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

const PromptPreview = ({ theme, isDarkMode }: PropsTypes) => {
  const [showPromtResult, setShowPromtResult] = useState(true);
  const { promptData } = usePrompt();
  const [isLoading, setIsLoading] = useState(false);
  const { copyText, copied } = useCopyToClipboard();
  const [aiResposne, setAiResponse] = useState("");

  const generateText = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        "https://",

        {
          method: "POST",
          body: JSON.stringify({
            text: "whta is ao",
          }),
        }
      );
      const resposne = await data.json();
      setAiResponse(resposne);
      setShowPromtResult(true);
    } catch (err) {
      setIsLoading(false);
      console.error("Error while generating the response", err);
    }
  };

  const copyPromtResponse = () => {
    copyText("hello");
  };

  return (
    <div>
      <div className=" cursor-pointer p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-15 mt-10 transition-all duration-300 hover:scale-105 col-span-1 xl:col-span-2 w-fit m-auto ">
        <div className={`${theme.badge} rounded-full px-6 py-2`}>
          <button
            onClick={generateText}
            className={`${theme.text.secondary} w-full`}
          >
            {isLoading ? "Loading..." : "Generate Text"}
          </button>
        </div>
      </div>

      {showPromtResult && (
        <div className="group relative h-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div
            className={`relative ${theme.card} rounded-3xl p-8 transition-all duration-500 h-full`}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className={`text-2xl font-bold ${theme.text.primary} mb-1`}>
                  Live Preview
                </h2>
                <p className={`${theme.text.accent}`}>
                  Generated prompt output
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={copyPromtResponse}
                  className={`px-4 py-2 ${
                    isDarkMode
                      ? "bg-white/10 hover:bg-white/20 border-white/20"
                      : "bg-slate-100 hover:bg-slate-200 border-slate-300"
                  } border rounded-xl ${
                    theme.text.primary
                  } text-sm transition-all duration-300 hover:scale-105`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl text-white text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                  Export
                </button>
              </div>
            </div>

            <div className="relative">
              <div
                className={`${
                  isDarkMode ? "bg-black/30" : "bg-slate-100/50"
                } backdrop-blur-sm rounded-2xl p-6 border ${
                  isDarkMode ? "border-white/10" : "border-slate-200"
                } `}
              >
                <div
                  className={`space-y-4 ${
                    isDarkMode ? "text-white/80" : "text-slate-700"
                  } text-sm font-mono leading-relaxed`}
                >
                  <div>
                    <div className="text-blue-400  font-bold mb-2">
                      System Instructions:
                    </div>
                    <div
                      className={`${
                        isDarkMode
                          ? "text-white bg-white/5"
                          : "text-black bg-slate-200/30"
                      } p-3 rounded-lg`}
                    >
                      {promptData.purposeStep}
                    </div>
                  </div>
                  <div>
                    <div className="text-purple-400  font-bold ">
                      Communication Style:
                    </div>
                    <div
                      className={`${
                        isDarkMode ? "text-white" : "text-black"
                      } capitalize`}
                    >
                      {promptData.toneStep}
                    </div>
                  </div>

                  <div>
                    <div className="text-orange-400  font-bold ">
                      Context Management:
                    </div>
                    <div
                      className={`${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {promptData.contextStep.split("-").join(" ")}
                    </div>
                  </div>
                  <div>
                    <div className="text-green-400  font-bold">
                      Model Parameters:
                    </div>
                    <div
                      className={`${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      <div>
                        • Temperature: {promptData.advancedStep.temperature}
                      </div>
                      <div>• Top-K: {promptData.advancedStep.temperature}</div>
                      <div>• Top-P:{promptData.advancedStep.temperature}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div
                      className={`${
                        isDarkMode ? "text-[#00e8ff]" : "text-black"
                      } font-bold mb-2 `}
                    >
                      Generated AI Response:
                    </div>
                    <div
                      className={`${
                        isDarkMode
                          ? "text-white bg-white/5"
                          : "text-black bg-slate-200/30"
                      } p-3 rounded-lg`}
                    >
                      {aiResposne}
                    </div>
                  </div>
                </div>

                {/* Animated gradient overlay */}
                {/* <div
              className={`absolute inset-0 rounded-2xl ${
                isDarkMode
                  ? "bg-gradient-to-t from-black/50"
                  : "bg-gradient-to-t from-white/50"
              } via-transparent to-transparent pointer-events-none`}
            ></div> */}
              </div>

              {/* Floating indicators */}
              <div
                className={`absolute bottom-4 right-4 flex items-center gap-4 ${theme.text.accent} text-sm`}
              >
                <div className="flex items-center gap-2">
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
