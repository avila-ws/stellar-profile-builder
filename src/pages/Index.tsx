import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import LoadingSpinner from "@/components/ui/loading-spinner";

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
      <main role="main">
        <Suspense fallback={<LoadingSpinner />}>
          <section role="region" aria-label="hero">
            <HeroSection />
          </section>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <section role="region" aria-label="about">
            <AboutSection />
          </section>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <section role="region" aria-label="experience">
            <ExperienceSection />
          </section>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <section role="region" aria-label="contact">
            <ContactSection />
          </section>
        </Suspense>
      </main>
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
