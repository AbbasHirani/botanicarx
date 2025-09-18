import Image from "next/image";
import LandingSection from "../../components/herosection";
import { ProblemSolution } from "../../components/problemsolution";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ProblemSolution  />
    </>
  );
}
