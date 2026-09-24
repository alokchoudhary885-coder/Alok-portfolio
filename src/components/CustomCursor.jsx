import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, .interactive-card, [role="button"]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  // Smooth lerp trailing animation
  useEffect(() => {
    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animateTrailing = () => {
      setTrailingPos(prev => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18)
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };

    animationFrameId = requestAnimationFrame(animateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Dynamic Cursor Torch Background Spotlight — Neon Lime */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(204, 255, 0, 0.04), transparent 80%)`
        }}
      />

      {/* Main Sharp Dot — Neon Lime #CCFF00 */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full transition-transform duration-75 hidden md:block"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isClicking ? 0.7 : isHovered ? 1.5 : 1})`,
          width: '8px',
          height: '8px',
          backgroundColor: '#CCFF00',
          boxShadow: '0 0 10px #CCFF00, 0 0 20px rgba(204, 255, 0, 0.5)'
        }}
      />

      {/* Trailing Ring — Neon Lime */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-40 rounded-full transition-all duration-100 ease-out hidden md:block"
        style={{
          transform: `translate3d(${trailingPos.x - 18}px, ${trailingPos.y - 18}px, 0) scale(${isHovered ? 1.7 : 1})`,
          width: '36px',
          height: '36px',
          backgroundColor: isHovered ? 'rgba(204, 255, 0, 0.08)' : 'transparent',
          border: `1px solid ${isHovered ? '#CCFF00' : 'rgba(255, 255, 255, 0.2)'}`,
          boxShadow: isHovered ? '0 0 16px rgba(204, 255, 0, 0.25)' : 'none'
        }}
      />
    </>
  );
}
