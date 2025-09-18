import Image from "next/image";
import LandingSection from "../../components/herosection";
import { ProblemSolution } from "../../components/problemsolution";
import { Key, Sparkle } from "lucide-react";
import KeyBenefits from "@/components/KeyBenefits";
import { SparklesPreview , SparklesPreviewColorful, SparklesPreviewDark} from "@/components/Teaser";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ProblemSolution  />
      <KeyBenefits />
      <SparklesPreviewColorful />
    </>
  );
}
