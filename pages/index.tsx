import Image from "next/image";
import boat from "../assets/boat1.svg";
import strokes from "../assets/strokes.svg";

const index = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-yellow-500 to-transparent h-[40vh] opacity-50 relative z-10 "></div>
   

      <div className="flex items-center justify-center">
        <Image src={boat} alt="boat" className="absolute" />
      </div> 
    </div>
  );
};

export default index;
