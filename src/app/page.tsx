import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";
import Features from "@/components/sections/Features";
import Agents from "@/components/sections/Agents";
import HowItWorks from "@/components/sections/HowItWorks";
import Quickstart from "@/components/sections/Quickstart";
import Roadmap from "@/components/sections/Roadmap";
import Footer from "@/components/sections/Footer";

const Divider = () => (
  <div
    className="max-w-6xl mx-auto px-6"
  >
    <div style={{ height: "1px", backgroundColor: "var(--border)" }} />
  </div>
);

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Divider />
      <Why />
      <Divider />
      <Features />
      <Divider />
      <Agents />
      <Divider />
      <HowItWorks />
      <Divider />
      <Quickstart />
      <Divider />
      <Roadmap />
      <Footer />
    </main>
  );
}