import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { DiabetesDiscussion } from "@/components/landing/DiabetesDiscussion";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DiabetesDiscussion />
      <Footer />
    </div>
  );
};

export default Index;
