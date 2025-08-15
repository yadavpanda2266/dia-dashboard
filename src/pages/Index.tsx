import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { ClinicalEvidence } from "@/components/landing/ClinicalEvidence";
import { AppDownloadSection } from "@/components/landing/AppDownloadSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ClinicalEvidence />
      <AppDownloadSection />
    </div>
  );
};

export default Index;
