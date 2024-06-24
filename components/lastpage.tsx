import orpheus from "../assets/orpheus2.svg";
import clickMe from "../assets/clickMe.svg";
import Image from "next/image";

const Lastpage = () => {
  return (
    <div className="bg-[url('/lastpage.svg')] h-[100vh] bg-cover relative">
      <a href="https://hackclub.com">
      <Image
        src={orpheus}
        alt="orpheus"
        fetchPriority="high"
        className="absolute bottom-[250px] left-1/2 transform -translate-x-1/2"
      />
    </a>
      <Image 
        src={clickMe}
        alt="clickMe"
        fetchPriority="high"
        className="absolute bottom-[440px]  sm:right-[400px] right-[-4rem] transform -translate-x-1/2 "
        />
    </div>
  );
}

export default Lastpage;
