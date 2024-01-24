#version 300 es

precision highp float;

const float PI = 3.1415926535897932384626433832795;

uniform vec2 u_resolution;
uniform float u_time;

out vec4 out_color;

float ywave(vec2 uv, float time, float freq, float speed, float phase,
            float base, float amp) {
  const float halfWidth = 0.0025;
  float x = (uv.x + speed * time / 1000.0) * freq + phase;
  float y = amp * sin(2.0 * PI * x) + base;
  return 1.0 - smoothstep(y - halfWidth, y + halfWidth, uv.y);
}

float ywaveline(vec2 uv, float time, float freq, float speed, float phase,
                float base, float amp, float width) {
  float hw = width / 2.0;
  return ywave(uv, time, freq, speed, phase, base + hw, amp) -
         ywave(uv, time, freq, speed, phase, base - hw, amp);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;

  float wave1 = ywave(uv, u_time, 1.0, 0.1, 0.07, 0.3, 0.05);
  float wave2 = ywave(uv, u_time, 0.9, 0.13, 0.29, 0.29, 0.04);

  float wave3 = ywaveline(uv, u_time, 1.1, 0.23, 0.39, 0.85, 0.07, 0.005);

  vec3 color = vec3((wave1 + wave2) / 2.0 + 0.2 * wave3);

  out_color = vec4(color, 1.0);
}
