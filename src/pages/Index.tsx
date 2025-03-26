import { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/ui/loading-spinner";
import SEO from "../components/SEO";

// Lazy loading de componentes con rutas relativas
const HeroSection = lazy(() => import("../components/HeroSection"));
const AboutSection = lazy(() => import("../components/AboutSection"));
const ExperienceSection = lazy(() => import("../components/ExperienceSection"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const Footer = lazy(() => import("../components/Footer"));
const ChatBot = lazy(() => import("../components/ChatBot"));

const Index = () => {
  return (
    <>
      <SEO 
        title="Renzo Avila | DevSecOps Engineer & Cloud Security Specialist"
        description="Senior DevSecOps Engineer specialized in application security, cloud infrastructure, and development process automation."
        canonical="/"
      />
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          <HeroSection />
          <Suspense fallback={<LoadingSpinner />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <ExperienceSection />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <ContactSection />
          </Suspense>
          <Suspense fallback={null}>
            <ChatBot />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
