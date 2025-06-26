import { usePrompt } from "@/context/PromptContext";
import { PropsTypes } from "@/lib/types";
import { contextMethods } from "@/lib/utils";

const ContextHandling = ({ theme, isDarkMode }: PropsTypes) => {
  const { promptData, setPromptData } = usePrompt();

  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div
        className={`relative ${theme.card} rounded-3xl p-8 transition-all duration-500`}
      >
        {/* Heading Section (Step + Title + Subheading) */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div className="relative w-fit">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">3</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-30"></div>
          </div>
          <div className="flex flex-col">
            <h2
              className={`text-xl sm:text-2xl font-bold ${theme.text.primary} mb-1`}
            >
              Context Handling
            </h2>
            <p className={`${theme.text.accent} text-sm sm:text-base`}>
              Memory management strategy
            </p>
          </div>
        </div>

        {/* Method Selection Section */}
        <div className="mb-8">
          <h3
            className={`${theme.text.primary} font-medium mb-4 text-base sm:text-lg`}
          >
            Processing Method
          </h3>

          <div className="space-y-3">
            {contextMethods.map((method) => (
              <div
                key={method.value}
                onClick={() =>
                  setPromptData((prev) => ({
                    ...prev,
                    contextStep: method.value,
                  }))
                }
                className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  method.value === promptData.contextStep
                    ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/40"
                    : `${
                        isDarkMode
                          ? "bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30"
                          : "bg-slate-50/50 border-slate-200 hover:bg-slate-100/50 hover:border-slate-300"
                      }`
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div className="flex-1">
                    <div
                      className={`${theme.text.primary} font-semibold text-base sm:text-lg`}
                    >
                      {method.label}
                    </div>
                    <div className={`${theme.text.accent} text-sm`}>
                      {method.desc}
                    </div>
                  </div>
                  {method.value === promptData.contextStep && (
                    <div className="w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextHandling;
