import CodeBlock from "components/atoms/CodeBlock";
import { WebGL2ShaderCompilationError } from "lib/errors/webgl2";
import { FC } from "react";

export type Props = {
  error: unknown;
};

const RenderErrorDialogContent: FC<Props> = ({ error }) => {
  if (error instanceof WebGL2ShaderCompilationError) {
    return (
      <>
        <h2 className="text-2xl">A shader compilation error occurred.</h2>
        <span>Errors:</span>
        <CodeBlock
          variant="error"
          code={error.errors.map(
            ({ row, column, message }) => `${row}:${column}: ${message}`,
          )}
        />
        <span>Shader source:</span>
        <CodeBlock code={error.shaderSrc} />
      </>
    );
  }
  if (error instanceof Error) {
    return (
      <>
        <p className="text-2xl">
          An unknown error has occurred while rendering the banner. Details:
        </p>
        <pre className="flex-1 border-1 border-divider rounded-lg p-4 bg-bg-default text-error overflow-auto">
          {error.name}: {error.message}
        </pre>
      </>
    );
  }
  return (
    <>
      <p className="text-2xl">
        An unknown error has occurred while rendering the banner. Details:
      </p>
      <pre className="flex-1 border-1 border-divider rounded-lg p-4 bg-bg-default text-error overflow-auto">{`${error}`}</pre>
    </>
  );
};

export default RenderErrorDialogContent;
