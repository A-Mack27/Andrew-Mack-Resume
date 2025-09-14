import React, { useEffect, useRef } from 'react';
import { startLineAnimation, stopLineAnimation } from '../utils/lineAnimation';

const LineBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Small delay to ensure canvas is ready
    const timer = setTimeout(() => {
      startLineAnimation('line-canvas');
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      stopLineAnimation();
    };
  }, []);

  return (
    <>
      {/* Blue background for animation - red will show through as stripes */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -2,
          background: '#1FA0C1'
        }}
      />
      {/* Line animation canvas */}
      <canvas
        id="line-canvas"
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
          background: 'transparent'
        }}
      />
    </>
  );
};

export default LineBackground;
