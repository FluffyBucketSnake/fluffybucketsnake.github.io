(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7274:function(e,t,r){"use strict";var n=r(155),a=(r(7294),r(9202)),o=r(5893);t.Z=function(){return(0,o.jsxs)("footer",{className:"flex flex-col align-center mt-auto p-16 space-y-4 bg-secondary-500 border-t-1 border-secondary-300 text-secondary-contrast",children:[(0,o.jsxs)("ul",{className:"flex justify-center flex-row space-x-4",children:[(0,o.jsx)("li",{children:(0,o.jsx)(a.Z,{color:"secondaryContrast",href:"https://github.com/fluffybucketsnake",rel:"noopener noreferrer",target:"_blank",children:(0,o.jsx)(n.JOq,{size:32})})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.Z,{color:"secondaryContrast",href:"https://www.linkedin.com/in/fluffybucketsnake-1379/",rel:"noopener noreferrer",target:"_blank",children:(0,o.jsx)(n.gXb,{size:32})})})]}),(0,o.jsx)("span",{className:"text-center text-lg",children:"Developed by me :)"}),(0,o.jsx)("span",{className:"text-center text-sm",children:"Made with Next.js"})]})}},9202:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(6010),a=r(7294),o=r(5893),i=a.forwardRef((function(e,t){var r=e.children,a=e.className,i=e.color,s=e.fluent,c=e.href,f=e.rel,u=e.onClick,h=e.packed,d=e.target,m=function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4?arguments[4]:void 0;return(0,n.Z)("flex transition duration-200 rounded-full",l(e,t,r),!a&&"p-[12px]",o)}(e.variant,i,s,h,a);return c?(0,o.jsx)("a",{ref:t,className:m,href:c,rel:f,target:d,onClick:u,children:r}):(0,o.jsx)("button",{ref:t,className:m,onClick:u,children:r})})),s=i;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"text",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"primaryContrast",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("filled"===e&&"primary"===t&&r)return"bg-primary-500/80 hover:bg-primary-500/90 active:bg-primary-500/70 shadow-lg backdrop-blur-lg border-1 border-primary-500 text-primary-contrast hover:text-primary-contrast/60 active:text-primary-contrast/30 fill-primary-contrast hover:fill-primary-contrast/60 active:fill-primary-contrast/30";if("text"===e&&"primaryContrast"===t)return"text-primary-contrast hover:text-primary-contrast/60 active:text-primary-contrast/30 fill-primary-contrast hover:fill-primary-contrast/60 active:fill-primary-contrast/30";if("text"===e&&"secondaryContrast"===t)return"text-secondary-contrast hover:text-secondary-contrast/80 active:text-secondary-contrast/60 fill-secondary-contrast hover:secondary-contrast/80 active:fill-secondary-contrast/60";throw new Error("Unimplemented style combination: (".concat(e,", ").concat(t,", ").concat(r,")"))}},6067:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(2732),a=r(6010),o=r(9202),i=r(7294),s=r(8604),l=r(2836),c=r(8105),f=r(5797),u=r(7335),h=r(1664),d=r.n(h),m=r(155),p=r(3587),v=r(1),x=r(5893),y=function(e){var t=e.as,r=e.children,n=e.className,a=e.onClose,o=e.open;return(0,x.jsx)(p.u,{as:i.Fragment,show:null!==o&&void 0!==o&&o,children:(0,x.jsxs)(v.V,{onClose:a,children:[(0,x.jsx)(p.u.Child,{as:i.Fragment,enter:"transition duration-200",enterFrom:"opacity-0 -translate-x-full",enterTo:"opacity-100 translate-x-0",leave:"transition duration-200",leaveFrom:"opacity-100 translate-x-0",leaveTo:"opacity-0 -translate-x-full",children:(0,x.jsx)(v.V.Panel,{as:t,className:n,children:r})}),(0,x.jsx)(p.u.Child,{as:i.Fragment,enter:"transition-opacity duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-500",leaveFrom:"opacity-1000",leaveTo:"opacity-0",children:(0,x.jsx)("div",{className:"fixed inset-0 bg-black/50"})})]})})},g=[{href:"/",icon:(0,x.jsx)(s.Z,{}),label:"Home"},{href:"/blog",icon:(0,x.jsx)(l.Z,{}),label:"Blog"},{href:"/about",icon:(0,x.jsx)(c.Z,{}),label:"About me"},{href:"/donate",icon:(0,x.jsx)(f.Z,{viewBox:"0 0 24 24",width:"32",height:"32"}),label:"Pay me a coffee"}],b=function(e){var t=e.open,r=e.onClose,n=(0,i.useState)(),a=n[0],s=n[1];return(0,i.useEffect)((function(){s(window.location.pathname)}),[]),(0,x.jsxs)(y,{as:"nav",className:"fixed flex flex-col items-start top-0 w-full sm:w-[360px] h-screen overflow-y-auto z-20 bg-primary-gradient/80 backdrop-blur-lg border-r-1 border-primary-500",onClose:r,open:t,children:[(0,x.jsx)(o.Z,{className:"m-2 w-auto",onClick:r,children:(0,x.jsx)(u.Z,{width:"24",height:"24"})}),(0,x.jsx)("ul",{className:"list py-8 w-[100%] space-y-4",children:g.map((function(e,t){var r=e.href,n=e.icon,o=e.label;return(0,x.jsx)(w,{href:r,icon:n,label:o,selected:r===a},t)}))}),(0,x.jsxs)("ul",{className:"list flex flex-row justify-end mt-auto p-8 w-[100%] space-x-4",children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.Z,{href:"https://github.com/fluffybucketsnake",rel:"noopener noreferrer",target:"_blank",packed:!0,children:(0,x.jsx)(m.JOq,{size:32})})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.Z,{href:"https://www.linkedin.com/in/fluffybucketsnake-1379/",target:"_blank",rel:"noopener noreferrer",packed:!0,children:(0,x.jsx)(m.gXb,{size:32})})})]})]})},w=function(e){var t=e.icon,r=e.label,n=e.href,o=e.selected;return(0,x.jsx)("li",{children:(0,x.jsx)(d(),{href:n,passHref:!0,children:(0,x.jsxs)("a",{className:(0,a.Z)("flex flex-row items-center text-lg px-8 w-[100%] h-12 text-primary-contrast fill-primary-contrast hover:text-primary-contrast/60 hover:fill-primary-contrast/60 active:text-primary-contrast/30 active:fill-primary-contrast/30 transition duration-200 relative",o&&"before:block before:absolute before:bg-primary-400 before:left-0 before:w-2 before:h-[100%]"),children:[t&&(0,x.jsx)("span",{className:"mr-4",children:t}),r]})})})},_=function(e){var t=e.variant,r=void 0===t?"fab":t,s=(0,i.useState)(!1),l=s[0],c=s[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("nav",{className:(0,a.Z)("p-4 z-10","overlay"===r&&"absolute","fab"===r&&"fixed"),children:(0,x.jsx)(o.Z,{variant:"fab"===r?"filled":"text",color:"fab"===r?"primary":"primaryContrast",fluent:!0,onClick:function(){return c(!0)},children:(0,x.jsx)(n.Z,{width:"24",height:"24"})})}),(0,x.jsx)(b,{open:l,onClose:function(){return c(!1)}})]})}},8502:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return p}});var o,i=r(7294);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}var l=function(e){return i.createElement("svg",s({width:24,height:24,xmlns:"http://www.w3.org/2000/svg"},e),o||(o=i.createElement("path",{d:"M8.47 4.22c-.3.3-.3.77 0 1.06L15.19 12l-6.72 6.72a.75.75 0 1 0 1.06 1.06l7.25-7.25c.3-.3.3-.77 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0z"})))},c=r(6010),f=r(1664),u=r.n(f),h=r(2167),d=r(5893),m=function(e){var t=e.post,r=t.slug,n=t.title,a=t.description,o=t.date;return(0,d.jsx)(u(),{href:"/blog/posts/".concat(r),passHref:!0,children:(0,d.jsx)("a",{className:"group block",children:(0,d.jsxs)("article",{className:"flex flex-col gap-2 p-4 bg-bg-paper border-1 border-divider rounded-lg shadow",children:[(0,d.jsx)("h4",{className:"text-3xl text-text-primary group-hover:text-text-primary/60 group-active:text-text-primary/30 transition duration-200",children:n}),(0,d.jsx)("p",{className:"text-lg text-gray-300",children:a}),(0,d.jsx)("time",{className:"text-sm text-text-primary",dateTime:o.toISOString(),children:(0,h.Z)(o,"PPP")})]})})})},p=function(e){var t=e.maxCount,r=e.posts,n=(0,i.useMemo)((function(){return a(r).sort((function(e,t){return t.date.getTime()-e.date.getTime()}))}),[r]);return(0,d.jsxs)("section",{className:"flex flex-col",children:[(0,d.jsx)("h3",{className:"text-5xl mb-8",children:"Recent posts"}),(0,d.jsx)("ol",{className:(0,c.Z)("list space-y-4",t&&"mb-8"),children:(t?n.slice(0,t):n).map((function(e){return(0,d.jsx)(m,{post:e},e.slug)}))}),t&&(0,d.jsx)(u(),{href:"/blog",passHref:!0,children:(0,d.jsxs)("a",{className:"flex flex-row font-display text-base items-center uppercase p-2 self-end text-text-primary fill-text-primary hover:text-text-primary/60 hover:fill-text-primary/60 active:text-text-primary/30 active:fill-text-primary/30 transition duration-200",children:["See more",(0,d.jsx)(l,{className:"ml-1"})]})})]})}},8044:function(e,t){"use strict";t.Z="https://github.com/fluffybucketsnake.png"},4718:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return E},default:function(){return S}});var n=r(3544),a=r(7274);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}var l=r(9499),c="#version 300 es\n\nin vec4 in_position;\n\nvoid main() { gl_Position = in_position; }\n";function f(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(){function e(t,r){o(this,e),this.canvas=t,(0,l.Z)(this,"gl",void 0),(0,l.Z)(this,"program",void 0),(0,l.Z)(this,"inPositionLocation",void 0),(0,l.Z)(this,"uTimeLocation",void 0),(0,l.Z)(this,"uResolutionLocation",void 0),(0,l.Z)(this,"vertexBuffer",void 0),(0,l.Z)(this,"vao",void 0),this.gl=function(e){var t=e.getContext("webgl2");if(null==t)throw new Error("Failed to create WebGL2 context.");return t}(t),this.program=function(e,t){var r,n=function(e,t){var r=[];try{return r.push(d(e,e.VERTEX_SHADER,c)),r.push(d(e,e.FRAGMENT_SHADER,t)),r}catch(n){throw r.forEach((function(t){return e.deleteShader(t)})),n}}(e,t),a=e.createProgram(),o=f(n);try{for(o.s();!(r=o.n()).done;){var i=r.value;e.attachShader(a,i)}}catch(h){o.e(h)}finally{o.f()}try{if(e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw new Error("Failed to link program:\n".concat(e.getProgramInfoLog(a)));return a}catch(h){throw e.deleteProgram(a),h}finally{var s,l=f(n);try{for(l.s();!(s=l.n()).done;){var u=s.value;e.detachShader(a,u),e.deleteShader(u)}}catch(h){l.e(h)}finally{l.f()}}}(this.gl,r),this.inPositionLocation=this.gl.getAttribLocation(this.program,"in_position"),this.uTimeLocation=this.gl.getUniformLocation(this.program,"u_time"),this.uResolutionLocation=this.gl.getUniformLocation(this.program,"u_resolution"),this.vertexBuffer=function(e,t){var r=e.createBuffer();if(null==r)throw new Error("Failed to create vertex buffer");return e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t.flat()),e.STATIC_DRAW),r}(this.gl,[[1,1],[-1,1],[1,-1],[-1,-1]]),this.vao=function(e,t){var r=e.createVertexArray();if(null==r)throw new Error("Failed to create vertex array object");return e.bindVertexArray(r),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,2,e.FLOAT,!1,0,0),r}(this.gl,this.inPositionLocation),this.gl.useProgram(this.program),this.gl.clearColor(0,0,0,1)}return s(e,[{key:"refreshResolution",value:function(){var e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.canvas.width=e,this.canvas.height=t,this.gl.viewport(0,0,e,t),this.gl.uniform2f(this.uResolutionLocation,e,t)}},{key:"renderFrame",value:function(e){this.refreshResolution(),this.gl.uniform1f(this.uTimeLocation,e),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}},{key:"dispose",value:function(){this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(this.vertexBuffer),this.gl.deleteProgram(this.program)}}]),e}();function d(e,t,r){var n=e.createShader(t);try{if(e.shaderSource(n,r),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw new Error("Failed to compile shader:\n".concat(e.getShaderInfoLog(n)));return n}catch(a){throw e.deleteShader(n),a}}var m=1e3/60,p=function(){function e(t){var r=this;o(this,e),(0,l.Z)(this,"running",!0);var n=0,a=Date.now();requestAnimationFrame((function e(){if(r.running){var o=Date.now(),i=o-a;i>=m&&(a=o-i%m,t(n+=m)),requestAnimationFrame(e)}}))}return s(e,[{key:"stop",value:function(){this.running=!1}}]),e}();var v=r(7294),x=r(5893),y=function(){var e,t=(0,v.useRef)(null);return(0,v.useEffect)((e=t,function(){var t=new h(e.current,"#version 300 es\n\nprecision highp float;\n\nuniform vec2 u_resolution;\nuniform float u_time;\n\nout vec4 out_color;\n\n#define fromhex(hex)                                                           \\\n  (vec3(ivec3((hex >> 16) & 0xFF, (hex >> 8) & 0xFF, hex & 0xFF)) / 255.0)\n\nstruct wave_t {\n  float freq;\n  float speed;\n  float phase;\n  float amp;\n  float base;\n};\n\nstruct gradient_step_t {\n  float t;\n  vec3 color;\n};\n\nconst float PI = 3.1415926535897932384626433832795;\n\nconst float GRADIENT_DIR_BASE = radians(160.0);\nconst float GRADIENT_DIR_FREQ = 1.0 / 21.0;\nconst float GRADIENT_DIR_AMP = radians(4.5);\nconst gradient_step_t GRADIENT_STEPS[3] =\n    gradient_step_t[3](gradient_step_t(-0.61, fromhex(0x30359E)),\n                       gradient_step_t(0.52, fromhex(0x262853)),\n                       gradient_step_t(1.64, fromhex(0x7B61FF)));\n\nconst wave_t WAVES[3] = wave_t[3](wave_t(1.13, 0.005, 0.03, 0.14, 0.25),\n                                  wave_t(2.126, 0.007, 0.61, 0.13, 0.17),\n                                  wave_t(5.87, 0.013, 0.73, 0.12, 0.23));\nconst wave_t WAVELINES[3] = wave_t[3](wave_t(0.91, 0.027, 0.14, 0.07, 0.819),\n                                      wave_t(1.11, 0.035, 0.03, 0.05, 0.79),\n                                      wave_t(1.23, 0.041, 0.89, 0.04, 0.81));\n\nconst vec3 WAVE_COLOR = fromhex(0x7B7EBE);\nconst float WAVE_ALPHA_BASE = 0.07;\nconst float WAVE_ALPHA_MULT = 0.5;\nconst float WAVELINE_WIDTH = 0.0078125;\n\nvec3 background(vec2 uv, float time) {\n  float dir = GRADIENT_DIR_BASE +\n              GRADIENT_DIR_AMP * cos(2.0 * PI * GRADIENT_DIR_FREQ * time);\n  vec2 n = -vec2(cos(dir), sin(dir));\n  float t = dot(uv, n);\n  vec3 color = GRADIENT_STEPS[0].color;\n  for (int i = 1; i < GRADIENT_STEPS.length(); i++) {\n    color = mix(color, GRADIENT_STEPS[i].color,\n                smoothstep(GRADIENT_STEPS[i - 1].t, GRADIENT_STEPS[i].t, t));\n  }\n  return color;\n}\n\nfloat ywave(vec2 uv, float time, wave_t wave) {\n  const float halfWidth = 0.0025;\n  float x = (uv.x + wave.speed * time) * wave.freq + wave.phase;\n  float y = wave.amp * sin(2.0 * PI * x) + wave.base;\n  return 1.0 - smoothstep(y - halfWidth, y + halfWidth, uv.y);\n}\n\nfloat ywaveline(vec2 uv, float time, wave_t wave, float width) {\n  float hw = width / 2.0;\n  return ywave(uv, time,\n               wave_t(wave.freq, wave.speed, wave.phase, wave.amp,\n                      wave.base + hw)) -\n         ywave(uv, time,\n               wave_t(wave.freq, wave.speed, wave.phase, wave.amp,\n                      wave.base - hw));\n}\n\nvoid main() {\n  float alpha;\n\n  float time = u_time / 1000.0;\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n\n  vec3 color = background(uv, time);\n\n  alpha = WAVE_ALPHA_BASE;\n  for (int i = 0; i < WAVES.length(); i++) {\n    color = mix(color, WAVE_COLOR, ywave(uv, time, WAVES[i]) * alpha);\n    alpha *= WAVE_ALPHA_MULT;\n  }\n\n  alpha = WAVE_ALPHA_BASE;\n  for (int i = 0; i < WAVELINES.length(); i++) {\n    color = mix(color, WAVE_COLOR,\n                ywaveline(uv, time, WAVELINES[i], WAVELINE_WIDTH) * alpha);\n    alpha *= WAVE_ALPHA_MULT;\n  }\n\n  out_color = vec4(color, 1.0);\n}\n"),r=new p((function(e){return t.renderFrame(e)}));return function(){r.stop(),t.dispose()}}),[t.current]),(0,x.jsxs)("header",{className:"relative flex flex-col justify-center align-center px-16 py-32 bg-hero-main bg-cover bg-center border-b-1 border-primary-400 text-primary-contrast text-center overflow-hidden",children:[(0,x.jsx)("canvas",{className:"absolute inset-0 w-full h-full -z-1",ref:t}),(0,x.jsxs)("h1",{className:"text-6xl text-center relative",children:["Hi, I'm",(0,x.jsx)("strong",{className:"font-display text-secondary-500 text-center before:content-['\\A'] before:whitespace-pre",children:"Bruno Henrique Glowaski Morais"})]}),(0,x.jsxs)("h2",{className:"text-xl font-bold mb-8",children:["AKA ",(0,x.jsx)("strong",{className:"text-secondary-500",children:"FluffyBucketSnake"})]}),(0,x.jsx)("p",{className:"text-lg",children:"I'm full-stack web developer and a game designer. I'm also passionate about gaming, science, technology and art."})]})},g=r(6067),b=r(8502),w=r(9008),_=r(9804),A=r(8044),j=r(3454).env.BASE_URL,E=!0,S=(0,n.withSuperJSONPage)((function(e){var t=e.posts;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(w.default,{children:[(0,x.jsx)("title",{children:_.T}),(0,x.jsx)("meta",{property:"og:title",content:_.T}),(0,x.jsx)("meta",{property:"og:type",content:"website"}),(0,x.jsx)("meta",{property:"og:image",content:A.Z}),(0,x.jsx)("meta",{property:"og:url",content:j})]}),(0,x.jsx)(g.Z,{variant:"overlay"}),(0,x.jsx)(y,{}),(0,x.jsx)("main",{className:"p-16",children:(0,x.jsx)(b.Z,{posts:t,maxCount:3})}),(0,x.jsx)(a.Z,{})]})}))},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4718)}])},9804:function(e){"use strict";e.exports=JSON.parse('{"T":"FluffyBucketSnake\'s Hacking Shack"}')}},function(e){e.O(0,[260,386,900,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);