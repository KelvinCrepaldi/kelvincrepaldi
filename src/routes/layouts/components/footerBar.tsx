import rule2 from "@/assets/rule2.svg";
import Marquee from "react-fast-marquee";
export default function FooterBar() {
  return (
    <div className="w-full h-[40px] bg-primary">
      <div className="w-full my-[2px] h-[1px] bg-background/20">x</div>
      <Marquee
        className=" flex"
        autoFill
        pauseOnHover
        speed={10}
        direction="right"
      >
        <img src={rule2} />
      </Marquee>
    </div>
  );
}
