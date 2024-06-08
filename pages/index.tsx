import { useEffect, useState } from "react";
import Image from "next/image";
import beach_ball from "../assets/ball.webp";
import Cursor from "@/components/Cursor";
import About from "@/components/About";
import Register from "@/components/Register";

const Index = () => {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const depth = window.scrollY;
      setScrollDepth(depth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      x += vx;

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
    <div className="relative min-h-screen overflow-x-hidden">
     <Cursor />
      <video 
        autoPlay 
        loop 
        muted 
        controls
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="https://cloud-ajdh27epl-hack-club-bot.vercel.app/0underwater_ocean_waves.mp4" type="video/mp4" />
       not working on your browser
      </video>
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
        <div className="text-center font-extrabold sm:text-[60px] text-[40px] text-yellow-300">
          Hack The Beach
        </div>
      </div>
      
      <div className="fixed top-0 right-0 mt-10 mr-4 flex flex-col space-y-4">
        {Array.from({ length: 30 }, (_, index) => (
          <div
            key={index}
            className="w-20 h-10 bg-blue-500 flex items-center justify-center text-white z-10"
            style={{ opacity: scrollDepth > index * 200 ? 1 : 0.5 }}
          >
            {index * 10} ft
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Index;
