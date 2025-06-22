import { PropsTypes } from "@/lib/types";

const PromptPreview = ({ theme, isDarkMode }: PropsTypes) => {
  return (
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
            <p className={`${theme.text.accent}`}>Generated prompt output</p>
          </div>
          <div className="flex gap-3">
            <button
              className={`px-4 py-2 ${
                isDarkMode
                  ? "bg-white/10 hover:bg-white/20 border-white/20"
                  : "bg-slate-100 hover:bg-slate-200 border-slate-300"
              } border rounded-xl ${
                theme.text.primary
              } text-sm transition-all duration-300 hover:scale-105`}
            >
              Copy
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
            } h-80 overflow-hidden`}
          >
            <div
              className={`space-y-4 ${
                isDarkMode ? "text-white/80" : "text-slate-700"
              } text-sm font-mono leading-relaxed`}
            >
              <div className="text-blue-400">System Instructions:</div>
              <div
                className={`${
                  isDarkMode
                    ? "text-white/60 bg-white/5"
                    : "text-slate-600 bg-slate-200/30"
                } p-3 rounded-lg`}
              >
                Enter a purpose to see the generated prompt...
              </div>

              <div className="text-purple-400">Communication Style:</div>
              <div
                className={`${isDarkMode ? "text-white/60" : "text-slate-600"}`}
              >
                Professional, formal manner suitable for business contexts.
              </div>

              <div className="text-green-400">Model Parameters:</div>
              <div
                className={`${isDarkMode ? "text-white/60" : "text-slate-600"}`}
              >
                <div>• Temperature: 0.7 (Balanced creativity)</div>
                <div>• Top-K: 40 (Moderate diversity)</div>
                <div>• Top-P: 0.9 (High flexibility)</div>
              </div>

              <div className="text-orange-400">Context Management:</div>
              <div
                className={`${isDarkMode ? "text-white/60" : "text-slate-600"}`}
              >
                Fixed context window of 4096 tokens...
              </div>
            </div>

            {/* Animated gradient overlay */}
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-t from-black/50"
                  : "bg-gradient-to-t from-white/50"
              } via-transparent to-transparent pointer-events-none`}
            ></div>
          </div>

          {/* Floating indicators */}
          <div
            className={`absolute bottom-4 right-4 flex items-center gap-4 ${theme.text.accent} text-sm`}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live</span>
            </div>
            <span>~847 tokens</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptPreview;
