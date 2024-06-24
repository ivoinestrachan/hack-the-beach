import sign from "../assets/sign3.svg";
import apply from "../assets/apply3.svg";
import Image from "next/image";
const Section1 = () => {
  return (
    <div>
        <Image 
        src={sign}
         alt="sign" 
         fetchPriority="high"
         className="absolute b-10" />
      <a href="https://forms.gle/DkFAzj2xiVbeirDt6">
        <Image 
          src={apply}
          alt="apply"
          fetchPriority="high"
          className="absolute bottom-[-750px] sm:left-[69rem]" />
        </a>
    <div className="bg-[url('/pageTwo.svg')] h-[100vh] bg-cover ">
    </div>
      </div>
  );
}

export default Section1;
