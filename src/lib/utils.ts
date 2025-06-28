export const theme = {
    dark: {
        bg: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
        text: {
            primary: "text-white",
            secondary: "text-white/70",
            muted: "text-white/50",
            accent: "text-white/60",
        },
        card: "bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15",
        input:
            "bg-black/20 border border-white/30 text-white placeholder-white/40 focus:bg-black/30 focus:border-blue-400/50",
        badge: "bg-black/20 backdrop-blur-sm",
        glows: {
            blue: "bg-blue-500/10",
            purple: "bg-purple-500/10",
            indigo: "bg-indigo-500/5",
        },
    },
    light: {
        bg: "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100",
        text: {
            primary: "text-slate-900",
            secondary: "text-slate-600",
            muted: "text-slate-500",
            accent: "text-slate-700",
        },
        card: "bg-white/80 backdrop-blur-xl border border-slate-200/50 hover:bg-white/90 shadow-lg",
        input:
            "bg-white/50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white/70 focus:border-blue-400",
        badge: "bg-white/80 backdrop-blur-sm",
        glows: {
            blue: "bg-blue-200/30",
            purple: "bg-purple-200/30",
            indigo: "bg-indigo-200/20",
        },
    },
};



export const tones = [
    {
        key: 0,
        value: "professional",
        label: "Professional",
        desc: "Formal",
        icon: "💼",
        color: "from-blue-500 to-cyan-500",
    },
    {
        key: 1,
        value: "creative",
        label: "Creative",
        desc: "Innovative",
        icon: "🎨",
        color: "from-purple-500 to-pink-500",
    },
    {
        key: 2,
        value: "deadpool",
        label: "Deadpool",
        desc: "Sarcastic",
        icon: "",
        color: "from-green-500 to-teal-500",
    },
    {
        key: 3,
        value: "friendly",
        label: "Friendly",
        desc: "Casual",
        icon: "😊",
        color: "from-yellow-400 to-pink-400",
    },
];

export const contextMethods = [
    {
        key: 0,
        value: "context-window",
        label: "Context Window",
        desc: "Fixed memory allocation for consistent processing",
        icon: "📊",

    },
    {
        key: 1,
        value: "sliding-window",
        label: "Sliding Window",
        desc: "Dynamic memory management with adaptive flow",
        icon: "🔄",

    },
];





export const toneSettingsMap = {
    professional: { temperature: 0.2, topK: 1, topP: 0.4 },
    creative: { temperature: 0.8, topK: 10, topP: 0.9 },
    deadpool: { temperature: 0.95, topK: 10, topP: 0.95 },
    friendly: { temperature: 0.7, topK: 6, topP: 0.75 },
};
