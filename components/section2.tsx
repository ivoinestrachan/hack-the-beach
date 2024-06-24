import flowers from "../assets/flowers.svg";
import Image from "next/image";
import flower from "../assets/flower.svg";
import pinkCoral from "../assets/pinkCoral.svg";
import seaweed from "../assets/seaweed.svg";
import shell from "../assets/shell.svg";
const Section2 = () => {
  return (
    <div className="bg-[url('/sand.svg')] sm:h-[100vh] h-[150vh] bg-cover ">
      <div className="sm:flex items-center justify-center gap-[100px] mt-20">
        <div className="bg-[#FFEAC7] sm:w-[500px] py-12rem rounded-[12px] h-[35vh] overflow-hidden flex flex-col justify-center">
          <div className="text-[#E17E23] text-[32px] league text-center">
            What is a hackathon?
          </div>
          <div className="league text-[#F4B349] text-center text-[18px] mr-10 ml-10">
            A social coding marathon! Imagine a weekend where  
            teenagers come together to code projects for fun—however goofy or 
            janky—and share
            them with each other. You’ll have a goal to work towards, side
            quests to tackle, and new friends to hang out with. You don’t need
            coding experience—just an open mind.
          </div>
          <Image src={pinkCoral} alt="pinkCoral" fetchPriority="high" className="absolute z-10 left-[55px] pt-[5rem]" />
        </div>

        <div className="bg-[#FFEAC7] sm:w-[500px] rounded-[12px] h-[30.12vh] py-10 overflow-hidden flex flex-col justify-center mt-10">
          <div className="text-[#E17E23] text-[32px] league text-center">
            Where?
          </div>
          <div className="league text-center text-[#F4B349] text-[30px]">
            Sandy Port, Bahamas!
            <br />
            July 17th, 2024.
          </div>
          <Image src={seaweed} alt="seaweed" fetchPriority="high" />
        </div>
      </div>

      <div className="text-center flex justify-center sm:pt-10"></div>
      <div className="sm:flex items-center justify-center gap-[100px] mt-10">
        {/********** a box **********/}
        <div className="bg-[#FFEAC7] sm:w-[500px] rounded-[12px] py-10 h-[50vh] overflow-hidden flex flex-col justify-center">
          <div className="text-[#E17E23] text-[32px] league text-center">
            How much does it cost?
          </div>
          <div className="league text-[#F4B349] text-center text-[30px]">
            It's free! Email <br /> ivoine@hackthebeach.dev <br /> for any
            questions/inquiries.
          </div>
          <Image src={shell} alt="shell" fetchPriority="high" />
        </div>

        <div className="bg-[#FFEAC7] sm:w-[500px] rounded-[12px] h-[30.12vh] py-10 overflow-hidden flex flex-col justify-center mt-10">
          <div className="text-[#E17E23] text-[32px] league text-center">
            Build a boat!
          </div>
          <div className="league text-center text-[#F4B349] text-[18px]">
            Sandy Port, Bahamas!
            <br />
            July 17th, 2024.
          </div> 
          <Image src={flower} alt="flower" fetchPriority="high" />
        </div>

        
      </div>
      <div className="text-center flex justify-center">
        <Image src={flowers} alt="flowers" fetchPriority="high" />
      </div>
    </div>
  );
};

export default Section2;
