import { FC } from "react";

export type CodeBlockVariant = "default" | "error";

export type Props = {
  variant?: CodeBlockVariant;
  code: string | string[];
};

const CodeBlock: FC<Props> = ({ code, variant }) => {
  const text = Array.isArray(code) ? code.join("\n") : code;

  if (variant === "error") {
    return (
      <pre className="flex-1 border-1 border-divider rounded-lg p-4 bg-bg-default text-error overflow-auto">
        <samp>{text}</samp>
      </pre>
    );
  }

  return (
    <pre className="flex-1 border-1 border-divider rounded-lg p-4 bg-bg-default overflow-auto">
      <code>{text}</code>
    </pre>
  );
};

export default CodeBlock;
