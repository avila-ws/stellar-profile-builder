import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import LoadingSpinner from "@/components/ui/loading-spinner";
import SEO from "@/components/SEO";

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
      <SEO 
        title="Renzo Avila - Professional Profile"
        description="Renzo Avila's professional portfolio, showcasing experience, technical skills, and featured projects."
        canonical="/"
      />
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        <Suspense fallback={<LoadingSpinner />}>
          <section role="region" aria-label="Renzo Avila">
            <HeroSection />
          </section>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <section role="region" aria-label="About Me">
            <AboutSection />
          </section>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <section role="region" aria-label="Experience">
            <ExperienceSection />
          </section>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <section role="region" aria-label="Contact">
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
