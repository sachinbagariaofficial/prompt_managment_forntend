import { usePrompt } from "@/context/PromptContext";
import { PropsTypes } from "@/lib/types";
import { tones, toneSettingsMap } from "@/lib/utils";
import Image from "next/image";

import DeadpoolIcon from "../../../public/deadpool.png";

const ToneSelector = ({ theme, isDarkMode }: PropsTypes) => {
  const { promptData, setPromptData } = usePrompt();

  const handleTone = (
    value: "professional" | "creative" | "deadpool" | "friendly"
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
  };

  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div
        className={`relative ${theme.card} rounded-3xl p-8 transition-all duration-500`}
      >
        {/* Step Heading Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="relative w-fit">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">2</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-30"></div>
          </div>

          <div className="flex flex-col">
            <h2
              className={`text-xl sm:text-2xl font-bold ${theme.text.primary} mb-1`}
            >
              Select Tone
            </h2>
            <p className={`${theme.text.accent} text-sm sm:text-base`}>
              Choose communication style
            </p>
          </div>
        </div>

        {/* Tone Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tones.map((tone) => (
            <div
              key={tone.key}
              onClick={() =>
                handleTone(
                  tone.value as
                    | "professional"
                    | "creative"
                    | "deadpool"
                    | "friendly"
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
                <span className="text-2xl">
                  {tone.value === "deadpool" ? (
                    <Image
                      src={DeadpoolIcon}
                      alt="Deadpool Icon"
                      width={40}
                      height={40}
                      className="inline-block"
                    />
                  ) : (
                    tone.icon
                  )}
                </span>
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
