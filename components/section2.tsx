import flowers from "../assets/flowers.svg";
import Image from "next/image";
const Section2 = () => {
  return (
    <div className="bg-[url('../assets/sand.svg')] h-[100vh] bg-cover ">
      <div className="flex items-center justify-center gap-[500px]">
        <div>
          <div className="text-white">What is a hackathon?</div>
          <div></div>
        </div>

        <div>
          <div className="text-white">Build a Boat!</div>
          <div></div>
        </div>
      </div>
      <div className="text-center flex justify-center">
        <Image src={flowers} alt="flowers" />
      </div>
    </div>
  );
};

export default Section2;
