import orpheus from "../assets/orpheus2.svg";
import Image from "next/image";
const Lastpage = () => {
  return (
    <div className="bg-[url('/lastpage.svg')] h-[100vh] bg-cover "> 
      <Image
        src={orpheus}
        alt="orpheus"
        fetchPriority="high"
        className="absolute bottom-[-1985px] sm:left-[45rem]"
      />
    </div> 
  );
}

export default Lastpage;
