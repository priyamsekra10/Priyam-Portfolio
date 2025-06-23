/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import HeroLink from "./HeroLink";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div
        className="relative w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        {/* <img src="/priyam.jpg" alt="" width={250} height={300}/> */}
        <img src="/priyam.jpg" alt="" width={250} height={250} className="rounded float-left mt-4"/>
        <br />

        <p className="text-xl mb-5">
               {"Hey I'm Priyam".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              );
            })}
        </p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I enjoy <span className="heroShiny1 text-fun-pink">building</span> and{" "}
          <span className="heroShiny2 text-fun-pink">designing</span> AI
          <img
            alt="html"
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src={`static/doodles/hero/html.svg`}
          />
          <img
            alt="nextjs"
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src={`static/doodles/hero/nextjs.svg`}
          />
          <img
            alt="coder"
            className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
            style={{ animationDelay: "0.4s" }}
            src={`static/doodles/hero/coder.svg`}
          />
          <img
            alt="js"
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src={`static/doodles/hero/js.svg`}
          />
          <img
            alt="dino"
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src={`static/doodles/hero/dino.svg`}
          />
          <img
            alt="paintbrush"
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src={`static/doodles/hero/paintbrush.svg`}
          />
          <img
            alt="pop1"
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src={`static/doodles/hero/pop1.svg`}
          />
          <img
            alt="code"
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src={`static/doodles/hero/code.svg`}
          />
        </h1>
        <HeroLink />
        
      </div>
      <h3 className="heroTitle inline-block max-w-7xl lg:max-w-8xl  w-auto relative text-4xl md:text-4xl lg:text-4xl tracking-tighter mb-10 font-bold heroShinyBg">Want to know about my StartUp's</h3>
      <br />
      <Link href="https://www.linkedin.com/company/aiprostacksolutions/">
  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      AIProStackSolutions
    </span>
  </button>
</Link>

<Link href="https://resq-notify.onrender.com">
  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      ResQNotify
    </span>
  </button>
</Link>
    </>
  );
}

export default Hero;
