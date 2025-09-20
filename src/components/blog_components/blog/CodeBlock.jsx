import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Icon } from "@iconify/react";

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Pre etiketinin altında direkt code etiketi olup olmadığını kontrol et
  const isDirectChildOfPre = node?.parent?.tagName === "pre";

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Kopyalama başarısız:", err);
    }
  };

  const codeString = String(children).replace(/\n$/, "");

  // Eğer pre etiketinin direkt altındaysa normal metin olarak göster
  if (isDirectChildOfPre) {
    return (
      <span
        style={{
          color: "#000000",
          fontWeight: "normal",
          fontFamily: "inherit",
        }}
        {...props}
      >
        {children}
      </span>
    );
  }

  return !inline && match ? (
    <div className="code-block-container my-6 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
      {/* Kod bloğu başlığı ve kontrolleri */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Icon icon="vscode-icons:file-type-default" className="w-4 h-4" />
          <span className="text-sm text-gray-300 font-medium">
            {language ? language.toUpperCase() : "CODE"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Tema değiştirme butonu */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-1.5 rounded hover:bg-gray-700 transition-colors"
            title={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
          >
            <Icon
              icon={isDark ? "ph:sun" : "ph:moon"}
              className="w-4 h-4 text-gray-400 hover:text-gray-200"
            />
          </button>

          {/* Kopyalama butonu */}
          <button
            onClick={() => copyToClipboard(codeString)}
            className="p-1.5 rounded hover:bg-gray-700 transition-colors flex items-center gap-1"
            title="Kodu kopyala"
          >
            <Icon
              icon={copied ? "ph:check" : "ph:copy"}
              className={`w-4 h-4 transition-colors ${
                copied ? "text-green-400" : "text-gray-400 hover:text-gray-200"
              }`}
            />
            {copied && (
              <span className="text-xs text-green-400 font-medium">
                Kopyalandı!
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Syntax highlighted kod */}
      <SyntaxHighlighter
        style={isDark ? vscDarkPlus : oneLight}
        language={language}
        PreTag="div"
        className="!m-0"
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          fontSize: "0.875rem",
          lineHeight: "1.6",
          fontFamily:
            '"Fira Code", "JetBrains Mono", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace',
          backgroundColor: isDark ? "#1e1e1e" : "#fafafa",
        }}
        showLineNumbers={true}
        lineNumberStyle={{
          color: isDark ? "#6b7280" : "#9ca3af",
          fontSize: "0.75rem",
          marginRight: "1rem",
          userSelect: "none",
          minWidth: "2.5rem",
        }}
        wrapLines={true}
        wrapLongLines={true}
        {...props}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  ) : (
    // Inline kod için normal siyah renk (bold olanlar için daha koyu)
    <code
      style={{
        color: "#000000",
        fontWeight: "inherit", // Parent'ın font-weight'ini inherit et
        fontFamily: "inherit",
        backgroundColor: "transparent",
        padding: 0,
        border: "none",
      }}
      {...props}
    >
      {children}
    </code>
  );
};

export default CodeBlock;
