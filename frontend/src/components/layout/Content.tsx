import { HeroSection } from "../sections/HeroSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { WorkflowSection } from "../sections/WorkflowSection";
import { StatsSection } from "../sections/StatsSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { PagesSection } from "../sections/PagesSection";
import { PricingSection } from "../sections/PricingSection";
import { CtaSection } from "../sections/CtaSection";

type ContentProps = {
  onOpenSignUp: () => void;
  currentPlanName?: string;
};

export function Content({ onOpenSignUp, currentPlanName }: ContentProps) {
  return (
    <main>
      <HeroSection onOpenSignUp={onOpenSignUp} />
      <FeaturesSection />
      <WorkflowSection />
      <StatsSection />
      <TestimonialsSection />
      <PagesSection />
      <PricingSection onOpenSignUp={onOpenSignUp} currentPlanName={currentPlanName} />
      <CtaSection onOpenSignUp={onOpenSignUp} />
    </main>
  );
}
