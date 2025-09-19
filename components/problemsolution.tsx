"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ProblemSolution() {
  return (
    <div
    id="details" 
    className="h-full w-full flex flex-col items-center justify-start bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <h1 className="relative z-20 text-3xl md:text-5xl font-extrabold text-white dark:text-white text-center mt-40 mb-0">
        The Problem We’re Here to Solve
      </h1>
      <div className="relative z-10 w-full max-w-7xl  grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 p-2 md:p-8 mb-20 mt-0">
        {/* Problem Card */}
        <CardContainer className="inter-var h-full">
          <CardBody className="bg-white dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-8 border flex flex-col justify-between items-center text-center">
            <div className="w-full flex flex-col items-center">
              <CardItem translateZ="50" className="text-3xl font-extrabold text-black dark:text-white mb-4 text-center">
                Problem
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-700 text-lg max-w-md mt-2 mb-4 dark:text-neutral-300 text-center">
                Every year, millions of crops fail.
              </CardItem>
            </div>

            <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
              <Image
                src="/problem.png"
                height="1000"
                width="1000"
                className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="problem-thumbnail"
              />
            </CardItem>

            <div className="w-full mt-6">
              <CardItem as="p" translateZ="60" className="text-neutral-700 text-md max-w-md mt-2 mb-4 dark:text-neutral-300 text-center">
                Farmers pour their savings, time, and energy into growing food—only to watch much of it wither away due to droughts, disease, and unpredictable conditions. The result? Lost harvests, broken hopes, and disrupted livelihoods.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        {/* Solution Card */}
        <CardContainer className="inter-var h-full">
          <CardBody className="bg-white dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-8 border flex flex-col justify-between items-center text-center">
            <div className="w-full flex flex-col items-center">
              <CardItem translateZ="50" className="text-3xl font-extrabold text-black dark:text-white mb-4 text-center">
                Solution
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-700 text-lg max-w-md mt-2 mb-4 dark:text-neutral-300 text-center">
                That’s why we’re creating something revolutionary.
              </CardItem>
            </div>

            <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
              <Image
                src="/healthy.png"
                height="1000"
                width="1000"
                className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="solution-thumbnail"
              />
            </CardItem>

            <div className="w-full mt-6">
              <CardItem as="p" translateZ="60" className="text-neutral-700 text-md max-w-md mt-2 mb-4 dark:text-neutral-300 text-center">
              A 100% natural shield for crops—helping plants heal, stay resilient, and deliver stronger harvests even in tough conditions.
              With this breakthrough, farmers don’t just safeguard their fields. They secure their income, their future, and their communities.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}