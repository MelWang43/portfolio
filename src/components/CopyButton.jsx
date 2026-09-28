import { Copy , Check} from "lucide-react";
import { useState } from "react";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button className="btn-inline" onClick={handleCopy}>
      {copied ? <Check/> : <Copy/>}
    </button>
  );
}

export default CopyButton 