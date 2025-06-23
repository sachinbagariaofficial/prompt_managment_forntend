import { usePrompt } from "@/context/PromptContext";
import { PropsTypes } from "@/lib/types";

const AdvancedControls = ({ theme, isDarkMode }: PropsTypes) => {
  const trackBase = isDarkMode ? "bg-black/20" : "bg-slate-200";

  const { promptData, setPromptData } = usePrompt();

  const handleAdvancedChange = (
    key: "temperature" | "topK" | "topP",
    value: string
  ) => {
    setPromptData((prev) => ({
      ...prev,
      toneStep: "",
      advancedStep: {
        ...prev.advancedStep,
        [key]: Number(value),
      },
    }));
  };

  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div
        className={`relative ${theme.card} rounded-3xl p-8 transition-all duration-500`}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">4</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl blur opacity-30"></div>
          </div>
          <div>
            <h2 className={`text-2xl font-bold ${theme.text.primary} mb-1`}>
              Advanced
            </h2>
            <p className={`${theme.text.accent}`}>Fine-tune AI parameters</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Temperature */}
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <label className={`${theme.text.primary} font-medium`}>
                Temperature
              </label>
              <div
                className={`${
                  isDarkMode ? "bg-black/30" : "bg-slate-200/50"
                } px-3 py-1 rounded-lg`}
              >
                <span className={`${theme.text.primary} font-mono text-sm`}>
                  {promptData.advancedStep.temperature}
                </span>
              </div>
            </div>
            <div className="relative">
              <div
                className={`w-full h-3 ${trackBase} rounded-full overflow-hidden`}
              >
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  style={{
                    width: `${
                      (promptData.advancedStep.temperature / 2) * 100
                    }%`,
                  }}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 animate-pulse" />
              <input
                type="range"
                min={0}
                max={2}
                step={0.1}
                onChange={(e) =>
                  handleAdvancedChange("temperature", e.target.value)
                }
                value={promptData.advancedStep.temperature}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <div
              className={`flex justify-between text-xs ${theme.text.muted} mt-2`}
            >
              <span>Balanced</span>
              <span>Creative</span>
            </div>
          </div>

          {/* Top-K */}
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <label className={`${theme.text.primary} font-medium`}>
                Top-K
              </label>
              <div
                className={`${
                  isDarkMode ? "bg-black/30" : "bg-slate-200/50"
                } px-3 py-1 rounded-lg`}
              >
                <span className={`${theme.text.primary} font-mono text-sm`}>
                  {promptData.advancedStep.topK}
                </span>
              </div>
            </div>
            <div className="relative">
              <div
                className={`w-full h-3 ${trackBase} rounded-full overflow-hidden`}
              >
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-teal-500 rounded-full"
                  style={{
                    width: `${(promptData.advancedStep.topK / 10) * 100}%`,
                  }}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-green-400/20 to-teal-500/20 animate-pulse delay-200" />
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={promptData.advancedStep.topK}
                onChange={(e) => handleAdvancedChange("topK", e.target.value)}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <div
              className={`flex justify-between text-xs ${theme.text.muted} mt-2`}
            >
              <span>Focused</span>
              <span>Wide Range</span>
            </div>
          </div>

          {/* Top-P */}
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <label className={`${theme.text.primary} font-medium`}>
                Top-P
              </label>
              <div
                className={`${
                  isDarkMode ? "bg-black/30" : "bg-slate-200/50"
                } px-3 py-1 rounded-lg`}
              >
                <span className={`${theme.text.primary} font-mono text-sm`}>
                  {promptData.advancedStep.topP.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="relative">
              <div
                className={`w-full h-3 ${trackBase} rounded-full overflow-hidden`}
              >
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                  style={{ width: `${promptData.advancedStep.topP * 100}%` }}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-purple-400/20 to-pink-500/20 animate-pulse delay-400" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={promptData.advancedStep.topP}
                onChange={(e) => handleAdvancedChange("topP", e.target.value)}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <div
              className={`flex justify-between text-xs ${theme.text.muted} mt-2`}
            >
              <span>Strict</span>
              <span>Flexible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedControls;
