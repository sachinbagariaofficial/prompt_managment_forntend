import { usePrompt } from "@/context/PromptContext";
import { PropsTypes } from "@/lib/types";
import { tones, toneSettingsMap } from "@/lib/utils";

const ToneSelector = ({ theme, isDarkMode }: PropsTypes) => {
  const { promptData, setPromptData } = usePrompt();

  const handleTone = (
    value: "professional" | "creative" | "technical" | "empathetic"
  ) => {
    setPromptData((prev) => ({
      ...prev,
      toneStep: value,
    }));

    const advanceDefault = toneSettingsMap[value];

    setPromptData((prev) => ({
      ...prev,
      advancedStep: advanceDefault,
    }));

    console.log("firs22t", value, advanceDefault);
  };

  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div
        className={`relative ${theme.card} rounded-3xl p-8 transition-all duration-500`}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">2</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-30"></div>
          </div>
          <div>
            <h2 className={`text-2xl font-bold ${theme.text.primary} mb-1`}>
              Select Tone
            </h2>
            <p className={`${theme.text.accent}`}>Choose communication style</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {tones.map((tone) => (
            <div
              key={tone.key}
              onClick={() =>
                handleTone(
                  tone.value as
                    | "professional"
                    | "creative"
                    | "technical"
                    | "empathetic"
                )
              }
              className={`group/tone relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                tone.value === promptData.toneStep
                  ? `bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/40`
                  : `${
                      isDarkMode
                        ? "bg-white/5 hover:bg-white/10 border-white/20 hover:border-white/40"
                        : "bg-slate-50/50 hover:bg-slate-100/50 border-slate-200 hover:border-slate-300"
                    }`
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{tone.icon}</span>
                <div>
                  <div className={`${theme.text.primary} font-semibold`}>
                    {tone.label}
                  </div>
                  <div className={`${theme.text.muted} text-sm`}>
                    {tone.desc}
                  </div>
                </div>
              </div>
              {tone.value === promptData.toneStep && (
                <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToneSelector;
