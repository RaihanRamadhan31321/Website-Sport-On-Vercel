import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";


const HeroSection = () => <section id="hero-section" className="container mx-auto h-screen flex">
    <div className="relative self-center">
        <Image
            src="/image/img-basketball.svg"
            alt="image sporton"
            width={432}
            height={423}
            className="grayscale absolute -left-1 -top-10"
            />
    <div className="relative ml-40 w-full">
        <div className="text-primary italic">Friday Sale, 50%</div>
        <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent"> 
            WEAR YOUR <br /> TOP QUALITY <br /> SPORTSWEAR
        </h1>
        <p className="w-1/2 mt-10 leading-loose">Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. 
        Premium fabrics. Unmatched comfort. Limitless motion.</p>
        <div className="flex gap-5 mt-15">
            <Button >Explore More <FiFastForward/></Button>
            <Button variant="ghost">
            Watch Vidio {""}
            <Image
            src="/image/icon-play-video.svg"
            alt="icon playvidio"
            width={29}
            height={29}
            />
            </Button>
        </div>
    </div>
        <Image
            src="/image/img-hero.svg"
            alt="image sporton hero"
            width={700}
            height={900}
            className="absolute -right-40 top-1/2 -translate-y-1/2"
            />
    </div>
        <Image
            src="/image/img-ornament-hero.svg"
            alt="image sporton"
            width={300}
            height={300}
            className="absolute -right-[200px] top-1/2 -translate-y-1/2"
            />
</section>;

export default HeroSection;