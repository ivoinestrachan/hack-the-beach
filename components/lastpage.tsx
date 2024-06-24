import orpheus from "../assets/orpheus2.svg";
import Image from "next/image";

const Lastpage = () => {
  return (
    <div className="bg-[url('/lastpage.svg')] h-[100vh] bg-cover relative">
      <Image
        src={orpheus}
        alt="orpheus"
        fetchPriority="high"
        className="absolute bottom-[250px] left-1/2 transform -translate-x-1/2"
      />
    </div>
  );
}

export default Lastpage;
