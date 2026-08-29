import Hero from "../components/Hero.jsx";
import PartnerSection from "../components/PartnerSection.jsx";
import ProgramImplementation from "../components/ProgramImplementation.jsx";
import CoursesSection from "../components/CoursesSection.jsx";
import LearningPathways from "../components/LearningPathways.jsx";
import TrustedEcosystem from "../components/TrustedEcosystems.jsx";
import StudentOutcomes from "../components/StudentOutcomes.jsx";
import FAQSection from "../components/FAQSection.jsx";
import ValueForStakeholders from "../components/ValueForStakeholders.jsx";
import BuiltForEveryDiscipline from "../components/BuiltForEveryDiscipline.jsx";
import AIEcosystemSection from "../components/AIEcosystemSection.jsx";
export default function App() {
  return (
    <div className="App">
      <Hero />
      <TrustedEcosystem />
      <AIEcosystemSection />
      <LearningPathways />
      <CoursesSection />
      <BuiltForEveryDiscipline />
      <StudentOutcomes />
      <ValueForStakeholders />
      <ProgramImplementation />
      <PartnerSection />
      <FAQSection />
    </div>
  );
}
