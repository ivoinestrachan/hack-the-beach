import Image from "next/image";
import boat from "../assets/boat.svg";
import bonfire from "../assets/bonfire.svg";

const About = () => {
  return (
    <div>
      <div className="sm:flex items-center justify-between sm:w-[95%]">
        <div>
          <div className="text-white font-bold text-[42px] sm:px-10 px-5">
            A <span className="underline">hackathon</span> on a beach?
          </div>
          <div className="text-white sm:px-[3rem] px-8 text-[22px]">
            A 12-hr hackathon hosted in Nasaau Bahamas
          </div>
        </div>
        <div className="flex gap-4 sm:pt-[130px] justify-center">
          <div>
            <Image src={boat} alt="boat" />
          </div>
          <div>
            <Image src={bonfire} alt="bonfire" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
