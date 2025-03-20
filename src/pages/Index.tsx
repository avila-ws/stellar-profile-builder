import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import LoadingSpinner from "../components/ui/loading-spinner";

// Lazy loading de componentes
const HeroSection = lazy(() => import("@/components/HeroSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const ChatBot = lazy(() => import("@/components/ChatBot"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ChatBot />
      </Suspense>
    </div>
  );
};

export default Index;
