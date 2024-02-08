import VERT_SRC from "@/shaders/basic.vert";
import { WebGL2ShaderCompilationError } from "lib/errors/webgl2";
import { SimpleVertex2D } from "lib/types/geometry";
import { createQuadStrip2D } from "lib/utils/geometry";

const POSITION_ATTRIBUTE_NAME = "in_position";

const TIME_UNIFORM_NAME = "u_time";
const RESOLUTION_UNIFORM_NAME = "u_resolution";

export class WebGL2Renderer {
  private gl: WebGL2RenderingContext;

  private program: WebGLProgram;
  private inPositionLocation: number;
  private uTimeLocation: WebGLUniformLocation | null;
  private uResolutionLocation: WebGLUniformLocation | null;

  private vertexBuffer: WebGLBuffer;
  private vao: WebGLVertexArrayObject;

  constructor(
    private canvas: HTMLCanvasElement,
    fragSrc: string,
  ) {
    this.gl = createWebGL2Context(canvas);

    this.program = createWebGL2Program(this.gl, fragSrc);
    this.inPositionLocation = this.gl.getAttribLocation(
      this.program,
      POSITION_ATTRIBUTE_NAME,
    );
    this.uTimeLocation = this.gl.getUniformLocation(
      this.program,
      TIME_UNIFORM_NAME,
    );
    this.uResolutionLocation = this.gl.getUniformLocation(
      this.program,
      RESOLUTION_UNIFORM_NAME,
    );

    this.vertexBuffer = createSimpleWebGL2VertexBuffer(
      this.gl,
      createQuadStrip2D(),
    );
    this.vao = createBasicWebGL2VAO(this.gl, this.inPositionLocation);

    this.gl.useProgram(this.program);

    this.gl.clearColor(0, 0, 0, 1);

    this.refreshResolution();
  }

  public refreshResolution() {
    let width = this.canvas.clientWidth;
    let height = this.canvas.clientHeight;

    this.canvas.width = width;
    this.canvas.height = height;

    this.gl.viewport(0, 0, width, height);
    this.gl.uniform2f(this.uResolutionLocation, width, height);
  }

  public renderFrame(time: number) {
    this.gl.uniform1f(this.uTimeLocation, time);

    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }

  public dispose() {
    this.gl.deleteVertexArray(this.vao);
    this.gl.deleteBuffer(this.vertexBuffer);
    this.gl.deleteProgram(this.program);
  }
}

function createWebGL2Context(
  canvas: HTMLCanvasElement,
): WebGL2RenderingContext {
  const result = canvas.getContext("webgl2");
  if (result == null) {
    throw new Error("Failed to create WebGL2 context.");
  }
  return result;
}

function createWebGL2Program(
  gl: WebGL2RenderingContext,
  fragSrc: string,
): WebGLProgram {
  const shaders = createWebGL2Shaders(gl, fragSrc);
  const program = gl.createProgram()!;

  for (const shader of shaders) {
    gl.attachShader(program, shader);
  }

  try {
    gl.linkProgram(program);
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!success) {
      throw new Error(
        `Failed to link program:\n${gl.getProgramInfoLog(program)}`,
      );
    }
    return program;
  } catch (err) {
    gl.deleteProgram(program);
    throw err;
  } finally {
    for (const shader of shaders) {
      gl.detachShader(program, shader);
      gl.deleteShader(shader);
    }
  }
}

function createWebGL2Shaders(
  gl: WebGL2RenderingContext,
  fragSrc: string,
): WebGLShader[] {
  const shaders = [];
  try {
    shaders.push(createWebGL2Shader(gl, gl.VERTEX_SHADER, VERT_SRC));
    shaders.push(createWebGL2Shader(gl, gl.FRAGMENT_SHADER, fragSrc));
    return shaders;
  } catch (err) {
    shaders.forEach((shader) => gl.deleteShader(shader));
    throw err;
  }
}

function createWebGL2Shader(
  gl: WebGL2RenderingContext,
  type: number,
  src: string,
): WebGLShader {
  const shader = gl.createShader(type)!;
  try {
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!success) {
      throw new WebGL2ShaderCompilationError(src, gl.getShaderInfoLog(shader)!);
    }
    return shader;
  } catch (err) {
    gl.deleteShader(shader);
    throw err;
  }
}

function createSimpleWebGL2VertexBuffer(
  gl: WebGL2RenderingContext,
  vertices: SimpleVertex2D[],
): WebGLBuffer {
  const buffer = gl.createBuffer();
  if (buffer == null) {
    throw new Error("Failed to create vertex buffer");
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(vertices.flat()),
    gl.STATIC_DRAW,
  );
  return buffer;
}

function createBasicWebGL2VAO(
  gl: WebGL2RenderingContext,
  positionAttribute: number,
): WebGLVertexArrayObject {
  const vao = gl.createVertexArray();
  if (vao == null) {
    throw new Error("Failed to create vertex array object");
  }
  gl.bindVertexArray(vao);
  gl.enableVertexAttribArray(positionAttribute);
  gl.vertexAttribPointer(positionAttribute, 2, gl.FLOAT, false, 0, 0);
  return vao;
}
