import { FaqSection } from "@/components/landing/faq-section"
import { Features } from "@/components/landing/features"
import { GettingStarted } from "@/components/landing/getting-started"
import { Hero } from "@/components/landing/hero"
import { InstallSection } from "@/components/landing/install-section"
import { LimitationsSection } from "@/components/landing/limitations-section"
import { PrivacySection } from "@/components/landing/privacy-section"
import { ProblemSolution } from "@/components/landing/problem-solution"
import { SiteFooter } from "@/components/landing/site-footer"

export function LandingPage() {
  return (
    <div className="min-h-svh">
      <Hero />
      <ProblemSolution />
      <Features />
      <InstallSection />
      <PrivacySection />
      <LimitationsSection />
      <GettingStarted />
      <FaqSection />
      <SiteFooter />
    </div>
  )
}
