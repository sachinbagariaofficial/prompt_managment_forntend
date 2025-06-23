import { useState } from "react";

export function useCopyToClipboard() {
    const [copied, setCopied] = useState(false);

    const copyText = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
            setCopied(false);
        }
    };

    return { copyText, copied };
}
