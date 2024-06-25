import Image from "next/image";
import boat from "../assets/boatfish.svg";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Lastpage from "@/components/lastpage";

const index = () => {
  return (
    <div>
      <div>
        <div className="bg-gradient-to-b from-yellow-500 to-transparent h-[100vh] opacity-50 relative z-10 "></div>
        
        <div className="relative">
          <div className="flex items-center justify-center ">
            
            <Image
              src={boat}
              alt="boat"
              fetchPriority="high"
              className="absolute bottom-[-85px] sm:left-[10rem]"
            />
            
          </div>
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Lastpage />
    </div>
  );
};

export default index;
