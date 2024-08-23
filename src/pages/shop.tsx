import Section from "@/components/Section";
import type { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image';
import { useState } from "react";

const Home: NextPage = () => {
  const [theme, setTheme] = useState("dark");
  return (
<div className={`${theme}`}>
<Head>
        <title>Scrolling White and Dark Mode Transitions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Première Section */}
      <Section theme="light" setTheme={setTheme}>
      
        <div className="flex-1 flex flex-col lg:flex-row justify-center lg:justify-between lg:max-w-6xl lg:mx-auto gap-8">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
              There's still time to work wonders
            </h1>
            <p className="text-lg font-semibold text-zinc-400 mt-4">
              <span className="text-black dark:text-white">Watch 9 Pro</span> The most rugged and capable Apple Watch ever.
            </p>
          </div>
          <div className="relative w-full lg:w-[50%] h-[20rem] lg:h-[40rem] mt-8 lg:mt-0">
            <Image 
              src="/images1/4b4061512d916a97586de2ac886a56ec.jpg" 
              alt="Apple Watch" 
              fill// Si nécessaire
              objectFit="cover"
            />
          </div>
        </div>
        </Section>
      {/* Deuxième Section */}
      <Section theme="light" setTheme={setTheme}>

       
        <div className="flex-1 flex flex-col lg:flex-row justify-center lg:justify-between lg:max-w-6xl lg:mx-auto gap-8">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-5xl xl:text-7xl font-bold text-black">
              There's still time to work wonders
            </h1>
            <p className="text-lg font-semibold text-zinc-400 mt-4">
              <span className="text-black">Watch 9 Pro</span> The most rugged and capable Apple Watch ever.
            </p>
          </div>
          <div className="relative w-full lg:w-[50%] h-[20rem] lg:h-[40rem] mt-8 lg:mt-0">
            <Image 
              src="/images1/c01d079d37fc428c8d82ff1d9bf515ec.jpg" 
              alt="Apple Watch" 
            fill// Si nécessaire

              objectFit="cover"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
