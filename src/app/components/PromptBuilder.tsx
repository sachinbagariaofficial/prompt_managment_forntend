"use client";
import { useState } from "react";
import PurposeInput from "./PurposeInput";
import ToneSelector from "./ToneSelector";
import AdvancedControls from "./AdvancedControls";
import ContextHandling from "./ContextHandling";
import PromptPreview from "./PromptPreview";
import { theme } from "@/lib/utils";

const PromptBuilder = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <div
      className={`min-h-screen ${currentTheme.bg} relative overflow-hidden transition-all duration-500`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div
          className={`absolute top-20 left-20 w-72 h-72 ${currentTheme.glows.blue} rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-20 right-20 w-96 h-96 ${currentTheme.glows.purple} rounded-full blur-3xl animate-pulse delay-1000`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 ${currentTheme.glows.indigo} rounded-full blur-3xl animate-pulse delay-500`}
        ></div>

        {/* Animated grid lines */}
        <div
          className={`absolute inset-0 isDarkMode  ${
            isDarkMode ? "opacity-80" : "opacity-100"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              isDarkMode ? "bg-white/5" : "bg-slate-200/30"
            }`}
            style={{
              backgroundImage: `linear-gradient(${
                isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(148,163,184,0.1)"
              } 1px, transparent 1px), linear-gradient(to right, ${
                isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(148,163,184,0.1)"
              } 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Moving gradient lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-moveRight"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-500/50 to-transparent animate-moveLeft"></div>
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent animate-moveDown"></div>
        <div className="absolute right-0 bottom-0 w-px h-full bg-gradient-to-t from-transparent via-pink-500/50 to-transparent animate-moveUp"></div>
      </div>

      <div className="absolute top-2 sm:top-4 right-6 z-20">
        <button
          onClick={toggleTheme}
          className={`group relative p-3 ${currentTheme.card} rounded-2xl transition-all duration-300 hover:scale-105`}
        >
          <div className="flex items-center gap-2">
            {isDarkMode ? (
              <>
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">☀️</span>
                </div>
                <span
                  className={`${currentTheme.text.primary} text-sm font-medium`}
                >
                  Light
                </span>
              </>
            ) : (
              <>
                <div className="w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🌙</span>
                </div>
                <span
                  className={`${currentTheme.text.primary} text-sm font-medium`}
                >
                  Dark
                </span>
              </>
            )}
          </div>
        </button>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-16 mt-7 sm:mt-0">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <div className={`${currentTheme.badge} rounded-full px-6 py-2`}>
              <span className={`${currentTheme.text.secondary} font-medium`}>
                AI Configuration Studio
              </span>
            </div>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r ${
              isDarkMode
                ? "from-white via-blue-100 to-purple-200"
                : "from-slate-900 via-blue-900 to-purple-900"
            } bg-clip-text text-transparent mb-4`}
          >
            LLM Prompt Builder
          </h1>

          {/* Full text for small screens (mobile) */}
          <p
            className={`${currentTheme.text.secondary} text-base sm:text-lg md:hidden max-w-xl mx-auto leading-relaxed`}
          >
            Craft{" "}
            <strong
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } font-semibold`}
            >
              precision-engineered prompts
            </strong>{" "}
            with
            <strong
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } font-semibold`}
            >
              {" "}
              advanced AI parameters
            </strong>{" "}
            and
            <strong
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } font-semibold`}
            >
              {" "}
              follow the steps
            </strong>{" "}
            below to get your desired result.
          </p>

          {/* Shortened version for tablets/desktops */}
          <p
            className={`${currentTheme.text.secondary} text-lg hidden md:block max-w-xl mx-auto leading-relaxed`}
          >
            Create smarter prompts using advanced AI parameters — follow the
            steps below.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Configuration Panel */}
            <div className="xl:col-span-2 space-y-8">
              {/* First Row: Purpose + Tone */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <PurposeInput theme={currentTheme} isDarkMode={isDarkMode} />
                </div>
                <div className="lg:col-span-2">
                  <ToneSelector theme={currentTheme} isDarkMode={isDarkMode} />
                </div>
              </div>

              {/* Second Row: Context + Advanced */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <ContextHandling
                    theme={currentTheme}
                    isDarkMode={isDarkMode}
                  />
                </div>
                <div className="lg:col-span-2">
                  <AdvancedControls
                    theme={currentTheme}
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-1 xl:col-span-2">
              <PromptPreview theme={currentTheme} isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptBuilder;
