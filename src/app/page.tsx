import { ProblemSolution } from "../../components/problemsolution";
import KeyBenefits from "@/components/KeyBenefits";
import { SparklesPreviewColorful } from "@/components/Teaser";
import App from "@/components/newHeroSec";
import { HeroHeader } from "@/components/header";
import FAQsTwo from "@/components/FAQsection";
import FooterPage from "@/components/footerpage";

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
      <FooterPage />
    </>
  );
}
