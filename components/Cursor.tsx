import { useEffect } from 'react';
import cursorImage from '../assets/diver.svg'

const Cursor = () => {
  useEffect(() => {
    const customCursor = document.createElement('div');
    customCursor.id = 'custom-cursor';
    customCursor.style.position = 'fixed';
    customCursor.style.width = '72px'; 
    customCursor.style.height = '72px';
    customCursor.style.pointerEvents = 'none';
    customCursor.style.zIndex = '10000';
    customCursor.style.backgroundImage = `url(${cursorImage.src})`;
    customCursor.style.backgroundSize = 'cover';
    customCursor.style.mixBlendMode = 'difference';
    document.body.appendChild(customCursor);

    const moveCursor = (e: MouseEvent) => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(customCursor);
    };
  }, []);

  return null;
};

export default Cursor;
