import "./copyCode.css";

export default function CopyCode({ children }) {
  // Extract the code string from SyntaxHighlighter's children
  const code = children?.props?.children || "";

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        alert("Code copied to clipboard!");
      },
      (err) => {
        alert("Failed to copy code: ", err);
      }
    );
  };

  return (
    <div style={{ position: "relative" }}>
      {children}
      <button onClick={handleCopy}>Copy Code</button>
    </div>
  );
}
