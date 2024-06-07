import { useEffect } from "react";
import Image from "next/image";
import beach_ball from "../assets/ball.webp";

const Index = () => {
  useEffect(() => {
    const ball = document.querySelector(".bouncing-ball") as HTMLElement | null;
    if (!ball) return;

    let x = Math.random() * (window.innerWidth - 50);
    let y = Math.random() * (window.innerHeight - 50);
    let vx = (Math.random() - 0.5) * 4;
    let vy = (Math.random() - 0.5) * 18;

    const animate = () => {
      const ballRect = ball.getBoundingClientRect();
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      y += vy;
      x += vx; // Add horizontal movement

      if (x + ballRect.width >= containerWidth || x <= 0) {
        vx = -vx + (Math.random() - 0.5) * 2; 
        x = Math.max(0, Math.min(x, containerWidth - ballRect.width));
      }

      if (y + ballRect.height >= containerHeight || y <= 0) {
        vy = -vy + (Math.random() - 0.5) * 2; 
        y = Math.max(0, Math.min(y, containerHeight - ballRect.height));
      }

      ball.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src={beach_ball}
          alt="Bouncing Ball"
          width={100}
          height={100}
          className="bouncing-ball h-[120px] w-[120px]"
        />
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center font-extrabold text-[60px] z-10 text-3d">
          Hack The Beach
        </div>
      </div>
    </div>
  );
};

export default Index;
