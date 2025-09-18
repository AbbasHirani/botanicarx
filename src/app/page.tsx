import Image from "next/image";
import LandingSection from "../../components/herosection";
import { ProblemSolution } from "../../components/problemsolution";
import { Key, Sparkle } from "lucide-react";
import KeyBenefits from "@/components/KeyBenefits";
import { SparklesPreview , SparklesPreviewColorful, SparklesPreviewDark} from "@/components/Teaser";
import App from "@/components/newHeroSec";
import { HeroHeader } from "@/components/header";
import FAQsTwo from "@/components/FAQsection";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <App />
      {/* <LandingSection /> */}
      <ProblemSolution  />
      <KeyBenefits />
      <SparklesPreviewColorful />
      <FAQsTwo />
    </>
  );
}
