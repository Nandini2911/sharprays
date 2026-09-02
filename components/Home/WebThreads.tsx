"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) return [1, 1, 1];

  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
};

const FAN_MODE = {
  center: 0,
  left: 1,
  right: 2,
};

const vertex = `#version 300 es

in vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es

precision highp float;

uniform vec2 iResolution;
uniform float iTime;

uniform float uSpeed;
uniform float uThreadCount;
uniform float uFrequency;
uniform float uSpread;
uniform float uTaper;
uniform float uPosition;
uniform float uFanMode;

uniform float uGlow;
uniform float uFalloff;
uniform float uThickness;
uniform float uBrightness;
uniform float uOpacity;

uniform float uMirror;
uniform float uShimmer;

uniform float uGrain;
uniform float uGrainIntensity;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

uniform vec2 uMouse;
uniform float uMouseStrength;
uniform float uEnableMouse;
uniform float uMouseActive;

out vec4 fragColor;

#define TAU 6.28318530718
#define MAX_THREADS 10

float glow(float x, float str, float dist) {
  return dist / pow(max(x, 1e-4), str);
}

void main() {

  vec2 uv = gl_FragCoord.xy / iResolution.xy;

  float n = max(uThreadCount, 1.0);

  float pinchX =
    uFanMode < 0.5
      ? 0.5
      : (uFanMode < 1.5 ? 0.0 : 1.0);

  if (uEnableMouse > 0.5) {
    pinchX = mix(
      pinchX,
      uMouse.x,
      clamp(uMouseStrength, 0.0, 1.0) * uMouseActive
    );
  }

  float spreadDx = uSpread * abs(uv.x - pinchX);

  float baseT = iTime * uSpeed;

  float tauOverN = TAU / n;

  float mirror =
    uMirror > 0.5
      ? sign(pinchX - uv.x)
      : 1.0;

  bool doShimmer = uShimmer > 0.5;

  float shimmerT = iTime * 1.7;

  float invThickness =
    1.0 / max(uThickness, 0.01);

  float xFreq = uv.x * uFrequency;

  float yOff = uv.y - uPosition;

  float ciScale =
    n > 1.0
      ? 1.0 / (n - 1.0)
      : 0.0;

  vec3 col = vec3(0.0);

  float gsum = 0.0;

  for (int idx = 0; idx < MAX_THREADS; idx++) {

    float i = float(idx);

    if (i >= n) break;

    float amplitude =
      spreadDx * (1.0 + i * uTaper);

    float shimmer =
      doShimmer
        ? sin(shimmerT + i * 1.3) * 0.35
        : 0.0;

    float phase =
      (baseT + i * tauOverN) * mirror
      + shimmer;

    float sdf =
      abs(
        yOff +
        sin(xFreq + phase) * amplitude
      ) * invThickness;

    float g =
      glow(
        sdf,
        uFalloff,
        uGlow
      );

    float ci = i * ciScale;

    vec3 threadCol =
      mix(
        uColor1,
        uColor2,
        ci
      );

    col += g * threadCol;

    gsum += g;
  }

  float coreAmt =
    smoothstep(
      0.5,
      2.2,
      gsum
    );

  col =
    mix(
      col,
      uColor3 * gsum,
      coreAmt * 0.5
    );

  float bright = uBrightness;

  if (uEnableMouse > 0.5) {

    vec2 md = uv - uMouse;

    float d2 = dot(md, md);

    bright +=
      clamp(
        uMouseStrength,
        0.0,
        1.0
      ) *
      uMouseActive *
      exp(-d2 * 6.0) *
      0.6;
  }

  col *= bright;

  float alpha =
    clamp(gsum, 0.0, 1.0) *
    uOpacity;

  vec3 outRgb =
    col * alpha;

  if (uGrain > 0.5) {

    float gv =
      (
        fract(
          sin(
            dot(
              gl_FragCoord.xy,
              vec2(
                12.9898,
                78.233
              )
            ) + iTime
          ) *
          43758.5453
        ) - 0.5
      ) *
      uGrainIntensity;

    outRgb =
      clamp(
        outRgb + gv,
        0.0,
        1.0
      );

    alpha =
      clamp(
        alpha + gv,
        0.0,
        1.0
      );
  }

  fragColor =
    vec4(
      outRgb,
      alpha
    );
}
`;

const ctxMap = new WeakMap<
  HTMLElement,
  {
    renderer: Renderer;
    program: Program;
    mesh: Mesh;
  }
>();

type WebThreadsProps = {
  color1?: string;
  color2?: string;
  color3?: string;
  speed?: number;
  threadCount?: number;
  frequency?: number;
  spread?: number;
  taper?: number;
  position?: number;
  fanMode?: "center" | "left" | "right";
  glow?: number;
  falloff?: number;
  thickness?: number;
  brightness?: number;
  opacity?: number;
  mirror?: boolean;
  shimmer?: boolean;
  grain?: boolean;
  grainIntensity?: number;
  mouseInteraction?: boolean;
  mouseStrength?: number;
};

