export interface IShaderError {
  row: number;
  column: number;
  message: string;
}

export class WebGL2ShaderCompilationError extends Error {
  public readonly errors: IShaderError[];

  constructor(
    public readonly shaderSrc: string,
    infoLog: string,
  ) {
    const errors = infoLog
      .split("\n")
      .map(parseShaderError)
      .filter((e) => e != null) as IShaderError[];
    super("Failed to compile shader");
    this.name = "WebGL2ShaderCompilationError";
    this.errors = errors;
  }
}

const SHADER_ERROR_LINE_REGEX = /^ERROR: (\d+):(\d+): (.+)$/;

function parseShaderError(line: string): IShaderError | undefined {
  const matches = line.match(SHADER_ERROR_LINE_REGEX);
  if (matches == null) {
    return;
  }
  return {
    column: parseInt(matches[1]),
    row: parseInt(matches[2]),
    message: matches[3],
  };
}
