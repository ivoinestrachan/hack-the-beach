import sign from "../assets/sign.svg";
import Image from "next/image";
const Section1 = () => {
  return (
    <div>
        <Image 
        src={sign}
         alt="sign" 
         fetchPriority="high"
         className="absolute b-10" />
    <div className="bg-[url('/pageTwo.svg')] h-[100vh] bg-cover ">
    </div>
      </div>
  );
}

export default Section1;