export default function WebThreads({
  color1 = "#02091B",
  color2 = "#122847",
  color3 = "#425676",

  speed = 0.18,
  threadCount = 6,
  frequency = 5,
  spread = 0.18,
  taper = 1,
  position = 0.5,
  fanMode = "center",

  glow = 0.02,
  falloff = 0.6,
  thickness = 1.1,
  brightness = 0.55,
  opacity = 0.9,

  mirror = true,
  shimmer = false,

  grain = true,
  grainIntensity = 0.035,

  mouseInteraction = true,
  mouseStrength = 0.25,
}: WebThreadsProps) {

  const containerRef =
    useRef<HTMLDivElement | null>(null);

  const mouseRef =
    useRef({
      enabled: mouseInteraction,
      strength: mouseStrength,
    });

  useEffect(() => {

    const container =
      containerRef.current;

    if (!container) return;

    const renderer =
      new Renderer({
        webgl: 2,
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        dpr: Math.min(
          window.devicePixelRatio || 1,
          2
        ),
      });

    const gl = renderer.gl;

    gl.clearColor(
      0,
      0,
      0,
      0
    );

    const canvas = gl.canvas;

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";

    container.appendChild(canvas);

    const geometry =
      new Triangle(gl);

    const program =
      new Program(gl, {
        vertex,
        fragment,

        uniforms: {

          iTime: {
            value: 0,
          },

          iResolution: {
            value:
              new Float32Array([
                1,
                1,
              ]),
          },

          uSpeed: {
            value: speed,
          },

          uThreadCount: {
            value:
              Math.round(
                threadCount
              ),
          },

          uFrequency: {
            value: frequency,
          },

          uSpread: {
            value: spread,
          },

          uTaper: {
            value: taper,
          },

          uPosition: {
            value: position,
          },

          uFanMode: {
            value:
              FAN_MODE[fanMode],
          },

          uGlow: {
            value: glow,
          },

          uFalloff: {
            value: falloff,
          },

          uThickness: {
            value: thickness,
          },

          uBrightness: {
            value: brightness,
          },

          uOpacity: {
            value: opacity,
          },

          uMirror: {
            value:
              mirror ? 1 : 0,
          },

          uShimmer: {
            value:
              shimmer ? 1 : 0,
          },

          uGrain: {
            value:
              grain ? 1 : 0,
          },

          uGrainIntensity: {
            value:
              grainIntensity,
          },

          uColor1: {
            value:
              new Float32Array(
                hexToRgb(color1)
              ),
          },

          uColor2: {
            value:
              new Float32Array(
                hexToRgb(color2)
              ),
          },

          uColor3: {
            value:
              new Float32Array(
                hexToRgb(color3)
              ),
          },

          uMouse: {
            value:
              new Float32Array([
                0.5,
                0.5,
              ]),
          },

          uMouseStrength: {
            value: mouseStrength,
          },

          uEnableMouse: {
            value:
              mouseInteraction ? 1 : 0,
          },

          uMouseActive: {
            value: 0,
          },
        },
      });

    const mesh =
      new Mesh(gl, {
        geometry,
        program,
      });

    ctxMap.set(
      container,
      {
        renderer,
        program,
        mesh,
      }
    );

    const setSize = () => {

      const rect =
        container.getBoundingClientRect();

      const width =
        Math.max(
          1,
          Math.floor(rect.width)
        );

      const height =
        Math.max(
          1,
          Math.floor(rect.height)
        );

      renderer.setSize(
        width,
        height
      );

      const resolution =
        program.uniforms
          .iResolution.value;

      resolution[0] =
        gl.drawingBufferWidth;

      resolution[1] =
        gl.drawingBufferHeight;

      renderer.render({
        scene: mesh,
      });
    };

    const resizeObserver =
      new ResizeObserver(
        setSize
      );

    resizeObserver.observe(
      container
    );

    setSize();

    const currentMouse = [
      0.5,
      0.5,
    ];

    const targetMouse = [
      0.5,
      0.5,
    ];

    let currentActive = 0;
    let targetActive = 0;

    const onMouseMove = (
      event: MouseEvent
    ) => {

      const rect =
        canvas.getBoundingClientRect();

      targetMouse[0] =
        (event.clientX - rect.left) /
        rect.width;

      targetMouse[1] =
        1 -
        (event.clientY - rect.top) /
        rect.height;

      targetActive = 1;
    };

    const onMouseEnter = () => {
      targetActive = 1;
    };

    const onMouseLeave = () => {
      targetActive = 0;
    };

    canvas.addEventListener(
      "mousemove",
      onMouseMove
    );

    canvas.addEventListener(
      "mouseenter",
      onMouseEnter
    );

    canvas.addEventListener(
      "mouseleave",
      onMouseLeave
    );

    let animationFrame = 0;

    let isVisible = true;

    let isPageVisible =
      !document.hidden;

    const startTime =
      performance.now();

    const loop = (
      time: number
    ) => {

      program.uniforms.iTime.value =
        (time - startTime) *
        0.001;

      currentMouse[0] +=
        0.05 *
        (
          targetMouse[0] -
          currentMouse[0]
        );

      currentMouse[1] +=
        0.05 *
        (
          targetMouse[1] -
          currentMouse[1]
        );

      currentActive +=
        0.05 *
        (
          targetActive -
          currentActive
        );

      program.uniforms.uMouse.value[0] =
        currentMouse[0];

      program.uniforms.uMouse.value[1] =
        currentMouse[1];

      program.uniforms.uMouseActive.value =
        currentActive;

      program.uniforms.uEnableMouse.value =
        mouseRef.current.enabled
          ? 1
          : 0;

      program.uniforms.uMouseStrength.value =
        mouseRef.current.strength;

      renderer.render({
        scene: mesh,
      });

      animationFrame =
        requestAnimationFrame(
          loop
        );
    };

    const tryStart = () => {

      if (
        isVisible &&
        isPageVisible &&
        animationFrame === 0
      ) {
        animationFrame =
          requestAnimationFrame(
            loop
          );
      }
    };

    const tryStop = () => {

      if (
        animationFrame !== 0
      ) {

        cancelAnimationFrame(
          animationFrame
        );

        animationFrame = 0;
      }
    };

    const intersectionObserver =
      new IntersectionObserver(
        ([entry]) => {

          isVisible =
            entry.isIntersecting;

          if (isVisible) {
            tryStart();
          } else {
            tryStop();
          }
        },
        {
          threshold: 0,
        }
      );

    intersectionObserver.observe(
      container
    );

    const onVisibilityChange =
      () => {

        isPageVisible =
          !document.hidden;

        if (isPageVisible) {
          tryStart();
        } else {
          tryStop();
        }
      };

    document.addEventListener(
      "visibilitychange",
      onVisibilityChange
    );

    tryStart();

    return () => {

      tryStop();

      resizeObserver.disconnect();

      intersectionObserver.disconnect();

      document.removeEventListener(
        "visibilitychange",
        onVisibilityChange
      );

      canvas.removeEventListener(
        "mousemove",
        onMouseMove
      );

      canvas.removeEventListener(
        "mouseenter",
        onMouseEnter
      );

      canvas.removeEventListener(
        "mouseleave",
        onMouseLeave
      );

      ctxMap.delete(
        container
      );

      try {

        container.removeChild(
          canvas
        );

      } catch {}

      gl
        .getExtension(
          "WEBGL_lose_context"
        )
        ?.loseContext();
    };

  }, []);

  useEffect(() => {

    const container =
      containerRef.current;

    if (!container) return;

    const context =
      ctxMap.get(container);

    if (!context) return;

    const { program } =
      context;

    const uniforms =
      program.uniforms;

    uniforms.uSpeed.value =
      speed;

    uniforms.uThreadCount.value =
      Math.round(
        threadCount
      );

    uniforms.uFrequency.value =
      frequency;

    uniforms.uSpread.value =
      spread;

    uniforms.uTaper.value =
      taper;

    uniforms.uPosition.value =
      position;

    uniforms.uFanMode.value =
      FAN_MODE[fanMode] ?? 0;

    uniforms.uGlow.value =
      glow;

    uniforms.uFalloff.value =
      falloff;

    uniforms.uThickness.value =
      thickness;

    uniforms.uBrightness.value =
      brightness;

    uniforms.uOpacity.value =
      opacity;

    uniforms.uMirror.value =
      mirror ? 1 : 0;

    uniforms.uShimmer.value =
      shimmer ? 1 : 0;

    uniforms.uGrain.value =
      grain ? 1 : 0;

    uniforms.uGrainIntensity.value =
      grainIntensity;

    const rgb1 =
      hexToRgb(color1);

    uniforms.uColor1.value[0] =
      rgb1[0];

    uniforms.uColor1.value[1] =
      rgb1[1];

    uniforms.uColor1.value[2] =
      rgb1[2];

    const rgb2 =
      hexToRgb(color2);

    uniforms.uColor2.value[0] =
      rgb2[0];

    uniforms.uColor2.value[1] =
      rgb2[1];

    uniforms.uColor2.value[2] =
      rgb2[2];

    const rgb3 =
      hexToRgb(color3);

    uniforms.uColor3.value[0] =
      rgb3[0];

    uniforms.uColor3.value[1] =
      rgb3[1];

    uniforms.uColor3.value[2] =
      rgb3[2];

    uniforms.uMouseStrength.value =
      mouseStrength;

    uniforms.uEnableMouse.value =
      mouseInteraction ? 1 : 0;

    mouseRef.current.enabled =
      mouseInteraction;

    mouseRef.current.strength =
      mouseStrength;

  }, [
    color1,
    color2,
    color3,
    speed,
    threadCount,
    frequency,
    spread,
    taper,
    position,
    fanMode,
    glow,
    falloff,
    thickness,
    brightness,
    opacity,
    mirror,
    shimmer,
    grain,
    grainIntensity,
    mouseInteraction,
    mouseStrength,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    />
  );
}