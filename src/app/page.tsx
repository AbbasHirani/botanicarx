import Image from "next/image";
import LandingSection from "../../components/herosection";
import { ProblemSolution } from "../../components/problemsolution";
import { Key } from "lucide-react";
import KeyBenefits from "@/components/KeyBenefits";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ProblemSolution  />
      <KeyBenefits />
    </>
  );
}
