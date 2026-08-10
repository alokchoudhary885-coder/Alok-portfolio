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
      if (e.target.closest('a, button, input, .interactive-card, [role="button"]')) {
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
      {/* Dynamic Cursor Torch Background Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.07), transparent 80%)`
        }}
      />

      {/* Main Sharp Neon Dot */}
      <div 
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-purple-400 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isClicking ? 0.7 : isHovered ? 1.6 : 1})`,
          width: '8px',
          height: '8px',
          boxShadow: '0 0 12px #c084fc, 0 0 24px #a855f7'
        }}
      />

      {/* Trailing Ring */}
      <div 
        className="pointer-events-none fixed top-0 left-0 z-40 rounded-full border border-purple-400/60 transition-all duration-100 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x - 18}px, ${trailingPos.y - 18}px, 0) scale(${isHovered ? 1.8 : 1})`,
          width: '36px',
          height: '36px',
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.12)' : 'transparent',
          borderColor: isHovered ? '#c084fc' : 'rgba(255, 255, 255, 0.25)',
          boxShadow: isHovered ? '0 0 20px rgba(168, 85, 247, 0.3)' : 'none'
        }}
      />
    </>
  );
}
