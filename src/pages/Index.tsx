import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { DiabetesDiscussion } from "@/components/landing/DiabetesDiscussion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DiabetesDiscussion />
    </div>
  );
};

export default Index;
