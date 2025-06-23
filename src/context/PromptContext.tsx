"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the prompt structure
export type PromptData = {
  purposeStep: string;
  toneStep: string;
  contextStep: string;
  advancedStep: {
    temperature: number;
    topK: number;
    topP: number;
  };
};

// Define the context value type
type PromptContextType = {
  promptData: PromptData;
  setPromptData: React.Dispatch<React.SetStateAction<PromptData>>;
};

// Create context
const PromptContext = createContext<PromptContextType | null>(null);

// Default state for initialization
const defaultPromptData: PromptData = {
  purposeStep: "",
  toneStep: "",
  contextStep: "context-window",
  advancedStep: {
    temperature: 0.3,
    topK: 1,
    topP: 0.4,
  },
};

// Provider component
export const PromptProvider = ({ children }: { children: ReactNode }) => {
  const [promptData, setPromptData] = useState<PromptData>(defaultPromptData);

  return (
    <PromptContext.Provider value={{ promptData, setPromptData }}>
      {children}
    </PromptContext.Provider>
  );
};

// Custom hook for using the context
export const usePrompt = () => {
  const context = useContext(PromptContext);
  if (!context) {
    throw new Error("usePrompt must be used within a PromptProvider");
  }
  return context;
};
