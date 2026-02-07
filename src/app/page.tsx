import Image from "next/image";
import { SparkleText } from "@/components/sparkles";

export default function Home() {
  return (
    <div className="custom-cursor">
      <div className="backdrop-blur-xs bg-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center">
          <Image
            src="/pfp.png"
            alt="pfp"
            width={100}
            height={100}
            className="rounded-full"
            loading="eager"
          />
        </div>

        <div className="flex justify-center">
          <SparkleText
            color="white"
            className="text-white text-4xl font-bold mt-4"
            glowColor="#ffffff"
          >
            kolioaris
          </SparkleText>
        </div>
      </div>
    </div>
  );
}
