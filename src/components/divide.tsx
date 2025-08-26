import Marquee from "react-fast-marquee";
import RuleMiddle from "@/assets/ruleMid.svg";

export default function Divide() {
  return (
    <div className="bg-primary flex justify-center">
      <Marquee
        className="bg-primary flex max-w-1/2 opacity-50"
        autoFill
        pauseOnHover
        speed={10}
        direction="left"
        gradient
        gradientColor="oklch(0.3445 0.0098 61.17)"
      >
        <img src={RuleMiddle} />
      </Marquee>
    </div>
  );
}
