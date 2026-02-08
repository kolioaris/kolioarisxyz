"use client";

import Image from "next/image";
import { SparkleText } from "@/components/sparkles";
import { useState, useEffect } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText = "Your text here";

  useEffect(() => {
    const handleType = () => {
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 75 : 150);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <div className="custom-cursor min-h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 custom-cursor" />
      <div className="backdrop-blur-md bg-white/1 rounded-2xl p-8 w-full max-w-md shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-black/10">
        <div className="flex items-center gap-4">
          <Image
            src="/pfp.png"
            alt="pfp"
            width={100}
            height={100}
            className="rounded-full"
            loading="eager"
          />
          <div className="flex flex-col">
            <SparkleText
              color="white"
              className="text-white text-4xl font-bold"
              glowColor="#ffffff"
            >
              kolioaris
            </SparkleText>
            <p className="text-white mt-2 text-xl min-h-7">
              {text}
              <span className="animate-blink">|</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
