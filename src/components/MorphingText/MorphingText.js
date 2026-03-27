"use client";
import { useCallback, useEffect, useRef } from "react";
import "./morphing-text.css";

const morphTime = 1.5;
const cooldownTime = 0.5;

const useMorphingText = (texts) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(cooldownTime); // ✅ start with cooldown
  const timeRef = useRef(new Date());

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const setStyles = useCallback((fraction) => {
    const current1 = text1Ref.current;
    const current2 = text2Ref.current;
    if (!current1 || !current2) return;

    // ✅ prevent divide by zero
    fraction = Math.max(fraction, 0.0001);

    current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    current2.style.opacity = `${Math.pow(fraction, 0.4)}`;

    const inverted = 1 - fraction;

    current1.style.filter = `blur(${Math.min(8 / Math.max(inverted, 0.0001) - 8, 100)}px)`;
    current1.style.opacity = `${Math.pow(inverted, 0.4)}`;

    current1.textContent = texts[textIndexRef.current % texts.length];
    current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
  }, [texts]);

  const doMorph = useCallback(() => {
    morphRef.current += 0.016; // ✅ smooth increment (frame based)

    let fraction = morphRef.current / morphTime;

    if (fraction >= 1) {
      fraction = 1;
      cooldownRef.current = cooldownTime;
      textIndexRef.current++;
      morphRef.current = 0;
    }

    setStyles(fraction);
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    const current1 = text1Ref.current;
    const current2 = text2Ref.current;

    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "1";
      current1.style.filter = "none";
      current1.style.opacity = "0";
    }
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const dt = (newTime - timeRef.current) / 1000;
      timeRef.current = newTime;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) {
        doMorph();
      } else {
        doCooldown();
      }
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref };
};

export default function MorphingText({ texts }) {
  const { text1Ref, text2Ref } = useMorphingText(texts);

  return (
    <div className="morphing-container">
      <span ref={text1Ref}></span>
      <span ref={text2Ref}></span>

      {/* SVG filter */}
      <svg className="svg-filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}