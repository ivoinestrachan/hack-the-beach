import flowers from "../assets/flowers.svg";
import Image from "next/image";
const Section2 = () => {
  return (
    <div className="bg-[url('../assets/sand.svg')] h-[100vh] bg-cover ">
      <div className="text-center flex justify-center pt-10">
        <Image src={flowers} alt="flowers" />
      </div>
      <div className="sm:flex items-center justify-center gap-[100px] mt-20">
        <div className="bg-[#FFEAC7] w-[500px] py-10 rounded-[12px]">
          <div className="text-[#E17E23] text-[32px] league text-center">
            What is a hackathon?
          </div>
          <div className="league text-[#F4B349] text-center text-18px]">
            A social coding marathon! Imagine a weekend where teenagers come
            together to code projects for fun—however goofy or janky—and share
            them with each other. You’ll have a goal to work towards, side
            quests to tackle, and new friends to hang out with. You don’t need
            coding experience—just an open mind.
          </div>
        </div>

        <div className="bg-[#FFEAC7] w-[500px]  rounded-[12px] h-[30vh] py-10">
          <div className="text-[#E17E23] text-[32px] league text-center">
            Where?
          </div>
          <div className="league text-center text-[#F4B349] text-[18px]">
            Sandy Port, Bahamas!<br></br>
            July 17th, 2024.
          </div>
        </div>
      </div>

      <div className="text-center flex justify-center pt-10"></div>
      <div className="sm:flex items-center justify-center gap-[100px] mt-20">
        <div className="bg-[#FFEAC7] w-[500px] py-10 rounded-[12px]">
          <div className="text-[#E17E23] text-[32px] league text-center">
            What is a hackathon?
          </div>
          <div className="league text-[#F4B349] text-center text-18px]">
            A social coding marathon! Imagine a weekend where teenagers come
            together to code projects for fun—however goofy or janky—and share
            them with each other. You’ll have a goal to work towards, side
            quests to tackle, and new friends to hang out with. You don’t need
            coding experience—just an open mind.
          </div>
        </div>

        <div className="bg-[#FFEAC7] w-[500px]  rounded-[12px] h-[30vh] py-10">
          <div className="text-[#E17E23] text-[32px] league text-center">
            Where?
          </div>
          <div className="league text-center text-[#F4B349] text-[18px]">
            Sandy Port, Bahamas!<br></br>
            July 17th, 2024.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
