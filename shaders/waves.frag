#version 300 es

precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

out vec4 out_color;

#define fromhex(hex)                                                           \
  (vec3(ivec3((hex >> 16) & 0xFF, (hex >> 8) & 0xFF, hex & 0xFF)) / 255.0)

struct wave_t {
  float freq;
  float speed;
  float phase;
  float amp;
  float base;
};

struct gradient_step_t {
  float t;
  vec3 color;
};

const float PI = 3.1415926535897932384626433832795;

const float GRADIENT_DIR_BASE = radians(160.0);
const float GRADIENT_DIR_FREQ = 1.0 / 21.0;
const float GRADIENT_DIR_AMP = radians(4.5);
const gradient_step_t GRADIENT_STEPS[3] =
    gradient_step_t[3](gradient_step_t(-0.61, fromhex(0x30359E)),
                       gradient_step_t(0.52, fromhex(0x262853)),
                       gradient_step_t(1.64, fromhex(0x7B61FF)));

const wave_t WAVES[3] = wave_t[3](wave_t(1.13, 0.005, 0.03, 0.14, 0.25),
                                  wave_t(2.126, 0.007, 0.61, 0.13, 0.17),
                                  wave_t(5.87, 0.013, 0.73, 0.12, 0.23));
const wave_t WAVELINES[3] = wave_t[3](wave_t(0.91, 0.027, 0.14, 0.07, 0.819),
                                      wave_t(1.11, 0.035, 0.03, 0.05, 0.79),
                                      wave_t(1.23, 0.041, 0.89, 0.04, 0.81));

const vec3 WAVE_COLOR = fromhex(0x7B7EBE);
const float WAVE_ALPHA_BASE = 0.07;
const float WAVE_ALPHA_MULT = 0.5;
const float WAVELINE_WIDTH = 0.0078125;

vec3 background(vec2 uv, float time) {
  float dir = GRADIENT_DIR_BASE +
              GRADIENT_DIR_AMP * cos(2.0 * PI * GRADIENT_DIR_FREQ * time);
  vec2 n = -vec2(cos(dir), sin(dir));
  float t = dot(uv, n);
  vec3 color = GRADIENT_STEPS[0].color;
  for (int i = 1; i < GRADIENT_STEPS.length(); i++) {
    gradient_step_t start = GRADIENT_STEPS[i - 1];
    gradient_step_t end = GRADIENT_STEPS[i];
    color = mix(color, end.color, smoothstep(start.t, end.t, t));
  }
  return color;
}

float ywave(vec2 uv, float time, wave_t wave) {
  const float halfWidth = 0.0025;
  float x = (uv.x + wave.speed * time) * wave.freq + wave.phase;
  float y = wave.amp * sin(2.0 * PI * x) + wave.base;
  return 1.0 - smoothstep(y - halfWidth, y + halfWidth, uv.y);
}

float ywaveline(vec2 uv, float time, wave_t wave, float width) {
  float hw = width / 2.0;
  return ywave(uv, time,
               wave_t(wave.freq, wave.speed, wave.phase, wave.amp,
                      wave.base + hw)) -
         ywave(uv, time,
               wave_t(wave.freq, wave.speed, wave.phase, wave.amp,
                      wave.base - hw));
}

void main() {
  float alpha;

  float time = u_time / 1000.0;
  vec2 uv = gl_FragCoord.xy / u_resolution;

  vec3 color = background(uv, time);

  alpha = WAVE_ALPHA_BASE;
  for (int i = 0; i < WAVES.length(); i++) {
    color = mix(color, WAVE_COLOR, ywave(uv, time, WAVES[i]) * alpha);
    alpha *= WAVE_ALPHA_MULT;
  }

  alpha = WAVE_ALPHA_BASE;
  for (int i = 0; i < WAVELINES.length(); i++) {
    color = mix(color, WAVE_COLOR,
                ywaveline(uv, time, WAVELINES[i], WAVELINE_WIDTH) * alpha);
    alpha *= WAVE_ALPHA_MULT;
  }

  out_color = vec4(color, 1.0);
}
